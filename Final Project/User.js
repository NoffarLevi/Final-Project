class User{
    
    constructor(ID, name, password){
        this.ID = ID;
        this.name = name;
        this.password = password;
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
 
}