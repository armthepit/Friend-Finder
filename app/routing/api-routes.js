// ===============================================================================
// DEPENDENCIES
// ===============================================================================
var bodyParser = require('body-parser');
var path = require('path');

// ===============================================================================
// LOAD DATA
// Below is the link to friends table.
// ===============================================================================

var friendsTable = require('../data/friends.js');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
	// API GET Requests
	// Below code handles when users "visit" a page.
	// In each of the below cases when a user visits a link
	// ---------------------------------------------------------------------------

	app.get('/api/friends', function (request, result) {
		result.json(friendsTable);
	});

	app.post("/api/friends", function (request, result) {
		newFriend = request.body;
		console.log(newFriend);
		friendsTable.push(newFriend);
		console.log(friendsTable);
	});


};
