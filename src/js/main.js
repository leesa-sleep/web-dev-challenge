/*
* Author: Swethasree
* Date: 01/07/2018
* Start Time: 12:30PM
*/
$(document)
    .ready(function () {
        var receipes;
        var pageName = 'home';
        $('#search-input')
            .keypress(function (e) {
                if (e.keyCode === 13) {
                    $('#search-btn').trigger("click")
                }
            });
        $('#search-btn').click(function (event) {
            getRecipes("http://www.recipepuppy.com/api/?i=" + $('#search-input').val());
        });
        $('#clear-btn').click(function () {
            $('#search-input').val('');
            getRecipes('http://www.recipepuppy.com/api/');
        })
        $('.favorites-page').click(function () {
            pageName = 'favorites';
            $('.nav-item a').removeClass('active');
            $(this).addClass('active');
            ChangePage();
        });
        
        $('.home-page').click(function () {
            pageName = 'home';
            $('.nav-item a').removeClass('active');
            $(this).addClass('active');
            ChangePage();
        });
        
        $('body').on('click', '.add-favorite', function () {
            var item = $(this).data('recipe');
            if(favExist(item)) {
                removeFromStorage(item);            
            } else {
                setInStorage(item);
            }
            ChangePage();
        });
        //call for first time
        getRecipes('http://www.recipepuppy.com/api/');
        
        function getRecipes(url) {
            var jqxhr = $
                .ajax({url: url, type: 'GET', dataType: 'jsonp', jsonpCallback: "localJsonpCallback"})
                .done(function (data) {
                    receipes = data.results;
                    addRecipesToDom(receipes);
                    if (data.results.length === 0) {
                        alert('No result found');
                    }
                })
                .fail(function () {
                    alert("error");
                })
                .always(function () {});
        }
        function ChangePage() {
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
                var appendReceipe = '<div class="card rounded" ><img class="card-img-top thumbnail" src="' + recipe.thumbnail + '" alt="Card image cap">'+
                '<div class="card-image-overlay bg-transparent-dark">  ' +
                    '<a href="' + recipe.href + '" target="_blank" ><h5 class="card-title title-text-color ">' + recipe.title + '</h5></a>'+
                    '<a class="btn btn-default add-favorite" data-recipe="{&quot;title&quot; : &quot;'+recipe.title+'&quot;, &quot;thumbnail&quot; : &quot;'+recipe.thumbnail+'&quot;, &quot;href&quot; : &quot;'+recipe.href+'&quot;, &quot;ingredients&quot; : &quot;'+recipe.ingredients+'&quot;}" role="button"> ' ;
                    if(favExist(recipe)) {
                        appendReceipe +=  '<i class="material-icons">favorite</i>';
                    } else {
                        appendReceipe += '<i class="material-icons">favorite_border</i>';
                    }
                    appendReceipe += '</a> </div><div class="card-footer text-muted">';

                recipe
                    .ingredients
                    .split(',')
                    .map(function (ingredient) {
                        appendReceipe += '<span class="badge badge-secondary">' + ingredient + '</span>'
                    });
                appendReceipe += '</div> </div>'
                $('.recipes-cards').append(appendReceipe);
            })
        }

        function setInStorage(item) {
            if(favExist(item)){
                return;
            }
            var favoriteObjects = getFromStorage();
            favoriteObjects.push(item);
            // Put the object into storage
            localStorage.setItem('leesa', JSON.stringify(favoriteObjects));

        }
        function removeFromStorage(item) {
            console.log(item);
            if(!favExist(item)){
            
                return;
            }
            var favoriteObjects = getFromStorage();
            var index = favoriteObjects.map(function(e) { return e.title; }).indexOf(item.title);
            
            console.log(index);
            if (index > -1) {
            console.log(true);
            favoriteObjects.splice(index, 1);
            }
            // Put the object into storage
            localStorage.setItem('leesa', JSON.stringify(favoriteObjects));

        }
        function favExist(item) {
            var favoriteObjects = getFromStorage();
            var isExist = favoriteObjects.filter(function (val) {
                return val.title === item.title
            })
            if ( isExist.length > 0) {
                return true;
            }
            return false
        }
        function getFromStorage() {
            // Retrieve the object from storage
            var retrievedObject = localStorage.getItem('leesa');
            if (!retrievedObject) {
                localStorage.setItem('leesa', JSON.stringify([]));
                retrievedObject = JSON.stringify([]);
            }
            return JSON.parse(retrievedObject);
        }
    });