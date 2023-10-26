const dbName = 'Communication';


db = db.getSiblingDB(dbName);


db.createCollection('Appusers');
db.createCollection('Test');
db.createCollection('ChatChannel');
db.createCollection('ChatMessage');



db.createUser({
    user: 'john',
    pwd: 'john',
    roles: [
        { role: 'readWrite', db: dbName }
    ]
});
