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
    document.getElementById("portfoliodescription").innerHTML = "Yellow Brick is an iOS and Android mobile app that allows users to find deals and discounts at local restaurants and bars and earn loyalty rewards from said businesses. We used React Native to build the front end mobile application for iOS and Android, and NodeJS to build the backend. We also use the MapBox API and AWS to show deals happening in the user's area in real time. Check out the <a href='https://github.com/ryanching/YellowBrick' target='_blank' style='text-decoration:underline; color:white'>code on github!</a>";

    document.getElementById("imagecarousel").style.width = "40%";
    document.getElementById("img1").src = "img/appStore.png";
    document.getElementById("img2").src = "img/map.png";
    document.getElementById("img3").src = "img/modal.png";
    document.getElementById("img4").src = "img/businessProfile.png";

    document.getElementById("bcbutton").className = "btn-default";
    document.getElementById("ybbutton").className = "btn-active btn-lg";
    document.getElementById("ecbutton").className = "btn-default";
    document.getElementById("plbutton").className = "btn-default";
    document.getElementById("cqbutton").className = "btn-default";
    document.getElementById("inbutton").className = "btn-default";

}

function setEmotionClassifyImages() {
    document.getElementById("descriptiontitle").innerHTML = "Emotion Classify";
    document.getElementById("portfoliodescription").innerHTML = "Emotion classify is a web app that uses the webcam to predict which emotion the user is expressing. It uses a multi-class support vector machine, trained on an image dataset of facial expressions called CK+. It uses a javascript framework called CLMTrackr to extract the user's facial feature points, and Node-SVM to classify these feature points as one of seven emotions. It also uses Procrusted allignment to improve accuracy of the support vector machine. Check out the <a href='https://github.com/ryanching/emotionclassify' target='_blank' style='text-decoration:underline; color:white'>code on github!</a>";

    document.getElementById("imagecarousel").style.width = "60%";
    document.getElementById("img1").src = "img/happy.png";
    document.getElementById("img2").src = "img/surprise.png";
    document.getElementById("img3").src = "img/sad.png";
    document.getElementById("img4").src = "img/anger.png";

    document.getElementById("ybbutton").className = "btn-default";
    document.getElementById("bcbutton").className = "btn-default";
    document.getElementById("ecbutton").className = "btn-active btn-lg";
    document.getElementById("plbutton").className = "btn-default";
    document.getElementById("cqbutton").className = "btn-default";
    document.getElementById("inbutton").className = "btn-default";
}

function setBrainChainImages() {
    document.getElementById("descriptiontitle").innerHTML = "Brain Chain";
    document.getElementById("portfoliodescription").innerHTML = "Brain Chain is a project I built for my Modern Web Apps class. It give students the ability to connect with other students to study and work on homework together. Users can add their classes to their profile, create study sessions, and join study sessions. It also gives the users the option to search for sessions by class name, while autofiltering the session results as the user types the class name. It uses a Node.js backend with a sqlite database, and uses HTML/CSS, JQuery, and Bootstrap on the front end. Check out the <a href='https://github.com/ryanching/BrainChain' target='_blank' style='text-decoration:underline; color:white'>code on github!</a>";

    document.getElementById("imagecarousel").style.width = "40%";
    document.getElementById("img1").src = "img/brainchainhome.png";
    document.getElementById("img2").src = "img/brainchainmodal.png";
    document.getElementById("img3").src = "img/brainchainprofile.png";
    document.getElementById("img4").src = "img/brainchainlogin.png";

    document.getElementById("ybbutton").className = "btn-default";
    document.getElementById("bcbutton").className = "btn-active btn-lg";
    document.getElementById("ecbutton").className = "btn-default";
    document.getElementById("plbutton").className = "btn-default";
    document.getElementById("cqbutton").className = "btn-default";
    document.getElementById("inbutton").className = "btn-default";

}

function setPlacesImages() {
    document.getElementById("descriptiontitle").innerHTML = "Places";
    document.getElementById("portfoliodescription").innerHTML = "Places is an iOS mobile app for geared toward travelers to showcase the Places they've been in an interactive travel blog. It displays a map of the world and allows the user to place markers on the places they've been. In each marker, the user can store photos from their travels (displayed in a scrollable collection view), as well as a description/blog of their trip. I built this app using Swift and Xcode, and Firebase to store the photos, marker metadata, anad account info. Check out the <a href='https://github.com/ryanching/places' target='_blank' style='text-decoration:underline; color:white'>code on github!</a>";

    document.getElementById("imagecarousel").style.width = "40%";
    document.getElementById("img1").src = "img/login.png";
    document.getElementById("img2").src = "img/mapmarkers.png";
    document.getElementById("img3").src = "img/marker.png";
    document.getElementById("img4").src = "img/markermoved.png";

    document.getElementById("ybbutton").className = "btn-default";
    document.getElementById("bcbutton").className = "btn-default";
    document.getElementById("ecbutton").className = "btn-default";
    document.getElementById("plbutton").className = "btn-active btn-lg";
    document.getElementById("cqbutton").className = "btn-default";
    document.getElementById("inbutton").className = "btn-default";
}

function setCityQuizImages() {
    document.getElementById("descriptiontitle").innerHTML = "City Quiz";
    document.getElementById("portfoliodescription").innerHTML = "City Quiz is an Android mobile application which allows the user to take a daily quiz about the city they live in. The results of the quiz are then displayed to the user, and the user is placed on the daily, weekly, monthly, and all-time leaderboard. Users are also given the option to submit their own triva questions about their city which will enter circulation in future quizes after the question is approved. I built this app using Java, Android Studio, and Parse backend services. Check out the <a href='https://github.com/ryanching/cityquiz' target='_blank' style='text-decoration:underline; color:white'>code on github!</a>";

    document.getElementById("imagecarousel").style.width = "40%";
    document.getElementById("img1").src = "img/home.png";
    document.getElementById("img2").src = "img/question.png";
    document.getElementById("img3").src = "img/results.png";
    document.getElementById("img4").src = "img/leaderboard.png";

    document.getElementById("ybbutton").className = "btn-default";
    document.getElementById("bcbutton").className = "btn-default";
    document.getElementById("ecbutton").className = "btn-default";
    document.getElementById("plbutton").className = "btn-default";
    document.getElementById("cqbutton").className = "btn-active btn-lg";
    document.getElementById("inbutton").className = "btn-default";
}

function setInvasionImages() {
    document.getElementById("descriptiontitle").innerHTML = "Invasion";
    document.getElementById("portfoliodescription").innerHTML = "Invasion is a mobile app game for iOS in which the user must shoot down alien space ships before they land on Earth! Alien space ships fly toward Earth at random positions and at varying speeds, with increasing difficulty as each round progresses. The score is displayed at the end of each round, as well as the player's all-time high score. I built this app using Swift, Xcode, and the SpriteKit framework. Check out the <a href='https://github.com/ryanching/invasion' target='_blank' style='text-decoration:underline; color:white'>code on github!</a>";

    document.getElementById("imagecarousel").style.width = "60%";
    document.getElementById("img1").src = "img/splashScreen.png";
    document.getElementById("img2").src = "img/gamePlay.png";
    document.getElementById("img3").src = "img/gamePlay2.png";
    document.getElementById("img4").src = "img/gameOver.png";

    document.getElementById("ybbutton").className = "btn-default";
    document.getElementById("bcbutton").className = "btn-default";
    document.getElementById("ecbutton").className = "btn-default";
    document.getElementById("plbutton").className = "btn-default";
    document.getElementById("cqbutton").className = "btn-default";
    document.getElementById("inbutton").className = "btn-active btn-lg";
}
