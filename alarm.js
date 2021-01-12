class Alarm {
    constructor() {
        this.audioFile = new Audio("./sounds/happy_dreams.mp3");
    }

    play(){
        this.audioFile.play();
    }
}

var alarm = new Alarm();
export default alarm;