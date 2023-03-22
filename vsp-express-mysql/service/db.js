const mysql = require('mysql');
const {
    scryptSync,
} = require('node:crypto');

const pool  = mysql.createPool({
    connectionLimit : 10,
    host: 'localhost',
    user: 'vspuser', // change this
    password: 'abc123!@', //change this
    database: 'vaas_vps'
});

/**
 * Encode password using scrypt.
*/
function encodePassword(pswd) {
    return scryptSync(pswd, 'salt', 64).toString('hex');
}

function getColumnName(msg) {
    let beginIdx = 'Duplicate entry '.length;
    let endIndex = msg.indexOf(' for key');
    let sub = msg.substring(beginIdx, endIndex);
    return sub;
}
/**
 * Register new user.
 */
function registerUser(userInfo, response){
    let result = {};
    var insertQuery = "INSERT INTO `system_user` (`password`, `email`, `username`) VALUES (?,?, ?)";
    const pw = encodePassword(userInfo.password);
    try {
	pool.getConnection(function(err, connection) {
	
	if (err) throw err; // not connected!
 
	// Use the connection
	connection.query(
	    insertQuery,
	    [pw, userInfo.email, userInfo.username],
	    function (error, results, fields) {
		//console.log(error);

		if(error && error.code === 'ER_DUP_ENTRY') {
		    let errColName = getColumnName(error.sqlMessage);
		    result.error = errColName + ' value must be unique.';
		    response.json(result);		    
		} else {
		    if(results.affectedRows === 1) {
			result.insertId = results.insertId;
		    }
		    response.json(result);
		}

		// Release the connection.
		connection.release();
		
		// Handle error after the release.
		if (error) {
		    console.log("Error while registing user " + error);
		}
		
	    });
	});
    } catch(error) {
	console.log(error);
    }
}

module.exports.registerUser = registerUser;
 
