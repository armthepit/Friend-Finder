// ===============================================================================
// DATA
// Below data will hold all friends.
// Initially its just set it to one friend.
// ===============================================================================

var friendsArray = [
	{
	  "name":"Leonardo DiCaprio",
	  "photo":"http://images.forbes.com/media/2010/12/16/1216_leonardo-dicaprio-high-earning_485x340.jpg",
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
	},
	{
	  "name":"Kristin Stewart",
	  "photo":"http://images.forbes.com/media/2010/12/16/1216_kristin-stewart-high-earning_485x340.jpg",
	  "sex":"female",
	  "scores":[
	     1,
	     2,
	     5,
	     5,
	     1,
	     2,
	     3,
	     1,
	     5,
	     2
	   ]
	},
	{
	  "name":"Mia Wasikowska",
	  "photo":"http://images.forbes.com/media/2010/12/16/1216_mia-wasikowska-high-earning_485x340.jpg",
	  "sex":"female",
	  "scores":[
	     4,
	     5,
	     3,
	     3,
	     4,
	     5,
	     1,
	     4,
	     3,
	     5
	   ]
	},
	{
	  "name":"Johnny Depp",
	  "photo":"http://images.forbes.com/media/2010/12/16/1216_johnny-depp-high-earning_485x340.jpg",
	  "sex":"male",
	  "scores":[
	     2,
	     3,
	     1,
	     1,
	     2,
	     3,
	     4,
	     2,
	     1,
	     3
	   ]
	}
];

// Set up table to be accessible to other files using require.
module.exports = friendsArray;