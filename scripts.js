var fav = []
$(document).ready(function(){


    var objectA = {}
    var fav = JSON.parse(localStorage.faves);

    $(document).delegate( ".add", "click", function() {
        console.log(objectA)
        var num = this.id;
        console.log(num);
        console.log(objectA[num])
        fav.push(objectA[num])
        localStorage.setItem("faves", JSON.stringify(fav));
        console.log(fav)
    });

    $(document).delegate( ".remove", "click", function() {
        console.log(fav)
        var f = this.id;
        console.log(f);
        console.log(fav[f]);
        fav.splice(f, 1);
        localStorage.setItem("faves", JSON.stringify(fav));
        location.reload();
        // var num = this.id;
        // console.log(num);
        // console.log(objectA[num])
        // fav.push(objectA[num])
        // localStorage.setItem("faves", JSON.stringify(fav));
        // console.log(fav)
    });


   var getRecipe = function(){

        var recipe = $('#term').val();
        $('#status').text("");
        console.log(recipe);

        if(recipe ==''){
            $('#status').text("Please enter a search term. Help us help you!")
        }

        else {
             

             var myUrl = 'http://www.recipepuppy.com/api/?q='+recipe;
             var Proxy = 'https://cors-anywhere.herokuapp.com/';
             var finalUrl = Proxy + myUrl;

             $.getJSON(finalUrl, function(json) {
                 console.log(json.results);
                 objectA = json.results;
                 console.log(objectA);
                 console.log($.isEmptyObject( json.results ));

                 if($.isEmptyObject( json.results )){
                     console.log("failed");
                      $('#status').text("We couldn't find any recipes for " + recipe + " try something else!")
                 }

                 else {
                    $('#status').text("Here are your recipes for " + recipe +"!")
                    var html=""
                    for(var i in json.results){
                        var ing = json.results[i].ingredients.split(",");
                        var title = json.results[i].title;
                        var ingredients = ing.length;
                        var thumbnail = json.results[i].thumbnail;
                        var link = json.results[i].href;

                        if(json.results[i].thumbnail === ''){
                            thumbnail = 'img/food.jpg';}

                        html += '<div class="col-sm-4 recipe">';
                        html += '<div class="thumbCont"><img class="thumb" src="' +thumbnail+ '"><button class="add" type="button" id="'+[i]+'">+</button></div>';
                        html += '<p><a href="'+link+'">' + title +'</a></p>';
                        html += '<p> Number of ingredients: ' + ingredients + '</p>';
                        html += '</div>';
                    }
                 $('#result').html(html);
                 

                  console.log(json.results[0].title);

                  return objectA;
                 }
                
            });
        }

    }//closes getRecipe();

     
     var listFaves = function(){
        var myArray = JSON.parse(localStorage.getItem('faves'));
        console.log(myArray);
        console.log("clicked on favourites")
            
            var displayFaves = function(){
            console.log("displaying faves");
            console.log(myArray[0].title);
            var html=""
             for(var i in myArray){
                 console.log("words" + i);
                 console.log(myArray[i].title);
                 console.log(myArray[i].href);
                 console.log(myArray[i].ingredients);
                 console.log(myArray[i].href);

                        var ing = myArray[i].ingredients.split(",");
                        var title = myArray[i].title;
                        var ingredients = ing.length;
                        var thumbnail = myArray[i].thumbnail;
                        var link = myArray[i].href;

                        if(myArray[i].thumbnail === ''){
                            thumbnail = 'img/food.jpg';}

                        html += '<div class="col-sm-4 recipe">';
                        html += '<div class="thumbCont"><img class="thumb" src="' +thumbnail+ '"><button class="remove" type="button" id="'+[i]+'">-</button></div>';
                        html += '<p><a href="'+link+'">' + title +'</a></p>';
                        html += '<p> Number of ingredients: ' + ingredients + '</p>';
                        html += '</div>';
                    }
                    $('#faveDisplay').html(html);
        }  
        console.log("hello");
        displayFaves();
    }
   

   $('#search').click(getRecipe);

   $('#favouritesLink').ready(listFaves);
   

});
