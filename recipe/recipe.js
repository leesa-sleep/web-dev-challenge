var recipeResults = [];

function changeTab(evt, tabName) {
    var $tabcontent = $(".tabcontent"),
        $tablinks = $('.tablinks');

    $tabcontent.hide().removeClass('active');
    $('#' + tabName).show().addClass('active');
    $tablinks.removeClass('active');
    $(evt.target).addClass('active');

    var recipeTemplate = _.template($('.recipe-template').html()),
        recipeTemplateString = recipeTemplate({
            'recipeList': recipeResults,
        });

    $('.recipesResults').html(recipeTemplateString);
    if($('#Favourites').hasClass('active')) {
        $('#Favourites .recipe:not(.isFavourite)').remove();
    }
}

function searchForRecipes() {
    var searchString = $('.recipesSection .searchInput').val();
    var myUrl = "http://www.recipepuppy.com/api/?i=" + searchString;
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var finalURL = proxy + myUrl;
    $.get(finalURL, function (data) {
        var response = JSON.parse(data);
        if (response && response.results) {
            recipeResults = response.results;
            var recipeTemplate = _.template($('.recipe-template').html()),
                recipeTemplateString = recipeTemplate({
                    'recipeList': response.results
                });

            $('#Home .recipesResults').html(recipeTemplateString);
        }
    });
}

$('.suggestionsList').on('click', function (event) {
    $('.recipesSection .searchInput').val($(event.target).text());
    $('.suggestionsList').hide();
});

function getSuggestions(event) {
    var searchString = $(event.target).val();
    var myUrl = "http://www.recipepuppy.com/ing.php?q=" + searchString;
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var finalURL = proxy + myUrl;

    $.post(finalURL, function (data) {
        if (data) {
            var $suggestionsListElement = $('.suggestionsList'),
                suggestionsList = data.trim().split('\n');
            var suggestionsTemplate = _.template($('.suggestions-list-template').html()),
                suggestionsTemplateString = suggestionsTemplate({
                    'suggestionsList': suggestionsList
                });

            $('.suggestionsList').html(suggestionsTemplateString).show();
        }
    });
}

function addOrRemoveToFavourite(recipeIndex, isFavourite) {
    recipeResults[recipeIndex].isFavourite = isFavourite;
    $('.tablinks.active').trigger('click');
}