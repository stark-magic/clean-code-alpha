async function getDbConnection() {
    const DB_USERNAME = process.env.DB_USERNAME
    const DB_PASSWORD = process.env.DB_PASSWORD

    const db = await mongo.connect( `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.example.mongodb.net/?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true } )
    return db;
}

module.exports = {
    getDbConnection: getDbConnection
}