$(document).ready(function(){

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

             console.log(finalUrl);

             $.getJSON(finalUrl, function(json) {
                 console.log(json.results);
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
                        html += '<div class="thumbCont"><img class="thumb" src="' +thumbnail+ '"><button class="add" type="button">+</button></div>';
                        html += '<p><a href="'+link+'">' + title +'</a></p>';
                        html += '<p> Number of ingredients: ' + ingredients + '</p>';
                        html += '</div>';
                    }
                 $('#result').html(html);

                  console.log(json.results[0].title);

                 }
                
            });
        }

    }

   $('#search').click(getRecipe);

   

});
