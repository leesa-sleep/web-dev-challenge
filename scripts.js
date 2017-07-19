$(document).ready(function(){

   var getRecipe = function(){

        var recipe = $('#term').val();
        $('#status').text("");
        console.log(recipe);

        if(recipe ==''){
            $('#status').text("Please enter a search term. Help us help you!")
        }

        else {
             $('#status').text("Here are your recipes for " + recipe +"!")

             var myUrl = 'http://www.recipepuppy.com/api/?q='+recipe;
             var Proxy = 'https://cors-anywhere.herokuapp.com/';
             var finalUrl = Proxy + myUrl;

             console.log(finalUrl);

             $.getJSON(finalUrl, function(json) {

                  console.log(json.results[0]);
            });
        }

    }

   $('#search').click(getRecipe);

   

});
