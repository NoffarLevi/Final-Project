class AutomaticPractice extends Practice{

    constructor(name,audio){
        super(name,audio);
        this.counter = 0;
    }
    
    getCounter(){
        return this.counter;
    }
    setCounter(){
        this.counter++;
    }
}

