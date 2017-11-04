var favorites = [];
var recipes = [];

/*$('form').submit(function () {
	
	$('#results').empty();
	
	$.getJSON( "http://www.recipepuppy.com/api/", $('form').serialize(), function( data ) {
	  $.each( data, function( key, val ) {
	  
		  $.each( data.results, function( n, k ) {
			$('#results').append( '<div class="recipe"><div class="title">' + k.title + '</div><a href="' + k.href + '"><img src="' + k.href + '"></a><div class="ingredients">' + k.ingredients + '</div><a id="save" href="#">Favorite</a></div>' );
		  });
	  }); 
	$('#save').click(function() {
		favorites.push( $(this).parent().html() );
		console.log('works');
		console.log($(this).parent().html());
		alert(favorites[0]);
	});
	
	});
	
	return false;
})*/

function getRecipes() {
	$('#results').empty();
	
	$.getJSON( "http://www.recipepuppy.com/api/", $('form').serialize(), function( data ) {
		
	  $.each( data.results, function( n, v ) {
		recipes.push({n: v});
		console.log('works');
	  });
	  
	  /*$.each( recipes, function( key, value) {
		 console.log(recipes[key].n.href);
		 $('#results').append( '<div class="recipe"><div class="title">' + recipes[key].n.title + '</div><a href="' + recipes[key].n.href + '"><img src="' + recipes[key].n.href + '"></a><div class="ingredients">' + recipes[key].n.ingredients + '</div><a class="save" href="#">Favorite</a></div>' );
	  
	  });
	
		$('.save').click(function() {
			favorites.push( $(this).parent().html() );
			console.log('works');
			console.log($(this).parent().html());
			alert(favorites[0]);
		});*/
	
	
	});
	
	return false;
	
}

function loadFavorites() {
	$.each (favorites, function(l) {
		console.log('works');
		$('#favorites').append(l);
	});
}