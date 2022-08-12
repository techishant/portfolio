/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */

// particlesJS.load('particles-js', 'particles.json', function() {
//   console.log('particles.js loaded - callback');
// });


/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 50,
        "density": {
          "enable": false,
          "value_area": 800
        }
      },
      "color": {
        "value": "#0B525B"
      },
      "shape": {
        "type": "circle", // border
        "stroke": {
          "width": 0
        },
        "polygon": {
          "nb_sides": 1
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.4,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 0.7,
          "opacity_min": 0.5,
          "sync": false
        }
      },
      "size": {
        "value": 50,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 7,
          "size_min": 12,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#000",
        "opacity": 0.4,
        "width": 0
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": 0,
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 0,
          "rotateY": 0
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": true,
      "background_color": "#411466",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);