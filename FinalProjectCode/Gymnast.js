class Gymnast extends User{

    constructor(ID, name, password){
        super(ID, name, password);
        this.type = 'Gymnast';
        this.myPractices = [];
    }

    getPractices(){
        return this.myPractices;
    }
    getPractice(name){
        var currPractice = lodash.filter(this.myPractices, { 'name': name } );
        return currPractice;
    }
    addPractice(name){
        return this.myPractices.push(name);
    }
    getType(){
        return this.type;
    }

}