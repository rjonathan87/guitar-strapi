module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cf8qaj82i3mmd0louh10-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_52k0'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'vayL7qqfC6VI5E9usDTzMoS7aEK1wGdi'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
