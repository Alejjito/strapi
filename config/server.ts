export default ({ env }) => ({
  host: env("HOST", "192.168.0.10"),
  port: env.int("PORT", 1337),
  cron: true,
  app: {
    keys: env.array("APP_KEYS"),
  },
});
