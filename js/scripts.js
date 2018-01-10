(function($) {
  "use strict"; // Start of use strict

  // Enable Carousel Indicators
  $(".item").click(function(){
      $("#myCarousel").carousel(1);
  });

  // Enable Carousel Controls
  $(".left").click(function(){
      $("#myCarousel").carousel("prev");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

function setYellowBrickImages() {
    document.getElementById("descriptiontitle").innerHTML = "Yellow Brick";
    document.getElementById("imagecarousel").style.width = "40%";
    document.getElementById("img1").src = "img/appStore.png";
    document.getElementById("img2").src = "img/map.png";
    document.getElementById("img3").src = "img/modal.png";
    document.getElementById("img4").src = "img/businessProfile.png";

    document.getElementById("ybbutton").className = "btn btn-default active";
    document.getElementById("ecbutton").className = "btn-default";
    document.getElementById("plbutton").className = "btn-default";
    document.getElementById("cqbutton").className = "btn-default";
    document.getElementById("inbutton").className = "btn-default";

}

function setEmotionClassifyImages() {
    document.getElementById("descriptiontitle").innerHTML = "Emotion Classify";
    document.getElementById("imagecarousel").style.width = "60%";
    document.getElementById("img1").src = "img/happy.png";
    document.getElementById("img2").src = "img/surprise.png";
    document.getElementById("img3").src = "img/sad.png";
    document.getElementById("img4").src = "img/anger.png";

    document.getElementById("ybbutton").className = "btn-default";
    document.getElementById("ecbutton").className = "btn btn-default active";
    document.getElementById("plbutton").className = "btn-default";
    document.getElementById("cqbutton").className = "btn-default";
    document.getElementById("inbutton").className = "btn-default";
}

function setPlacesImages() {
    document.getElementById("descriptiontitle").innerHTML = "Places";
    document.getElementById("imagecarousel").style.width = "40%";
    document.getElementById("img1").src = "img/login.png";
    document.getElementById("img2").src = "img/mapmarkers.png";
    document.getElementById("img3").src = "img/marker.png";
    document.getElementById("img4").src = "img/markermoved.png";

    document.getElementById("ybbutton").className = "btn-default";
    document.getElementById("ecbutton").className = "btn-default";
    document.getElementById("plbutton").className = "btn btn-default active";
    document.getElementById("cqbutton").className = "btn-default";
    document.getElementById("inbutton").className = "btn-default";
}

function setCityQuizImages() {
    document.getElementById("descriptiontitle").innerHTML = "City Quiz";
    document.getElementById("imagecarousel").style.width = "40%";
    document.getElementById("img1").src = "img/home.png";
    document.getElementById("img2").src = "img/question.png";
    document.getElementById("img3").src = "img/results.png";
    document.getElementById("img4").src = "img/leaderboard.png";

    document.getElementById("ybbutton").className = "btn-default";
    document.getElementById("ecbutton").className = "btn-default";
    document.getElementById("plbutton").className = "btn-default";
    document.getElementById("cqbutton").className = "btn btn-default active";
    document.getElementById("inbutton").className = "btn-default";
}

function setInvasionImages() {
    document.getElementById("descriptiontitle").innerHTML = "Invasion";
    document.getElementById("imagecarousel").style.width = "60%";
    document.getElementById("img1").src = "img/happy.png";
    document.getElementById("img2").src = "img/surprise.png";
    document.getElementById("img3").src = "img/sad.png";
    document.getElementById("img4").src = "img/anger.png";

    document.getElementById("ybbutton").className = "btn-default";
    document.getElementById("ecbutton").className = "btn-default";
    document.getElementById("plbutton").className = "btn-default";
    document.getElementById("cqbutton").className = "btn-default";
    document.getElementById("inbutton").className = "btn btn-default active";
}



//portfolio partitioned in 5 sectiones
// <!DOCTYPE html>
// <html lang="en">
//
//   <head>
//
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
//     <meta name="description" content="">
//     <meta name="author" content="">
//
//     <title>Ryan Ching</title>
//
//     <!-- Bootstrap core CSS -->
//     <link href="vendor/bootstrap/css/bootstrap.css" rel="stylesheet">
//
//     <!-- Custom fonts for this template -->
//     <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
//     <link href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet" type="text/css">
//     <link href='https://fonts.googleapis.com/css?family=Cabin:700' rel='stylesheet' type='text/css'>
//
//     <!-- Custom styles for this template -->
//     <link href="css/stylesheet.css" rel="stylesheet">
//
//   </head>
//
//   <body id="page-top">
//
//     <!-- Navigation -->
//     <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
//       <div class="container">
//         <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
//           Menu
//           <i class="fa fa-bars"></i>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarResponsive">
//           <ul class="navbar-nav ml-auto">
//             <li class="nav-item">
//               <a class="nav-link js-scroll-trigger" href="#about">About</a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link js-scroll-trigger" href="#resume">Resume</a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//
//     <!-- Intro Header -->
//     <header class="masthead">
//       <div id="about" class="intro-body">
//         <div class="container">
//           <div class="row">
//             <div class="col-lg-8 mx-auto">
//               <h1 class="brand-heading">Ryan Ching</h1>
//               <p class="intro-text">(Aspiring) Software Engineer</p>
//               <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//
//     <!-- About Section -->
//     <!-- <section id="about" class="content-section text-center">
//       <div class="container">
//         <div class="row">
//           <div class="col-lg-8 mx-auto">
//             <h2>About Grayscale</h2>
//             <p>Grayscale is a free Bootstrap theme created by Start Bootstrap. It can be yours right now, simply download the template on
//               <a href="http://startbootstrap.com/template-overviews/grayscale/">the preview page</a>. The theme is open source, and you can use it for any purpose, personal or commercial.</p>
//             <p>This theme features stock photos by
//               <a href="http://gratisography.com/">Gratisography</a>
//               along with a custom Google Maps skin courtesy of
//               <a href="http://snazzymaps.com/">Snazzy Maps</a>.</p>
//             <p>Grayscale includes full HTML, CSS, and custom JavaScript files along with SASS and LESS files for easy customization!</p>
//           </div>
//         </div>
//       </div>
//     </section> -->
//
//     <!-- Portfolio Section -->
//     <section id="portfolio" class="content-section text-center" style="height:2000px">
//
//       <h2>Here are some things I've made: </h2>
//       <div style="width:65%; height: 1500px; background-color:blue; float:left;">
//         <div style="width:100%; height: 25%; background-color:purple">
//           <h4>INFO ABOUT YELLOWBRICK HERE</h4>
//         </div>
//         <div style="width:100%; height: 25%; background-color:red">
//           <h4>INFO ABOUT EMOTION CLASSIFY HERE</h4>
//         </div>
//         <div style="width:100%; height: 25%; background-color:purple">
//           <h4>INFO ABOUT PLACES HERE</h4>
//         </div>
//         <div style="width:100%; height: 25%; background-color:red">
//           <h4>INFO ABOUT INVASION HERE</h4>
//         </div>
//       </div>
//
//     <div style="width:35%; height: 1500px; background-color:red; float:right; ">
//         <!--  Yellow Brick -->
//         <div style="width:100%; height: 25%; background-color:grey">
//               <div class="container">
//                 <br>
//                 <div id="myCarousel" class="carousel slide" data-ride="carousel">
//                 <!-- Indicators -->
//                 <ol class="carousel-indicators">
//                   <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
//                   <li data-target="#myCarousel" data-slide-to="1"></li>
//                   <li data-target="#myCarousel" data-slide-to="2"></li>
//                   <li data-target="#myCarousel" data-slide-to="3"></li>
//                 </ol>
//
//                 <!-- Wrapper for slides -->
//                 <div class="carousel-inner" role="listbox">
//
//                   <div class="item active">
//                     <img src="img/appStore.png" alt="Chania" width="50%" height="100%">
//
//                   </div>
//
//                   <div class="item">
//                     <img src="img/map.png" alt="Chania" width="50%" height="100%">
//
//                   </div>
//
//                   <div class="item">
//                     <img src="img/modal.png" alt="Flower" width="50%" height="100%">
//
//                   </div>
//
//                   <div class="item">
//                     <img src="img/businessProfile.png" alt="Flower" width="50%" height="100%">
//
//                   </div>
//
//                 </div>
//
//                 <!-- Left and right controls -->
//                 <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev" style="padding-right: 0px">
//                   <span class="glyphicon glyphicon-chevron-left" aria-hidden="false"></span>
//                   <span class="sr-only">Previous</span>
//                 </a>
//                 <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
//                   <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
//                   <span class="sr-only">Next</span>
//                 </a>
//                 </div>
//                 </div>
//             </div>
//             <!-- Emotion Classify -->
//             <div style="width:100%; height: 25%; background-color:green">
//                   <div class="container">
//                     <br>
//                     <div id="myCarousel2" class="carousel slide" data-ride="carousel">
//                     <!-- Indicators -->
//                     <ol class="carousel-indicators">
//                       <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
//                       <li data-target="#myCarousel" data-slide-to="1"></li>
//                       <li data-target="#myCarousel" data-slide-to="2"></li>
//                       <li data-target="#myCarousel" data-slide-to="3"></li>
//                     </ol>
//
//                     <!-- Wrapper for slides -->
//                     <div class="carousel-inner" role="listbox">
//
//                       <div class="item active">
//                         <img src="img/surprise.png" alt="Chania" width="50%" height="100%">
//
//                       </div>
//
//                       <div class="item">
//                         <img src="img/happy.png" alt="Chania" width="50%" height="100%">
//
//                       </div>
//
//                       <div class="item">
//                         <img src="img/sad.png" alt="Flower" width="50%" height="100%">
//
//                       </div>
//
//                       <div class="item">
//                         <img src="img/anger.png" alt="Flower" width="50%" height="100%">
//
//                       </div>
//
//                     </div>
//
//                     <!-- Left and right controls -->
//                     <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev" style="padding-right: 0px">
//                       <span class="glyphicon glyphicon-chevron-left" aria-hidden="false"></span>
//                       <span class="sr-only">Previous</span>
//                     </a>
//                     <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
//                       <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
//                       <span class="sr-only">Next</span>
//                     </a>
//                     </div>
//                     </div>
//                 </div>
//                 <!-- Places -->
//                 <div style="width:100%; height: 25%; background-color:grey">
//                       <div class="container">
//                         <br>
//                         <div id="myCarousel" class="carousel slide" data-ride="carousel">
//                         <!-- Indicators -->
//                         <ol class="carousel-indicators">
//                           <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
//                           <li data-target="#myCarousel" data-slide-to="1"></li>
//                           <li data-target="#myCarousel" data-slide-to="2"></li>
//                           <li data-target="#myCarousel" data-slide-to="3"></li>
//                         </ol>
//
//                         <!-- Wrapper for slides -->
//                         <div class="carousel-inner" role="listbox">
//
//                           <div class="item active">
//                             <img src="img/appStore.png" alt="Chania" width="50%" height="100%">
//
//                           </div>
//
//                           <div class="item">
//                             <img src="img/map.png" alt="Chania" width="50%" height="100%">
//
//                           </div>
//
//                           <div class="item">
//                             <img src="img/modal.png" alt="Flower" width="50%" height="100%">
//
//                           </div>
//
//                           <div class="item">
//                             <img src="img/businessProfile.png" alt="Flower" width="50%" height="100%">
//
//                           </div>
//
//                         </div>
//
//                         <!-- Left and right controls -->
//                         <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev" style="padding-right: 0px">
//                           <span class="glyphicon glyphicon-chevron-left" aria-hidden="false"></span>
//                           <span class="sr-only">Previous</span>
//                         </a>
//                         <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
//                           <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
//                           <span class="sr-only">Next</span>
//                         </a>
//                         </div>
//                         </div>
//                     </div>
//                     <!-- Invasion -->
//                     <div style="width:100%; height: 25%; background-color:green">
//                           <div class="container">
//                             <br>
//                             <div id="myCarousel" class="carousel slide" data-ride="carousel">
//                             <!-- Indicators -->
//                             <ol class="carousel-indicators">
//                               <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
//                               <li data-target="#myCarousel" data-slide-to="1"></li>
//                               <li data-target="#myCarousel" data-slide-to="2"></li>
//                               <li data-target="#myCarousel" data-slide-to="3"></li>
//                             </ol>
//
//                             <!-- Wrapper for slides -->
//                             <div class="carousel-inner" role="listbox">
//
//                               <div class="item active">
//                                 <img src="img/appStore.png" alt="Chania" width="50%" height="100%">
//
//                               </div>
//
//                               <div class="item">
//                                 <img src="img/map.png" alt="Chania" width="50%" height="100%">
//
//                               </div>
//
//                               <div class="item">
//                                 <img src="img/modal.png" alt="Flower" width="50%" height="100%">
//
//                               </div>
//
//                               <div class="item">
//                                 <img src="img/businessProfile.png" alt="Flower" width="50%" height="100%">
//
//                               </div>
//
//                             </div>
//
//                             <!-- Left and right controls -->
//                             <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev" style="padding-right: 0px">
//                               <span class="glyphicon glyphicon-chevron-left" aria-hidden="false"></span>
//                               <span class="sr-only">Previous</span>
//                             </a>
//                             <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
//                               <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
//                               <span class="sr-only">Next</span>
//                             </a>
//                             </div>
//                             </div>
//                         </div>
//
// </div>
//           <!-- </div> -->
//         <!-- </div> -->
//
//     </section>
//
//
//     <!-- Skills Section -->
//     <section id="skills" class="download-section content-section text-center">
//       <div class="container">
//         <div class="row">
//           <div class="col-lg-8 mx-auto">
//             <h2>My Skills: </h2>
//
//
//           </div>
//         </div>
//       </div>
//     </section>
//
//
//
//
//     <!-- Resume Section -->
//     <section id="resume" class="content-section text-center">
//       <div class="container">
//         <div class="col-lg-8 mx-auto">
//           <h2>Link to my resume (pdf): </h2>
//
//           <a href="http://startbootstrap.com/template-overviews/grayscale/" class="btn btn-default btn-lg">Resume</a>
//         </div>
//       </div>
//     </section>
//
//     <!-- Contact Section -->
//     <section id="contact" class="download-section content-section text-center">
//       <div class="container">
//         <div class="row">
//           <div class="col-lg-8 mx-auto">
//             <h2>Contact Me</h2>
//             <p>Feel free to leave us a comment on the
//               <a href="http://startbootstrap.com/template-overviews/grayscale/">Grayscale template overview page</a>
//               on Start Bootstrap to give some feedback about this theme!</p>
//             <ul class="list-inline banner-social-buttons">
//               <li class="list-inline-item">
//                 <a href="https://twitter.com/SBootstrap" class="btn btn-default btn-lg">
//                   <i class="fa fa-twitter fa-fw"></i>
//                   <span class="network-name">Twitter</span>
//                 </a>
//               </li>
//               <li class="list-inline-item">
//                 <a href="https://github.com/BlackrockDigital/startbootstrap" class="btn btn-default btn-lg">
//                   <i class="fa fa-github fa-fw"></i>
//                   <span class="network-name">Github</span>
//                 </a>
//               </li>
//               <li class="list-inline-item">
//                 <a href="https://plus.google.com/+Startbootstrap/posts" class="btn btn-default btn-lg">
//                   <i class="fa fa-google-plus fa-fw"></i>
//                   <span class="network-name">Google+</span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//
//     <!-- Scripts -->
//     <script src="vendor/jquery/jquery.min.js"></script>
//     <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
//     <script src="js/scripts.js"></script>
//     <script src="vendor/bootstrap/js/bootstrap.js"></script>
//
//   </body>
//
// </html>
