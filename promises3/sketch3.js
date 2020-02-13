function setup() {
    noCanvas();
    // setTimeout(sayHello, 1000); // old way - want to write function using promise...
    delay(1000) // don't have a callback anymore, handle what to do with the "then"
        .then(() => createP('hello'))
        .catch(err => console.error(err));

    delay('test not a number') // don't have a callback anymore, handle what to do with the "then"
        .then(() => createP('hello'))
        .catch(err => console.error(err));

    delayES8(1000) // don't have a callback anymore, handle what to do with the "then"
        .then(() => createP('hello from ES8 call'))
        .catch(err => console.error(err));

}

async function delayES8(time) {
    // if a fn returns a promise (e.g. the delay function we wrote!), i can use keyword await, means just wait for promise to resolve
    // await only valid in an async function
    // makes more sense when doing multiple things...sequence a bunch of steps that are asynchronous so you don't have to chain
    // a whole load of promises with .then, .then etc. catch this, catch that, can do it all in one function and that funciton will return a promise
    await delay(time);
    return;
}

function delay(time) {
    // want delay function to return a new promise, and needs to provide pathways for how to resolve and reject the promise
    return new Promise((resolve, reject) => {
        if (isNaN(time)) {
            reject(new Error('delay requires a valid number'));
        } else {
            setTimeout(resolve, time) // after this amount of time, resolve the promise (i.e. handle with then)
            //setTimeout(() => resolve(),time) // if you want to do more, can add more in...b
        }

    });
}

// function sayHello() {
//     createP('hello');
// }