var req = require('request');
var xml2js = require('xml2js');
var extend = require('extend');

function Goodreads(dev, sec) {
	this.keys = {
		'developer' : dev,
		'secret' : sec
	}
};

Goodreads.prototype.isbnToId = function(isbn, etc) {
	options = {
		url : 'https://www.goodreads.com/book/isbn_to_id',
		form : {
			'key' : this.keys.developer,
			'isbn' : isbn
		}
	}
	mergeObj(options.form, etc);
	req.get(options, function(err, response, body) {
		console.log(body);
		return body;
	});
};

Goodreads.prototype.getReviewsById = function(id, etc) { //Returns JSON by default
	options = {
		url : 'https://www.goodreads.com/book/show?format=FORMAT',
		form : {
			key : this.keys.developer,
			id : id
		}
	}
	mergeObj(options.form, etc);
	req.get(options, function(err, response, body) {
		console.log(response);
	});
}

function mergeObj(obj1, obj2) {
	objfinal = {};
	for (key in obj1) {
		objfinal[key] = obj1[key];
	}
	for (key in obj2) {
		objfinal[key] = obj2[key];
	}
	return objfinal;
}


var gr = new Goodreads('', '');

gr.isbnToId('9788478888566');
gr.getReviewsById('167037', {rating: 5, text_only: false, format: 'json'});






	  	
