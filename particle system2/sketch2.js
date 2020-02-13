let particles;
let p;

function setup() {
    createCanvas(600, 400);
    // particles is an array of 100 elements, and each element contains a new particle object
    particles = Array(100).fill().map(p => new Particle());
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

    for (let particle of particles) {
        particle.update();
        particle.show();
    }

    // sort brighter ones to the forefront...a,b are elements of the array
    //particles.sort((a,b) => a.color - b.color);

    // function keep(p) { return !p.isFinished();}  ---- only keep the particles that are not finished! 
    // recall: filter() returns a new array, therefore need to assign the result of the filter to the particles array...
    particles = particles.filter(p => !p.isFinished());

    // want to find the centre point of group of particles (CENTROID) --> can use reduce() for this
    // reduce executes a provided function for each value ofthe array from index 0 onwards over whole array, excluding undefined array elements
    
    // // calc centre x and y centre points
    // let sumX = particles.reduce((accumulatorX,p) => accumulatorX + p.x, 0) // initialise first value to zero otherwise first value is a particle, not it's x value
    // let sumY = particles.reduce((accumulatorY,p) => accumulatorY + p.y, 0) // initialise first value to zero otherwise first value is a particle, not it's y value

    // let centreX = sumX / particles.length;
    // let centreY = sumY / particles.length;

    // // code below will show the centroid as red filled circle!
    // fill(255,0,0);
    // ellipse(centreX,centreY,24,24);
}

class Particle {
    constructor() {
        // start at botom in middle of canvas
        this.x = 300;
        this.y = 380;
        // random velocities between certain values
        this.vx = random(-1, 1); // direction left or right
        this.vy = random(-5, -1); // direction upwards; 
        this.color = random(256);
        this.alpha = 255; // to do with transparency of particle
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 5 // transparency reducing on each update
    }

    show() {
        noStroke(); // take out outline colour
        fill(this.color)
        ellipse(this.x,this.y,16);
    }

    isFinished() {
        return this.alpha < 0;
    }
}