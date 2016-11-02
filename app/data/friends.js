// ===============================================================================
// DATA
// Below data will hold all friends.
// Initially its just set it to one friend.
// ===============================================================================

var friendsArray = [
	{
	  "name":"Ahmed",
	  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
	  "sex":"male",
	  "scores":[
	     5,
	     1,
	     4,
	     4,
	     5,
	     1,
	     2,
	     5,
	     4,
	     1
	   ]
	}
];

// Set up table to be accessible to other files using require.
module.exports = friendsArray;