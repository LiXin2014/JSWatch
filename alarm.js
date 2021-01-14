class Alarm {
    constructor() {
        this.audioFile = new Audio("./sounds/happy_dreams.mp3");
    }

    play() {
        if (this.audioFile.src.indexOf("sounds") === -1) {
            this.audioFile = new Audio("./sounds/happy_dreams.mp3");
        }
        this.audioFile.play();
    }

    stop() {
        // Not sure why the pause does not work, have to set src to empty string to make it work.
        this.audioFile.pause();
        // when setting src to empty string, src becomes "http://127.0.0.1:8080/index.html" rather than empty string..
        this.audioFile.src = "";
    }
}

var alarm = new Alarm();
export default alarm;