var req = require('request');
var xml2js = require('xml2js');

function Goodreads(dev, sec) {
	this.keys = {
		'developer' : dev,
		'secret' : sec
	}
};

Goodreads.prototype.isbnToId = function(isbn) {
	options = {
		url : 'https://www.goodreads.com/book/isbn_to_id',
		form : {
			'isbn' : isbn,
			'key' : this.keys.developer
		}
	}
	req.get(options, function(err, response, body) {
		console.log(body);
		return body;
	});
};

Goodreads.prototype.getReviewsById = function(id, rating) { //Returns JSON by default
	options = {
		url : 'https://www.goodreads.com/book/show?format=json',
		form : {
			'key' : this.keys.developer,
			'id' : id,
		}
	}
	req.get(options, function(err, response, body) {
		console.log(body);
	});
}

var gr = new Goodreads('aKhHwxhzgl97agrN7QPymQ', 'LpOpmlzw6ZukPIOqex0jhTVTkA7twNjqNdbBAzeEk');

gr.isbnToId('9788478888566');
gr.getReviewsById('167037');






	  	
