(function() {
  
  window.addEventListener('scroll', function(event) {
    var depth, i, layer, layers, len, movement, topDistance, translate3d;
    topDistance = this.pageYOffset;
    layers = document.querySelectorAll("[data-type='parallax']");
    for (i = 0, len = layers.length; i < len; i++) {
      layer = layers[i];
      depth = layer.getAttribute('data-depth');
      movement = -(topDistance * depth);
      translate3d = 'translate3d(0, ' + movement + 'px, 0)';
      layer.style['-webkit-transform'] = translate3d;
      layer.style['-moz-transform'] = translate3d;
      layer.style['-ms-transform'] = translate3d;
      layer.style['-o-transform'] = translate3d;
      layer.style.transform = translate3d;
    }
  });

}).call(this);


function oniconclick(clicked_thing) {
  document.getElementById('team-text').innerHTML = getTeamFeat(clicked_thing);
}

function getTeamFeat(name) {
  var string = "";
  switch(name) {
    case 'reshma':
      string = "<h2>Reshma Zachariah</h2><p>some text</p>"
      break;
    case 'hamilton':
      string = "<h2>Hamilton Connor</h2><p>some text</p>"
      break;
    case 'nichole':
      string = "<h2>Nichole Lasater</h2><p>some text </p>"
      break;
    case 'alex':
      string = "<h2>Alex Mao</h2><p>some text</p>"
      break;
    case 'jacob':
      string = "<h2>Jacob Le</h2><p>some text</p>"
      break;
    case 'ed':
      string = "<h2>Ed Martin Cruz</h2><p>some text</p>"
      break;
    case 'paul':
      string = "<h2>Paul Odion</h2><p>some text</p>"
      break;
    case 'kim':
      string = "<h2>Kimberly Oba</h2><p>some text</p>"
      break;
    case 'yui':
      string = "<h2>Yui Sia</h2><p>some text </p>"
      break;
    case 'harp':
      string = "<h2>Harpreet Mahli</h2><p>Designated snack thief.</p>"
      break;
    case 'k':
      string = "<h2>K Connor</h2><p>some text</p>"
      break;
    case 'ian':
      string = "<h2>Ian Carlton</h2><p>some text</p>"
      break;
    case 'javier':
      string = "<h2>Javier Juanillo</h2><p>some text</p>"
      break;
    case 'phil':
      string = "<h2>Phil Zajik</h2><p>some text</p>"
      break;
    case 'joel':
      string = "<h2>Joel Reynada</h2><p>some text </p>"
      break;
    default:
      string = "<p>We are a group of dedicated developers, artists, and musicians who are passionate about games.</p>"
  }
  return string;
}