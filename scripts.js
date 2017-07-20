$(document).ready(function () {

    var objectA = {}
    var fav = []
    var fav = JSON.parse(localStorage.faves);

    // ADD ITEM TO FAVOURITES
    $(document).delegate(".add", "click", function () {
        var num = this.id;
        fav.push(objectA[num])
        localStorage.setItem("faves", JSON.stringify(fav));
    });

    // REMOVES ITEM FROM FAVOURITES
    $(document).delegate(".remove", "click", function () {
        var f = this.id;
        fav.splice(f, 1);
        localStorage.setItem("faves", JSON.stringify(fav));
        location.reload();
    });

    // GET RECIPE FUNCTION
    var getRecipe = function () {

        var recipe = $('#term').val();
        $('#status').text("");

        //IF USER PRESSES GO WITHOUT ENTERING A SEARCH TERM
        if (recipe == '') {
            $('#status').text("Please enter a search term. Help us help you!")
        }

        else {

            //CREATES PROXY URL TO DEAL WITH CORS
            var finalUrl = 'https://cors-anywhere.herokuapp.com/' + 'http://www.recipepuppy.com/api/?q=' + recipe;

            //API CALL
            $.getJSON(finalUrl, function (json) {
                objectA = json.results;

                //IN CASE NOTHING COMES BACK
                if ($.isEmptyObject(json.results)) {
                    $('#status').text("We couldn't find any recipes for " + recipe + " try something else!")
                }

                //SOMETHING COMES BACK
                else {
                    $('#status').text("Here are your recipes for " + recipe + "!")
                    var html = ""
                    for (var i in json.results) {
                        var ing = json.results[i].ingredients.split(",");
                        var title = json.results[i].title;
                        var ingredients = ing.length;
                        var thumbnail = json.results[i].thumbnail;
                        var link = json.results[i].href;

                        if (json.results[i].thumbnail === '') {
                            thumbnail = 'img/food.jpg';
                        }

                        html += '<div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 recipe">';
                        html += '<div class="thumbCont"><img class="thumb" src="' + thumbnail + '"><button class="btn btn-default add" type="button" id="' + [i] + '">+</button></div>';
                        html += '<h4><a class="title" href="' + link + '" target="_blank">' + title + '</a></h4>';
                        html += '<p> Number of ingredients: ' + ingredients + '</p>';
                        html += '</div>';
                    }
                    //POPULATE RESULT SECTION  
                    $('#result').html(html);
                    return objectA;
                }

            });
        }

    }//CLOSES GET RECIPE;

    //FAVES POPULATION FUNCTION
    var listFaves = function () {
        var myArray = JSON.parse(localStorage.getItem('faves'));

        var displayFaves = function () {
            //IN CASE NOTHING COMES BACK
            if (myArray.length === 0) {
                $('#favStatus').text("Looks like there's nothing here, try searching for some delicious recipes and adding them here!")
            }

            else {
                $('#favStatus').text("Here are your favourites! You can share with your friends or remove from the list")
                var html = ""
                for (var i in myArray) {
                    var ing = myArray[i].ingredients.split(",");
                    var title = myArray[i].title;
                    var ingredients = ing.length;
                    var thumbnail = myArray[i].thumbnail;
                    var link = myArray[i].href;

                    if (myArray[i].thumbnail === '') {
                        thumbnail = 'img/food.jpg';
                    }

                    html += '<div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 recipe">';
                    html += '<div class="thumbCont"><img class="thumb" src="' + thumbnail + '"><button class="btn btn-default remove" type="button" id="' + [i] + '">-</button></div>';
                    html += '<h4><a class="title" href="' + link + '" target="_blank">' + title + '</a></h4>';
                    html += '<p> Number of ingredients: ' + ingredients + '</p>';
                    html += '<div id="share-buttons"><a href="http://www.facebook.com/sharer.php?u=' + link + '" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" /></a><a href="https://twitter.com/share?url=' + link + '&amp;text=' + title + '" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" /></a><a href="mailto:?Subject=' + title + '&amp;Body=I%20saw%20this%20and%20thought%20of%20you!%20 ' + title + '"><img src="https://simplesharebuttons.com/images/somacro/email.png" alt="Email" /></a></div>';
                    html += '</div>';
                }
                $('#faveDisplay').html(html);
            }
        }
        displayFaves();
    }//CLOSES LISTFAVES

    //RUNS GET RECIPE ON SEARCH BUTTON CLICK
    $('#search').click(getRecipe);

    //RUNS GET RECIPE ON ENTER BUTTON PRESS
    $('#term').keyup(function (event) {
        if (event.keyCode == 13) {
            getRecipe();
        }
    });

    $('#favouritesLink').ready(listFaves);

});
