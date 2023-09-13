db = db.getSiblingDB('Communication');
db.createCollection('Appusers');
db.createUser({
    user: 'john',
    pwd: 'john',
    roles: [
      { role: 'readWrite', db: 'Communication' }
    ]
});
