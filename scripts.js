
$(document).ready(function(){


    var objectA = {}
    var fav = []
    var fav = JSON.parse(localStorage.faves);

    // ADD ITEM TO FAVOURITES
    $(document).delegate( ".add", "click", function() {
        console.log(objectA)
        var num = this.id;
        console.log(num);
        console.log(objectA[num])
        fav.push(objectA[num])
        localStorage.setItem("faves", JSON.stringify(fav));
        console.log(fav)
    });


    // REMOVES ITEM FROM FAVOURITES
    $(document).delegate( ".remove", "click", function() {
        console.log(fav)
        var f = this.id;
        console.log(f);
        console.log(fav[f]);
        fav.splice(f, 1);
        localStorage.setItem("faves", JSON.stringify(fav));
        location.reload();
    });

    // GET RECIPE FUNCTION
    var getRecipe = function () {

        var recipe = $('#term').val();
        $('#status').text("");
        console.log(recipe);

        //IF USER PRESSES GO WITHOUT ENTERING A SEARCH TERM
        if (recipe == '') {
            $('#status').text("Please enter a search term. Help us help you!")
        }

        else {

            //CREATES PROXY URL TO DEAL WITH CORS
            var finalUrl = 'https://cors-anywhere.herokuapp.com/' + 'http://www.recipepuppy.com/api/?q=' + recipe;

            //API CALL
            $.getJSON(finalUrl, function (json) {
                console.log(json.results);
                objectA = json.results;
                console.log(objectA);
                console.log($.isEmptyObject(json.results));

                //IN CASE NOTHING COMES BACK
                if ($.isEmptyObject(json.results)) {
                    console.log("failed");
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
                        html += '<div class="thumbCont"><img class="thumb" src="' + thumbnail + '"><button class="add" type="button" id="' + [i] + '">+</button></div>';
                        html += '<p><a href="' + link + '">' + title + '</a></p>';
                        html += '<p> Number of ingredients: ' + ingredients + '</p>';
                        html += '</div>';
                    }
                    //POPULATE RESULT SECTION  
                    $('#result').html(html);


                    console.log(json.results[0].title);

                    return objectA;
                }

            });
        }

    }//closes getRecipe();

     //FAVES POPULATION FUNCTION
   var listFaves = function () {
       var myArray = JSON.parse(localStorage.getItem('faves'));
       console.log(myArray);
       console.log("clicked on favourites")

       var displayFaves = function () {
           //IN CASE NOTHING COMES BACK
           if (myArray.length === 0) {
               console.log("failed");
               $('.favStatus').text("Looks like there's nothing here, try searching for some delicious recipes and adding them here!")
           }

           else {
               $('.favStatus').text("Here are your favourites! You can share with your friends or remove from the list")
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
                   html += '<div class="thumbCont"><img class="thumb" src="' + thumbnail + '"><button class="remove" type="button" id="' + [i] + '">-</button></div>';
                   html += '<p><a href="' + link + '">' + title + '</a></p>';
                   html += '<p> Number of ingredients: ' + ingredients + '</p>';
                   html += '<div id="share-buttons"><a href="http://www.facebook.com/sharer.php?u=' + link + '" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" /></a><a href="https://twitter.com/share?url=' + link + '&amp;text=' + title + '" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" /></a><a href="mailto:?Subject=' + title + '&amp;Body=I%20saw%20this%20and%20thought%20of%20you!%20 ' + title + '"><img src="https://simplesharebuttons.com/images/somacro/email.png" alt="Email" /></a></div>';
                   html += '</div>';
               }
               $('#faveDisplay').html(html);
           }
       }
       console.log("hello");
       displayFaves();
   }
   

   $('#search').click(getRecipe);

   $('#term').keyup(function(event){
       if(event.keyCode == 13){
           getRecipe();
       }
   });


   $('#favouritesLink').ready(listFaves);
   

});
