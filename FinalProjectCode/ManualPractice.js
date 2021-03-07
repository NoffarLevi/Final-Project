class ManualPractice extends Practice{

    constructor(name,audio){
        super(name,audio);

    }

    //neeed to add the clicker//
    getEyePosition(){
        return this.eyePosition;
    }
    setEyePosition(eyePosition){
        this.eyePosition = eyePosition;
    }
    getBodyPosition(){
        return this.bodyPosition;
    }
    setBodyPosition(bodyPosition){
        this.bodyPosition = bodyPosition;
    }




}