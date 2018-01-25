$(document)
    .ready(function () {
        var url = 'http://www.recipepuppy.com/api/'
        
        
        

        $('body').on('click', '.add-favorite', function () {
            var item = $(this).data('recipe');
            if (favExist(item)) {
                removeFromStorage(item);
            } else {
                setInStorage(item);
            }
            routePage();
        });
        //call for first time
        

        function getRecipes(url) {
            var jqxhr = $
                .ajax({url: url, type: 'GET', dataType: 'jsonp', jsonpCallback: "localJsonpCallback"})
                .done(function (data) {
                    receipes = data.results;
                    addRecipesToDom(receipes);

                })
                .fail(function () {
                    alert("error");
                })
                .always(function () {});
        }
        function routePage() {
            if (pageName === 'favorites') {
                var favoriteObjects = getFromStorage();
                addRecipesToDom(favoriteObjects);

            } else {
                addRecipesToDom(receipes);
            }
        }
        function addRecipesToDom(data) {
            $('.recipes-cards').empty();
            data.map(function (recipe) {
                var a = '<div class="col-lg-4 col-sm-6 portfolio-item">' + 
                '<div class="card h-100">' +
                  '<a href="' + recipe.href + '" target="_blank"><img class="card-img-top" src="' + recipe.thumbnail + '" alt=""></a>' +
                  '<div class="card-body">' + 
                    '<h4 class="card-title">' +
                      '<a href="' + recipe.href + '" target="_blank">' + recipe.title + '</a>' +
                    '</h4>' +
                    '<p class="card-text">' ;
                    recipe
                    .ingredients
                    .split(',')
                    .map(function (ingredient) {
                        a += '<span class="badge badge-secondary">' + ingredient + '</span>'
                    });
                    a += '</p> </div>';
                    a += '<a class="btn btn-default add-favorite" data-recipe="{&quot;title&quot; : &quot;'+recipe.title+'&quot;, &quot;thumbnail&quot; : &quot;'+recipe.thumbnail+'&quot;, &quot;href&quot; : &quot;'+recipe.href+'&quot;, &quot;ingredients&quot; : &quot;'+recipe.ingredients+'&quot;}" role="button"> ' ;
                    if(favExist(recipe)) {
                        a +=  '<i class="material-icons">favorite</i>';
                    } else {
                        a += '<i class="material-icons">favorite_border</i>';
                    };
                    a += '</a></div></div>';
                $('.recipes-cards').append(a);
                 
            })
        }
        $('#searchbar').keypress(function (e) {
            if (e.keyCode === 13) {
                $('#search').trigger("click")
            }
        });
        $('#search').click(function (event) {
            getRecipes(url + "?i=" + $('#searchbar').val());
        });
        $('#clear').click(function () {
            $('#searchbar').val('');
        })
        $('#favorites').click(function () {
            pageName = 'favorites';
            $('.nav-item a').removeClass('active');
            $(this).addClass('active');
            routePage();
        });

        $('#home').click(function () {
            pageName = 'home';
            $('.nav-item a').removeClass('active');
            $(this).addClass('active');
            routePage();
        });
        var receipes;
        var pageName = 'home';
        getRecipes(url);
    });

function setInStorage(item) {
    if (favExist(item)) {
        return;
    }
    var favoriteObjects = getFromStorage();
    favoriteObjects.push(item);
    localStorage.setItem('recipestore', JSON.stringify(favoriteObjects));

}
function removeFromStorage(item) {
    console.log(item);
    if (!favExist(item)) {

        return;
    }
    var favoriteObjects = getFromStorage();
    var index = favoriteObjects.map(function (e) {
        return e.title;
    }).indexOf(item.title);

    console.log(index);
    if (index > -1) {
        console.log(true);
        favoriteObjects.splice(index, 1);
    }
    // Put the object into storage
    localStorage.setItem('recipestore', JSON.stringify(favoriteObjects));

}
function favExist(item) {
    var favoriteObjects = getFromStorage();
    var isExist = favoriteObjects.filter(function (val) {
        return val.title === item.title
    })
    if (isExist.length > 0) {
        return true;
    }
    return false
}
function getFromStorage() {
    var retrievedObject = localStorage.getItem('recipestore');
    if (!retrievedObject) {
        localStorage.setItem('recipestore', JSON.stringify([]));
        retrievedObject = JSON.stringify([]);
    }
    return JSON.parse(retrievedObject);
}
