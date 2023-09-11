db = db.getSiblingDB('Communication');
db.createCollection('Appusers');
db.createUser({
    user: '${MONGO_USERNAME}',
    pwd: '${MONGO_PASSWORD}',
    roles: [
      { role: 'readWrite', db: 'Saves' }
    ]
});
