async function getDbConnection() {
    const db = await mongo.connect( "mongodb+srv://myDatabaseUser:D1fficultP%41ssw0rd@cluster0.example.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true } )
    return db;
}