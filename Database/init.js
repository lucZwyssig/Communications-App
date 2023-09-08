db = db.getSiblingDB('Communications-app');
db.createCollection('users');
db.createUser({
    user: `${process.env.DB_USERNAME}`,
    pwd: `${process.env.DB_PASSWORD}`,
    roles: [
      { role: 'readWrite', db: 'Communications-app' }
    ]
  });

  