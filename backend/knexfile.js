// Update with your config settings.

module.exports = {
//desenvolvimento para  programador
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite4'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },
//producao para o time de desenvolviemnet.  testar online
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
//jogado online
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
