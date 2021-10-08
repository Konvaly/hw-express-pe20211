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
    const validateUpdatedMessage = await MESSAGE_UPDATE_VALIDATION_SCHEMA.validateUpd(
      body
    );
    req.body = validateUpdatedMessage;
    next();
  } catch (e) {
    next(e);
  }
};
