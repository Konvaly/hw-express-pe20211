const { v4: uuidv4 } = require('uuid');
const messagesForumDB = [
  {
    id: uuidv4(),
    textOfMessage: 'Hi, there',
    emailOfAutor: 'test1@test.test',
  },
  {
    id: uuidv4(),
    textOfMessage: 'Only now uou can change...',
    emailOfAutor: 'test2@test.test',
  },
  {
    id: uuidv4(),
    textOfMessage: 'It is a good opportunity',
    emailOfAutor: 'test3@test.test',
  },
];

module.exports.getMessages = (req, res) => {
  res.status(200).send(messagesForumDB);
};

module.exports.createMessage = (req, res) => {
  const { body } = req;
  const newMessage = { id: uuidv4(), ...body };
  messagesForumDB.push(newMessage);
  res.status(201).send(newMessage);
};

module.exports.getMessageById = (req, res) => {
  const {
    params: { messageId },
  } = req;
  const [foundMessage] = messagesForumDB.filter(mes => mes.id == messageId);
  if (foundMessage) {
    res.status(200).send(foundMessage);
  } else {
    res.status(404).send('Message not found');
  }
};

module.exports.deleteMessage = (req, res) => {
  const {
    params: { messageId },
  } = req;
  const indexOfMessage = messagesForumDB.findIndex(
    message => messageId === message.id
  );

  if (indexOfMessage === -1) {
    res.status(404).send('Not found');
  } else {
    const [deletedMessage] = messagesForumDB.splice(indexOfMessage, 1);
    res.status(200).send(deletedMessage);
  }
};

module.exports.updateMessage = (req, res) => {
  const {
    body,
    params: { messageId },
  } = req;
  const indexOfMessage = messagesForumDB.findIndex(
    message => messageId === message.id
  );
  console.log(messagesForumDB[indexOfMessage]);

  if (indexOfMessage !== -1) {
    const updatedMessage = { ...messagesForumDB[indexOfMessage], ...body };
    console.log(`updatedMessage`, updatedMessage);
    // updateMessage.splice(
    // messagesForumDB[indexOfMessage],
    // 1,
    // updatedMessage
    // );

    res.status(200).send(updatedMessage);
  } else {
    res.status(404).send('Message not found');
  }
};
