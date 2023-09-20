const ronin 		= require( 'ronin-server' )
const mocks 		= require( 'ronin-mocks' )
const UrlHelper		= require( './util/urlHelper' )
const dbHelper		= require( './util/dbHelper' )
const mongo 		= require( 'mongodb' ).MongoClient

async function main() {
	try {
		//
		// This is were we setup the server
		//
		const server = ronin.server({ port: process.env.PORT || 8080 })

		await dbHelper.getDbConnection()

		server.use( '/services/', mocks.server( server.Router(), false, true ) )

		const result = await server.start()
		console.info( "Server starting: "+ result )

	} catch( error ) {
		console.error( error )
	}
}

main()
