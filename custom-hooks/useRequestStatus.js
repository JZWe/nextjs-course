import { useState, useEffect } from 'react';
import useNotification from './useNotificaiton';
function useRequestStatus(requestError) {
  const [requestStatus, setRequestStatus] = useState();
  const [notification, updateNotification, updateNotificationMessage] =
    useNotification();

  useEffect(() => {
    if (requestStatus === 'pending') {
      updateNotification(
        'pending',
        'Sending message...',
        'Your message is on its way'
      );
    }

    if (requestStatus === 'success') {
      updateNotification('success', 'Success!', 'Message sent successfully');
    }

    if (requestStatus === 'error') {
      setNotification({
        status: 'error',
        title: 'Error!',
        message: requestError,
      });
    }
  }, [requestStatus]);

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [requestStatus]);

  return [requestStatus, setRequestStatus, notification];
}

export default useRequestStatus;
