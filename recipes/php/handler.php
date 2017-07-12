<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>CookBookify!</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="../css/main.css">


    </head>
    <body>
    <!--[if lt IE 8]>
        <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

    <nav class="navbar navbar-default">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">CookBookify</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><a href="../index.html">Home <span class="sr-only">(current)</span></a></li>
            <li><a href="favorites.php"><link rel="shortcut icon" href=".ico">Favorites</a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>

    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="jumbotron">
      <div class="image-wrapper">
        <div class="container">
          <h1>Welcome to CookBookify!</h1>
          <p>This is a simple web application that uses RecipePuppy.com's API to output recipes to you! Recipes can also be saved and deleted as the need arises. Enjoy!</p>
          <p><a class="btn btn-primary btn-lg" href="http://www.recipepuppy.com/about/api/" role="button">Learn more &raquo;</a></p>
        </div>
      </div>
    </div>

    <div class="container">
      <!-- Example row of columns -->

      <?php

        $favorite = $_COOKIE['mycookie']; // the object
        $favArray = explode(',', $favorite);
        $duplicate = false;

        if(file_exists('../js/favorites.json')){
          $current_data = file_get_contents('../js/favorites.json');
          $array_data = json_decode($current_data, true);
          $extra = array(
            'title' => $favArray[0],
            'url' => $favArray[1],
            'thumb' => $favArray[2],
            'ingredients' => $favArray[3]
          );
          foreach($array_data as $value) {
            if($value['title'] === $favArray[0]) {
              $duplicate = true;
            }
          }
          $array_data[] = $extra;
          $final_data = json_encode($array_data);
          if(!$duplicate) {
            if(file_put_contents('../js/favorites.json', $final_data)) {
              // echo success;
              ?>

              <h2>A new favorite has been added!</h2>
              <p>Thank you for choosing to favorite this recipe. View this recipe <a href="<?php echo $favArray[1]; ?>">here</a>, view your <a href="favorites.php">favorites</a>, or return <a href="../">home</a> to search for more recipes!</p>

              <?php
            }
          } else {
            ?>

            <h2>Uh oh! This favorite already exists!</h2>
            <p>Don't fret. You can view your <a href="favorites.php">favorites</a> here, or return <a href="../">home</a> to search for more recipes!</p>

            <?php
          }
        }
      ?>

      <hr>

      <footer>
        <p>&copy; Company 2015</p>
      </footer>
    </div> <!-- /container -->

    <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

    </body>
</html>
