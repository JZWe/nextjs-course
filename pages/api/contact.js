import {
  insertDataToCollection,
  createConnection,
  loadDatabase,
} from '../../lib/api-util';
import {
  checkEmail,
  checkName,
  checkMessage,
} from '../../lib/input-valid-func';

async function handler(req, res) {
  if (req.method === 'POST') {
    let client;

    const { email, name, message } = req.body;

    const isEmailInvalid = !checkEmail(email);
    const isNameInvalid = !checkName(name);
    const isMessageInvalid = !checkMessage(message);

    if (isEmailInvalid || isNameInvalid || isMessageInvalid) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    // Store it in a database
    const newMessage = {
      email,
      name,
      message,
    };

    try {
      client = await createConnection();
    } catch (error) {
      res.status(500).json({ message: `Could not connect to database` });
    }

    const db = loadDatabase(client, process.env.mongodb_database);

    try {
      const result = await insertDataToCollection(db, 'messages', newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Storing message failed!' });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: 'Successfully stored message!', message: newMessage });
  }
}

export default handler;
