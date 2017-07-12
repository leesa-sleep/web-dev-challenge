<?php

  if(isset($_POST["del"])) {
    $index = $_POST["del"];
    $current_data = file_get_contents('../js/favorites.json');
    $array_data = json_decode($current_data, true);

    array_splice($array_data, $index, 1);
    $new_array = json_encode($array_data);
    file_put_contents('../js/favorites.json', $new_array);
  }

?>

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
          <a class="navbar-brand" href=".././">CookBookify</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><a href=".././">Home <span class="sr-only">(current)</span></a></li>
            <li class="active"><a href="#"><link rel="shortcut icon" href=".ico">Favorites</a></li>
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

    <div class="row-fluid">
      <div class="container">
        <!-- Example row of columns -->
        <?php

          if(file_exists('../js/favorites.json')){
            $current_data = file_get_contents('../js/favorites.json');
            $array_data = json_decode($current_data, true);

            foreach($array_data as $key => $val) {
              // echo $key . "\n";
              // echo $array_data[$key]['title'];
              $curr_title = $array_data[$key]['title'];
              $curr_url = $array_data[$key]['url'];
              $curr_thumb = $array_data[$key]['thumb'];
              $curr_ing = $array_data[$key]['ingredients'];
              $num_ing = count(explode(', ',$curr_ing));
              ?>
                <div class="col-md-3">
                  <div class="result">
                    <h4><a id="title-<?php echo $key; ?>" href="<?php echo $curr_url ?>"><?php echo $curr_title; ?></a></h4>
                    <img id="thumb-<?php echo $key; ?>" src="<?php echo $curr_thumb; ?>">
                    <p><?php echo $num_ing; ?> ingredient(s): <?php echo $curr_ing; ?></p>
                    <form action="#" method="post">
                      <button type="submit" name="del" class="del-fav btn btn-primary" value="<?php echo $key; ?>">Delete</button>
                    </form>
                  </div>
                </div>
              <?php
            }
          }

        ?>

      </div> <!-- /container -->
    </div>

    <hr>

    <footer class="container">
      <p>&copy; CookBookify 2017</p>
    </footer>

    <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    </body>
</html>
