const timer = {
    message: "Time's up",
    start() {
        setTimeout(function () {
            console.log(this.message);
        }, 1000);
    }
}

timer.start();