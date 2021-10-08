const express = require('express');

const messageController = require('./controllers/message.controller');
const validate = require('./middleware/validate.mw');
const app = express();

app.use(express.json());

//Получение всех сообщений
app.get('/messages', messageController.getMessages);

//Создание нового сообщения
app.post(
  '/messages',
  validate.validateMessage,
  messageController.createMessage
);

//Получение сообщения по id
app.get('/messages/:messageId', messageController.getMessageById);

//Удаление сообщения по id
app.delete('/messages/:messageId', messageController.deleteMessage);

//Обновление сообщения по id
app.patch(
  '/messages/:messageId',
  validate.validateUpdatedMessage,
  messageController.updateMessage
);

app.use((err, req, res, next) => {
  res.status(500).send(err);
});

module.exports = app;
