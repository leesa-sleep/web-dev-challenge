$(document).ready(function(){

   var getRecipe = function(){

        var recipe = $('#term').val();
        $('#status').text("");
        console.log(recipe);

        if(recipe ==''){
            $('#status').text("Please enter a search term. Help us help you!")
        }

   };



   $('#search').click(getRecipe);
             
});
