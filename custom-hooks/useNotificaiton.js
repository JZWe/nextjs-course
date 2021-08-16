import { useState } from 'react';

function useNotification() {
  const [notification, setNotification] = useState();

  const updateNotification = (status, title, message) => {
    setNotification({ status, title, message });
  };

  const updateNotificationMessage = (message) => {
    setNotification((prevNotification) => ({ ...prevNotification, message }));
  };

  return [notification, setNotification, updateNotificationMessage];
}

export default useNotification;
