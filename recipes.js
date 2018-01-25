$(document).ready(function() {
	getApiResults('burger');
});

var records;
var favorites;
function getApiResults(term) {
	init();
	$.ajax({
		type : 'GET',
		url : 'http://www.recipepuppy.com/api/?q=' + term,
		jsonpCallback : 'JSONCALLBACK',
		contentType : 'application/json',
		dataType : 'jsonp',
		success : function(response) {
			records = response.results;
			
			$('#output tbody').empty();
			
			for (var i = 0; i < records.length; i++) {
				var row = "<tr>";

				row += "<td><img src='" + records[i].thumbnail + "' title='"+ records[i].title + "' /></td>";
				row += "<td>"+ records[i].title + "</td>";
				row += "<td>" + records[i].ingredients + "</td>";
				row += "<td><button id='add"+i+"' class='btn btn-primary' onclick='addToFav("+i+")'>Add</button></td>";
				row += "</tr>";

				$('#output tbody').append(row);
			}
		}
	});
}

function init() {
	records = [];
	favorites = [];
	$('#message').text('');
	$('#message-fav').text('');
}

function search() {
	var term = $("#srch-term").val();
	getApiResults(term);
}

function addToFav(index) {
	if(favorites[index] != undefined) {
		console.log("already added");
		$('#message').text('Already added to favourites!');
		return;
	}
	favorites[index]=records[index];
	$('#message').text('Added to favourites!');
}

function removeFrmFav(index) {
	console.log("from remove method");
	if(favorites[index] == undefined) {
		return;
	}
	console.log("Removing element at index = " + index);
	delete favorites[index];
	$('#message-fav').text('Removed from favourites!');
	showFav();
}

function showFav() {
	console.log("inside show fav method");
	$('#message').text('');
	$('#fav tbody').empty();
	
	for (var i = 0; i < favorites.length; i++) {
		if(favorites[i] == undefined) {
			continue;
		}
		var row = "<tr>";

		row += "<td><img src='" + favorites[i].thumbnail + "' title='"+ favorites[i].title + "' /></td>";
		row += "<td>"+ favorites[i].title + "</td>";
		row += "<td>" + favorites[i].ingredients + "</td>";
		row += "<td><button id='remove"+i+"' class='btn btn-danger' onclick='removeFrmFav("+i+")'>Remove</button></td>";
		row += "</tr>";

		$('#fav tbody').append(row);
	}
}