class Practice{

    constructor(name, audio){       
        this.name = name;
        this.audio = new Audio(audio);
        this.breakPoints = [];
        this.Gymnasts = [];
        this.eyePosition = 'Opened';
        this.bodyPosition = 'Sitting';
    }

    getName(){
        return this.name;
    }
    setName(name){
       this.name = name;
    }
    getAudio(){
        return this.audio;
    }
    setAudio(audio){
        return this.audio = new Audio(audio);
    }
    addGymnast(name){
        this.Gymnasts.push(name);
    }
    getGymnast(name){
        var currGymnast = lodash.filter(this.myGymnasts, { 'name': name } );
        return currGymnast;
    }
    getGymnast(){
        return this.Gymnasts;
    }
    addBreakPoint(point){
        this.breakPoints.push(point);
    }
    getBreakPoints(point){
        return this.breakPoints;
    }


}