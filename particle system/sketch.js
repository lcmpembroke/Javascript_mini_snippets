let particles = [];
let p;

function setup() {
    createCanvas(600, 400);
    particles.fill(new Particle);
    // particles.fill()).map(p => new Particle());
}

// Called directly after setup(), the draw() function continuously executes the lines of code contained inside its block until the program is stopped
// or noLoop() is called. Note if noLoop() is called in setup(), draw() will still be executed once before stopping. 
// draw() is called automatically and should never be called explicitly. 
function draw() {
    background(0);
    // add five particles per frame
    for (let i=0; i< 5; i++) {
        let p = new Particle();
        particles.push(p);
    }

    for (let i = particles.length - 1; i >= 0 ; i--) {
        particles[i].update();
        particles[i].show();
        if (particles[i].isFinished()) {
            // remove particle - take care with splice, loop through backwards or you end up skipping one
            particles.splice(i, 1);
        }
    }

}

class Particle {
    constructor() {
        // start at botom in middle of canvas
        this.x = 300;
        this.y = 380;
        // random velocities between certain values
        this.vx = random(-1, 1); // direction left or right
        this.vy = random(-5, -1); // direction upwards; 
        this.alpha = 255; // to do with transparency of particle
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 5 // transparency reducing on each update
    }

    show() {
        noStroke(); // take out outline colour
        fill(255, this.alpha)
        ellipse(this.x,this.y,16);
    }

    isFinished() {
        return this.alpha < 0;
    }
}