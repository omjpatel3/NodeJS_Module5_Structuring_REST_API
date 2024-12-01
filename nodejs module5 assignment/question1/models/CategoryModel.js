const {MongoClient} = require('mongodb')

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'node3db';

async function main(){
    await client.connect();
    console.log('Connected to db');

    return client.db(dbName);
}

const db = main()

module.exports = {db};