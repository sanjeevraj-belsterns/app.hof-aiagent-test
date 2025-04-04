const CONFIG = {
  SENTRY: {
    dsn: process.env.SENTRY_DSN
  },
  AUTH: {
    SECRET: process.env.AUTH_SECRET,
    URL: process.env.AUTH_URL
  }
};

export default CONFIG;
