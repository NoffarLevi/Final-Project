class User{
    
    constructor(ID, name, password,type){
        this.ID = ID;
        this.name = name;
        this.password = password;
        this.type = type;
    }

    getID(){
        return this.ID;
    }
    setID(ID){
        this.ID = ID;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getPassword(){
        return this.password;
    }
    setPassword(password){
        this.password = password;
    }
    getType(){
        return this.type;
    }
    setType(type){
         this.type = type;
    }
 
}