var keyInfo = {
  q: {
    sound: new Howl({
      urls: ['media/bubbles.mp3']
    }),
    color: '#1abc9c'
  },
  w: {
    sound: new Howl({
      urls: ['media/clay.mp3']
    }),
    color: '#2ecc71'
  },
  e: {
    sound: new Howl({
      urls: ['media/confetti.mp3']
    }),
    color: '#3498db'
  },
  r: {
    sound: new Howl({
      urls: ['media/corona.mp3']
    }),
    color: '#9b59b6'
  },
    t: {
    sound: new Howl({
      urls: ['media/dotted-spiral.mp3']
    }),
    color: '#34495e'
  },
  y: {
    sound: new Howl({
      urls: ['media/flash-1.mp3']
    }),
    color: '#16a085'
  },
  u: {
    sound: new Howl({
      urls: ['media/flash-2.mp3']
    }),
    color: '#27ae60'
  },
  i: {
    sound: new Howl({
      urls: ['media/flash-3.mp3']
    }),
    color: '#2980b9'
  },
  o: {
    sound: new Howl({
      urls: ['media/glimmer.mp3']
    }),
    color: '#8e44ad'
  },
  p: {
    sound: new Howl({
      urls: ['media/moon.mp3']
    }),
    color: '#2c3e50'
  },
  a: {
    sound: new Howl({
      urls: ['media/pinwheel.mp3']
    }),
    color: '#f1c40f'
  },
  s: {
    sound: new Howl({
      urls: ['media/piston-1.mp3']
    }),
    color: '#e67e22'
  },
    d: {
    sound: new Howl({
      urls: ['media/piston-2.mp3']
    }),
    color: '#e74c3c'
  },
  f: {
    sound: new Howl({
      urls: ['media/prism-1.mp3']
    }),
    color: '#95a5a6'
  },
  g: {
    sound: new Howl({
      urls: ['media/prism-2.mp3']
    }),
    color: '#f39c12'
  },
  h: {
    sound: new Howl({
      urls: ['media/prism-3.mp3']
    }),
    color: '#d35400'
  },
  j: {
    sound: new Howl({
      urls: ['media/splits.mp3']
    }),
    color: '#1abc9c'
  },
  k: {
    sound: new Howl({
      urls: ['media/squiggle.mp3']
    }),
    color: '#2ecc71'
  },
  l: {
    sound: new Howl({
      urls: ['media/strike.mp3']
    }),
    color: '#3498db'
  },
  z: {
    sound: new Howl({
      urls: ['media/suspension.mp3']
    }),
    color: '#9b59b6'
  },
  x: {
    sound: new Howl({
      urls: ['media/timer.mp3']
    }),
    color: '#34495e'
  },
  c: {
    sound: new Howl({
      urls: ['media/ufo.mp3']
    }),
    color: '#16a085'
  },
  v: {
    sound: new Howl({
      urls: ['media/veil.mp3']
    }),
    color: '#27ae60'
  },
  b: {
    sound: new Howl({
      urls: ['media/wipe.mp3']
    }),
    color: '#2980b9'
  },
  n: {
    sound: new Howl({
      urls: ['media/zig-zag.mp3']
    }),
    color: '#8e44ad'
  },
  m: {
    sound: new Howl({
      urls: ['media/moon.mp3']
    }),
    color: '#2c3e50'
  }
}

var circles = [];
function onKeyDown(event) {
  if (keyInfo[event.key]) {
    var r = randomNum(10, 600);
    var maxPoint = new Point(view.size.width, view.size.height);
    var point = Point.random() * maxPoint;
    var circle = new Path.Circle(point, r);
    circle.fillColor = keyInfo[event.key].color;
    keyInfo[event.key].sound.play()
    circles.push(circle);
  }
}
function onFrame(event) {
  for (var i = 0; i < circles.length; i++) {
    circles[i].fillColor.hue += 2;
    circles[i].scale(.9);
  }
}
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}