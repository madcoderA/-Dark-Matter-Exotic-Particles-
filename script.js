//alert("🔮🧿 Dark Matter ( Exotic Particles )...\n\n\n\n👉I set up the code in different perspectives. We are not able to see dark matters. Think somehow we invert our visible light, and see how dark matter formed. The background should white to detect them clearly. The particles you see now is the exotic particles ( Hypothetical ) that exert a gravitational pull and formed a dark matter.\n\n👉Click on the screen I add an effect when they vanished and the visible photons ( white space ) extracted gradually. Enjoy...");

addEventListener('load', checkJSLoaded)

function checkJSLoaded() { 

const { random, atan2, cos, sin, hypot } = Math;

const max = 300;

const canvas = document.createElement("canvas");

const $ = canvas.getContext('2d');

const body = document.body;

const particles = [];

body.style.backgroundColor = "black";

body.style.overflow = "hidden";

body.appendChild(canvas);

let width = canvas.width = window.innerWidth;

let height = canvas.height = window.innerHeight;

let point = {    x: width/2,    y: height/2 };

let hue = 1;

function Particle(){};

Particle.prototype = {

    init(){

        this.hue = hue;

        this.alpha = 0;

        this.size = this.random(1, 4);

        this.x = this.random(0, width);

        this.y = this.random(0, height);

        this.velocity = this.size * -.2;

        this.changed = null;

        this.changedFrame = 5;

        this.maxChangedFrames = 100;

        return this;

    },

    draw(){

        $.strokeStyle = '#000';

        $.beginPath();

        $.arc(this.x, this.y, this.size, 0, 10* Math.PI);

        $.stroke();

        this.update();

    },

    update(){

        if(this.changed){

            this.alpha *= .92;

            this.size += .3;

            this.changedFrame++;

            if(this.changedFrame > this.maxChangedFrames){

                this.reset();

            }

        }    else if(this.distance(point.x, point.y) < 5){

            this.changed = true;

        }    else {

            let dx = point.x - this.x;

            let dy = point.y - this.y;

            let angle = atan2(dy, dx);

            

            this.alpha += .01;

            this.x += this.velocity * cos(angle);

            this.y += this.velocity * sin(angle);

            this.velocity += .032;

        }    

    },

    reset(){

        this.init();

    },

    distance(x, y){

        return hypot(x - this.x, y - this.y);    

    },

    random(min, max) {

      return random() * (max - min) + min;

    }

}

function animate(){

    $.fillStyle = `rgba(255,255,255, .2)`;

    $.fillRect(0, 0, width, height);

    particles.forEach((p) => {

        p.draw();

    });

    hue += .5;

    window.requestAnimationFrame(animate);

}

function touches(e){

    point.x = e.touches ? e.touches[0].clientX : e.clientX;

    point.y = e.touches ? e.touches[0].clientY : e.clientY;

}

function setup(){

    for(let i=0; i<max; i++){

        setTimeout(() => {

            let p = new Particle().init();

            particles.push(p);

        }, i * 30);

    }

    

  //for iOs by Mǟɖ↻ôɖɆⱤ💉

function check_update_xyra(event, mouse_xyra) {

  var x, y, r, a;

  var tgtoffleft = 0;

  var tgtofftop = 0;

  var min_r, max_r, width;

  if(event.touches) {

    var touches = event.touches;

    // Bit of code to calculate the actual Left and Top offsets by adding offsets 

    // of each parent back through the hierarchy

    var tgt = event.touches[0].target;

    while (tgt) {

      tgtoffleft = tgtoffleft + tgt.offsetLeft;

      tgtofftop = tgtofftop + tgt.offsetTop;

      tgt = tgt.offsetParent;

    }

    // x = (touches[0].pageX - touches[0].target.offsetLeft) - PIVOT_X;

    // y = PIVOT_Y - (touches[0].pageY - touches[0].target.offsetTop);

    x = (touches[0].pageX - tgtoffleft) - PIVOT_X;

    y = PIVOT_Y - (touches[0].pageY - tgtofftop);

  }

  else {

    x = event.offsetX - PIVOT_X;

    y = PIVOT_Y - event.offsetY;

  }

  /* cartesian to polar coordinate conversion */

  r = Math.sqrt(x * x + y * y);

  a = Math.atan2(y, x);

  mouse_xyra.x = x;

  mouse_xyra.y = y;

  mouse_xyra.r = r;

  mouse_xyra.a = a;

  if((r >= MIN_TOUCH_RADIUS) && (r <= MAX_TOUCH_RADIUS))

    return true;

  else

    return false;

}

//_________________________________$           

            

    canvas.addEventListener("mousemove", touches);

    canvas.addEventListener("touchmove", touches);

    canvas.addEventListener("mouseleave", () => {

        point = {    x: width/2,    y: height/2 };

    });

    window.addEventListener("resize", () => {

        width = canvas.width = window.innerWidth;

        height = canvas.height = window.innerHeight;

        point = {    x: width/2,    y: height/2 };

    });

    animate();

}

setup();};

/*

┈┈┈╲┈┈┈┈╱

 ┈┈╱    ▔╲

┈┈┃┈▇┈┈▇┈┃

╭╮┣━━━━━━┫╭╮

┃┃┃┈┈┈┈┈┈┃┃┃

╰╯┃┈┈┈┈┈┈┃╰╯

┈┈╰┓┏━━┓┏╯

┈┈┈╰╯┈┈╰╯      

😊You r always welcome 😊

The EnD

*/

