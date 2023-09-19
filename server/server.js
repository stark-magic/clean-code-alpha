const ronin 		= require( 'ronin-server' )
const mocks 		= require( 'ronin-mocks' )
const UrlHelper		= require( './util/urlHelper' )
const mongo 		= require( 'mongodb' ).MongoClient

async function main() {
	applicationName = "Clean Code Application";
	try {
	//
	// This is were we setup the server
	//
    const server = ronin.server({
			port: process.env.PORT || 8080
		})

		// This should change
		// const db = await mongo.connect( "mongodb+srv://myDatabaseUser:D1fficultP%41ssw0rd@cluster0.example.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true } )
		const db = await mongo.connect( "mongodb+srv://myDatabaseUser:D1fficultP%40ssw0rd@cluster0.example.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true } )

	  server.use( '/services/', mocks.server( server.Router(), false, true ) )
	  server.use( '/services/v2/people', function( req, res ) {
		let sql = "SELECT * FROM "+ req.params.sql;

		const urlHelper = UrlHelper();
		console.info( 'urlHelper: '+ urlHelper.url )
	  })

    const result = await server.start()
    console.info( result )

	} catch( error ) {
				console.error( error )
	}

}

main()
