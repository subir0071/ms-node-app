var request = require('request');
request('http://www.facebook.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body); // Print the google web page.
  }
  else{
	  throw error;
  }
});
