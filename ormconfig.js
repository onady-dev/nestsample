module.exports = {
    type: 'mysql',
    entities: [process.env.ENTITY_PATH],
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_SCHEMA,
    synchronize: true,
  };