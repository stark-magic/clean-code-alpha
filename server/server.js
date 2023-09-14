const ronin 		= require( 'ronin-server' )
const mocks 		= require( 'ronin-mocks' )

async function main() {

	try {

    const server = ronin.server({
			port: process.env.PORT || 8080
		})

	  server.use( '/services/', mocks.server( server.Router(), false, true ) )
	  server.use( '/services/v2/people', function( req, res ) {
		let sql = "SELECT * FROM "+ req.params.sql;
	  })

    const result = await server.start()
    console.info( result )

	} catch( error ) {
				console.error( error )
	}

}

main()
