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

var teamlist = ["alex", "ed", "jacob", "nichole", "duncan", "yui", "paul", "kim", "joel", "hamilton", "shawn", "ian", "javier", "k", "phil", "reshma"];
var currname = 0;

//window.setInterval(function(){
//  document.getElementById('team-text').innerHTML = getTeamFeat(teamlist[currname]);
//  document.getElementById('team-image').src = getTeamImg(teamlist[currname]);
//  
//  currname = currname + 1;
//  if currname > teamlist.length {
//    currname = 0;
//  }
//}, 10000);

function oniconclick(clicked_thing) {
  document.getElementById('team-text').innerHTML = getTeamFeat(clicked_thing);
  document.getElementById('team-image').src = getTeamImg(clicked_thing);
}

function getTeamFeat(name) {
  var string = "";
  switch(name) {
    case 'reshma':
      string = "<h3>Reshma Zachariah</h3><p>Concept and 2D Artist</p>"
      break;
    case 'hamilton':
      string = "<h3>Hamilton Connor</h3><p>Sound Director, Artist Coordinator, Developer</p>"
      break;
    case 'nichole':
      string = "<h3>Nichole Lasater</h3><p>Producer, Developer</p>"
      break;
    case 'duncan':
      string = "<h3>Duncan Bauer</h3><p>UI Director, Developer</p>"
      break;
    case 'alex':
      string = "<h3>Alex Mao</h3><p>Team Lead, Developer</p>"
      break;
    case 'shawn':
      string = "<h3>Shawn Edmond</h3><p>Developer</p>"
      break;
    case 'jacob':
      string = "<h3>Jacob Le</h3><p>Narrative Director, Developer</p>"
      break;
    case 'ed':
      string = "<h3>Ed Martin Cruz</h3><p>Lead Developer</p>"
      break;
    case 'paul':
      string = "<h3>Paul Odion</h3><p>Chief 3D Artist</p>"
      break;
    case 'kim':
      string = "<h3>Kimberly Oba</h3><p>Artistic Director, Concept and 2D Artist</p>"
      break;
    case 'yui':
      string = "<h3>Yui Sia</h3><p>Developer</p>"
      break;
    case 'harp':
      string = "<h3>Harpreet Mahli</h3><p>Designated Snack Thief.</p>"
      break;
    case 'k':
      string = "<h3>K Connor</h3><p>Concept Artist</p>"
      break;
    case 'ian':
      string = "<h3>Ian Carlton</h3><p>Composer</p>"
      break;
    case 'javier':
      string = "<h3>Javier Juanillo</h3><p>Film Artist, Writer</p>"
      break;
    case 'phil':
      string = "<h3>Phil Zajik</h3><p>Composer</p>"
      break;
    case 'joel':
      string = "<h3>Joel Reynada</h3><p>Writer, 3D Artist</p>"
      break;
    default:
      string = "<h3>Alex Mao</h3><p>Team Lead, Developer</p>"
  }
  return string;
}

function getTeamImg(name) {
  var string = "";
  switch(name) {
    case 'reshma':
      string = "assets/team/ReshmaZachariah.jpg"
      break;
    case 'hamilton':
      string = "assets/team/hamilton.jpg"
      break;
    case 'nichole':
      string = "assets/team/nichole.jpg"
      break;
    case 'duncan':
      string = "assets/team/duncan.jpg"
      break;
    case 'alex':
      string = "assets/team/alex.jpg"
      break;
    case 'shawn':
      string = "assets/team/shawn.jpg"
      break;
    case 'jacob':
      string = "assets/team/jacob.jpg"
      break;
    case 'ed':
      string = "assets/team/ed.jpg"
      break;
    case 'paul':
      string = "assets/team/paul.jpg"
      break;
    case 'kim':
      string = "assets/team/kim.jpg"
      break;
    case 'yui':
      string = "assets/team/yui.jpeg"
      break;
    case 'harp':
      string = "assets/team/harp.jpg"
      break;
    case 'k':
      string = "assets/team/k.jpg"
      break;
    case 'ian':
      string = "assets/team/ian.jpg"
      break;
    case 'javier':
      string = "assets/team/javier.jpg"
      break;
    case 'phil':
      string = "assets/team/phil.jpg"
      break;
    case 'joel':
      string = "assets/team/joel.jpg"
      break;
    default:
      string = "assets/team/alex.jpg"
  }
  return string;
}