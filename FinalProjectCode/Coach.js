class Coach extends User{

    constructor(ID, name, password){
        super(ID, name, password);
        this.type = 'Coach';
    }

    getType(){
        return this.type;
    }

}