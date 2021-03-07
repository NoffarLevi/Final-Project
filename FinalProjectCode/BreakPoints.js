class breakPoints{

    constructor(time, tone){
        this.time = time;
        this.tone = new Audio(tone);
    }

    getTime(){
        return this.time;
    }
    setTime(time){
        this.time = time;
    }
    getTone(){
        return this.tone;
    }
    setTone(tone){
        this.tone = new Audio(tone);
    }

}