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

module.exports.validateUpdatedMessage = async (req, res, next) => {
  const yup = require('yup');
  const { body } = req;

  const MESSAGE_UPDATE_VALIDATION_SCHEMA = yup.object().shape({
    textOfMessage: yup
      .string()
      .min(1)
      .max(500),
    emailOfAutor: yup.string().email(),
  });

  try {
    const validateUpdatedMessage = await MESSAGE_UPDATE_VALIDATION_SCHEMA.validate(
      body
    );
    req.body = validateUpdatedMessage;
    next();
  } catch (e) {
    next(e);
  }
};
