const mysql = require('mysql');
const {
    scryptSync,
} = require('node:crypto');

const pool  = mysql.createPool({
    connectionLimit : 10,
    host: 'localhost',
    user: 'vspuser', // change this
    password: 'abc123!@', //change this
    database: 'vaas_vps',
    //debug: ['ComQueryPacket', 'RowDataPacket'] // Uncomment this line to view SQL queries
});

/**
 * Encode password using scrypt.
*/
function encodePassword(pswd) {
    return scryptSync(pswd, 'salt', 64).toString('hex');
}

function getColumnName(msg) {

    if(msg.indexOf('Duplicate entry ') !== -1) {
	let beginIdx = 'Duplicate entry '.length;
	let endIndex = msg.indexOf(' for key');
	let sub = msg.substring(beginIdx, endIndex);
	return sub;
    } else if(msg.indexOf('Unknown column') != -1) {
	let beginIdx = 'Unknown column '.length;
	let endIndex = msg.indexOf(" in 'field list'");
	let sub = msg.substring(beginIdx, endIndex);
	return sub;
    } else if(msg.indexOf("doesn't have a default value") != -1) {
	let beginIdx = 'Field '.length;
	let endIndex = msg.indexOf(" doesn't have a default value");
	let sub = msg.substring(beginIdx, endIndex);
	return sub;
    }
}

function handleError(err) {
    let errorMessage = '';
    if(error.code === 'ER_DUP_ENTRY') {
	let errColName = getColumnName(error.sqlMessage);
	errorMessage = errColName + ' value must be unique.';
    } else if(error.code === 'ER_BAD_FIELD_ERROR'){
	let errColName = getColumnName(error.sqlMessage);
	errorMessage = errColName + ' invalid property.';
    }  else if(error.code === 'ER_NO_DEFAULT_FOR_FIELD') {
	let errColName = getColumnName(error.sqlMessage);
	errorMessage = errColName + ' invalid property.';
    }
    return errorMessage;
}
/**
 * Register new user.
 */
function isAuthorized(userInfo, response){
    let result = {};
    const pw = encodePassword(userInfo.password);
    var userQuery = "SELECT `email`, `password` FROM `system_user` WHERE `email` = ?";
    try {
	pool.getConnection(function(err, connection) {
	
	if (err) throw err; // not connected!
 
	// Use the connection
	connection.query(
	    userQuery,
	    [userInfo.email],
	    function (error, results, fields) {
		if(error){
		    result.error = handleError(error);
		    response.json(result);
		    
		} else {
		    result.authorized = (results[0].email === userInfo.email &&
					 results[0].password === pw);
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

		if(error){
		    result.error = handleError(error);
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

/**
 * Register new user.
 */
function getUserInfo(userId, response){
    let result = {};
    var insertQuery = 'SELECT id, first_name, middle_name, last_name, prefix, suffix, gender,' +
	' primary_contact, secondary_contact, user_id' +
	' FROM userinfo WHERE user_id = ?;'

    try {
	pool.getConnection(function(err, connection) {
	
	if (err) throw err; // not connected!
 
	// Use the connection
	connection.query(
	    insertQuery,
	    [userId],
	    function (error, results, fields) {

		if(error) {
		    result.error = handleError(error);
		    response.json(result);

		} else {
		    // Success.
		    console.log(result);
		    response.json(results[0]);
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


/**
 * Register new user.
 */
function saveUserInfo(userInfo, response){
    let result = {};
    var insertQuery = 'INSERT INTO `userinfo` SET ?';
    userInfo.tenant_id = 1;
    userInfo.user_id = 1;
    try {
	pool.getConnection(function(err, connection) {
	
	if (err) throw err; // not connected!
 
	// Use the connection
	connection.query(
	    insertQuery,
	    userInfo,
	    function (error, results, fields) {

		if(error) {
		    result.error = handleError(error);
		    response.json(result);
		} else {
		    // Success.
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

function updateUserInfo(userInfo, response){
    let result = {};
    var updateQuery = 'UPDATE `userinfo` SET ? WHERE ID = ?';
    userInfo.tenant_id = 1;
    userInfo.user_id = 1;
    try {
	pool.getConnection(function(err, connection) {
	
	if (err) throw err; // not connected!
 
	// Use the connection
	connection.query(
	    updateQuery,
	    [userInfo, userInfo.id],
	    function (error, results, fields) {

		if(error) {
		    result.error = handleError(error);
		    response.json(result);
		} else {
		    // Success.
		    if(results.affectedRows === 1) {
			result.insertId = results.insertId;
		    }
		    //response.json(result);
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


module.exports = {registerUser, saveUserInfo, isAuthorized, getUserInfo, updateUserInfo };
