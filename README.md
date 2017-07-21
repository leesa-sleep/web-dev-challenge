# web-dev-challenge installation

A recipe finder web page based on your input of ingredients. 

Please note: Due to a CORS issue with the recipepuppy API, I had to use a third-party cors-anywhere API to initially make a GET request.  

I did however build a clone of the recipepuppy API which I have hosted on Heroku and allowed me to bypass the CORS issue for my front-end to make a GET request. I have omitted this from the test however due to the added code base, as well as it being slower due to the time it takes for the API to wake up on Heroku.

If you would like to view the API, it can be found [here](https://frozen-river-70940.herokuapp.com/api), and on [Github](https://github.com/curtisjohnson1/recipe-server)

## Prerequisites

Please ensure that you are running Node version 6.11 or higher, you can check that you are by running terminal command

```javascript
node -v
```

If you do not have node installed, then please follow [here](https://nodejs.org/en/download/) to get node installed onto your machine.

## Getting started

To get started, please follow the below instructions

## Local Machine Commands

Clone the git repo

```javascript
git clone https://github.com/curtisjohnson1/web-dev-challenge.git
```

Install all dependencies that are required

```javascript
npm install
```

Run package script

```javascript
npm run dev
```

Once the package scripts have been successfully loaded, follow the below link in your browser to view the wepbage

```javascript
https://localhost:3000
```


# Leesa Web Developer Code Challenge


This is a basic challenge to determine how you approach ambiguous challenges. Most of the time you'll be working directly with our marketing team and they may not be able to provide you with complete requirements.  Show us how you can take a partial set of instructions!

## The Ask

You will need to make a small application that can search for recipes and save them to a list of favorites.

For this we'll use the free api at [Recipe Puppy](http://www.recipepuppy.com/). Documentation [can be found here.](http://www.recipepuppy.com/about/api/)

There are some basic mocks in `/mocks` -- showing the poor artistry of the random engineer assigned to the task.

 - Fork this project.
 - **Complete the items below using any front end tech you'd like.** (( This must be entirely in the front end. Server side languages or platforms will be immediately disqualified ))
 - Submit a Pull Request with your changes.
 - Create an issue if you have any questions.
 

### What should it do?
 - Provide search functionality to query the api for recipes.
 - Show a list of recipes. Information should contain a thumbnail, recipe name, and number of ingredients.
 - Provide the functionality to add a recipe to my favorites.
 - Provide a way to get to a page showing all of my favorites.
 - Favorites should persist between page views.
 - Site should work on mobile devices.
 - Should have a very small code footprint.


#### Extra credit:
 - Add navigation that makes sense.
 - Add the ability to remove favorites.
 - Create the ability to share my favorites with others.
