import createHttpError from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  const isHttpError = createHttpError.isHttpError(err);

  const status = isHttpError ? err.status : 500;
  const message = isHttpError ? err.message : 'Internal Server Error';

  res.status(status).json({ message });
};

