module.exports.validateMessage = async (req, res, next) => {
  const yup = require('yup');
  const { body } = req;

  const MESSAGE_VALIDATION_SCHEMA = yup.object().shape({
    textOfMessage: yup
      .string()
      .min(1)
      .max(500)
      .required(),
    emailOfAutor: yup
      .string()
      .email()
      .required(),
  });

  try {
    const validatedMessage = await MESSAGE_VALIDATION_SCHEMA.validate(body);
    req.body = validatedMessage;
    next();
  } catch (e) {
    next(e);
  }
};
