const { v4: uuidv4 } = require('uuid');
const messagesForumDB = [
  {
    id: uuidv4(),
    textOfMessage: 'aggjfsdjgvj sgfds sdfgds',
    emailOfAutor: 'test1@test.test',
  },
  {
    id: uuidv4(),
    textOfMessage: 'mkm berrhe nbhtt gtr gvctrrt',
    emailOfAutor: 'test2@test.test',
  },
  {
    id: uuidv4(),
    textOfMessage: 'nkjhi bkh trdr vg vyjv vyyuyt',
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
};
