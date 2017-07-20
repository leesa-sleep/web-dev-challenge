/**
 * Created by katerinametaxopoulou on 17/07/2017.
 */

var keywords = [],
    favourites = [];

var apiCall = function(url) {
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'jsonp',
        jsonpCallback: "localJsonpCallback"
    })
        .done(function (theRecipes) {
            var searchResultsDiv = $('#searchResults'),
                favouritesDiv = "#favouritesResults";

            // clear the search result display on new search
            searchResultsDiv.empty();

            // if data is returned
            if (theRecipes.results.length !== 0) {
                // turn object into array of objects
                var makeArray = $.map(theRecipes, function (val) {
                    return val
                });

                // extract relevant information from array of objects
                var recipeData = $.map(makeArray, function (val) {
                    return {
                        title: val.title,
                        thumbnail: val.thumbnail,
                        recipeURL: val.href,
                        ingredients: val.ingredients
                    };
                });

                // remove the undefined value
                var cleanedData = recipeData.filter(removeUndefined);

                // display the recipes
                listRecipes(cleanedData, searchResultsDiv);

                // add favourite logic
                $('.add-favourite').click(function(){

                    var getContent = $(this).data("content");

                    // check if the recipe has already been added to favourites
                    var isDupe = favourites.find(function(favourite){return favourite === getContent});

                    // append data to favourites if it does not already exist
                    if (favourites.length > 0) {
                        if (isDupe === undefined){
                            favourites.push(getContent);

                            // increment favourite count in navigation
                            $('#noOfFaves').text(favourites.length);
                        }
                    }else {
                        favourites.push(getContent);
                        $('#noOfFaves').text(favourites.length);
                    }

                    // reset the favourites display
                    $(favouritesDiv).empty();

                    listFavourites(favourites, favouritesDiv);
                });

                // remove favourite logic
                $(favouritesDiv).on("click", '.remove-favourite', function(e){
                    e.stopImmediatePropagation(); // necessary to stop event bubbling up

                    var getContent = $(this).data("content");

                    $('#noOfFaves').text(favourites.length - 1);

                    //remove from favourites array
                    favourites.splice(getFavouriteIndex(favourites, getContent), 1);

                    $(favouritesDiv).empty();

                    if (favourites.length > 0){
                        listFavourites(favourites, favouritesDiv);
                    }else {
                        $(favouritesDiv).append('<div class="alert alert-danger" role="alert">There is nothing in your favourites yet</div>');
                    }

                });

            }else {
                searchResultsDiv.append('<div class="alert alert-warning" role="alert">Ingredient not found. Try searching for a different one!</div>');
            }

        })
        .fail(function (err) {
            console.log("error: ", err);
        });
};

// trigger a query on 'Enter'
$('#searchBar').keypress(function(e){
    if (e.keyCode === 13) {
        $('#searchBtn').trigger("click")
    }
});

// query the API
$('#searchBtn').on("click", function() {
    var getSearch = $('#searchBar').val(),
        keywords =  $.trim(getSearch.split(","));

    apiCall("http://www.recipepuppy.com/api/?i=" + keywords);
});

// clear the search bar
$('#clearBtn').click(function(){
    $('#searchBar').val("");
});

// navigation link logic
$('a[data-navigate]').click(function(e){
    e.preventDefault();

    var getLinkDiv = $(this).attr("href");

    $("li").removeClass("active");
    $('#searchPage, #favouritesPage').hide();

    $(getLinkDiv).show();

    $(this).closest("li").addClass("active");
});

function removeUndefined(items) {
    return (items.title && items.thumbnail && items.recipeURL && items.ingredients) !== undefined;
}

function listFavourites(favouritesList, appendToElement) {
    favouritesList.map(function(favourite) {
        $(appendToElement).append('<div class="col-sm-6 col-md-4">\
                        <div class="thumbnail leesa-thumbnails text-center">\
                        <img src="'+ favourite.thumbnail +'">\
                        <div class="caption">\
                        <a href="' + favourite.recipeURL + '" target="_blank"><h3>' + favourite.title + '</h3></a>\
                    <p><b>Number of ingredients:</b> ' + favourite.ingredientNumber + '</p>\
                    <p><button class="btn btn-primary remove-favourite" data-content="{&quot;title&quot; : &quot;'+favourite.title+'&quot;, &quot;thumbnail&quot; : &quot;'+favourite.thumbnail+'&quot;, &quot;recipeURL&quot; : &quot;'+favourite.recipeURL+'&quot;, &quot;ingredientNumber&quot; : &quot;'+favourite.ingredientNumber+'&quot;}" type="button">Remove from favourites</button></p>\
                    <p><b>Share:</b></p>\
                    <p><a href="https://www.facebook.com/sharer/sharer.php?u='+ favourite.recipeURL +'" target="_blank"><i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a> <a href="mailto:?subject=Recipe: '+favourite.title+'&body=Here is a great recipe that I found: '+ favourite.recipeURL +'"><i class="fa fa-envelope fa-2x" aria-hidden="true"></i></a></p>\
                    </div>\
                    </div>\
                    </div>');
    })
}

function listRecipes(allRecipes, appendToElement) {
    allRecipes.map(function(recipe) {

        var numberOfIngredients = recipe.ingredients.split(",");

        appendToElement.append('<div class="col-sm-6 col-md-4">\
                    <div class="thumbnail leesa-thumbnails text-center">\
                    <img src="' + recipe.thumbnail + '">\
                    <div class="caption">\
                    <a href="' + recipe.recipeURL + '" target="_blank"><h3>' + recipe.title + '</h3></a>\
                    <p><b>Number of ingredients:</b> ' + numberOfIngredients.length + '</p>\
                <p><a class="btn btn-default add-favourite" data-content="{&quot;title&quot; : &quot;'+recipe.title+'&quot;, &quot;thumbnail&quot; : &quot;'+recipe.thumbnail+'&quot;, &quot;recipeURL&quot; : &quot;'+recipe.recipeURL+'&quot;, &quot;ingredientNumber&quot; : &quot;'+numberOfIngredients.length+'&quot;}" role="button">Add to favourites</a></p>\
                </div>\
                </div>\
                </div>')

    });
}

function getFavouriteIndex(array, value){
    var index = 0;
    array.filter(function(el, i) {
        if (el["title"]  === value.title) {
            index = i;
        }
    });
    return index;
}
