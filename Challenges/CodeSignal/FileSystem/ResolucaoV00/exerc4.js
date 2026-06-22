

//BackUps



class UserStarage{
    constructor(){
        this.users = new Map();
        this.backups = new Map();
     
    }
    addUser(userId, capacity) {
        if(!this.users.has(userId)){
           this.users.set(userId,{
            capacity: capacity,
            used: 0,
            files: []
           } )

            return true
        }else{
            return false
        }
        
    }

     getUsers(userId){
        if(!this.users.has(userId)){
            return null
        }
        return this.users.get(userId)
    }

    addFileForUser(userId, fileName, size){

        this.checkIfUserAlreadyExists(userId)

        console.log("pow pelo visto isso não funcionou",this.checkIfFileAlreadyExists(userId,fileName))
     
        const user = this.users.get(userId);

        user.files.push(fileName);
        user.used += size;

        return true
    
            
    }
    
        
    checkIfUserAlreadyExists(userId){
        if(!this.users.has(userId)){
            throw new Error(`User ${userId} does not exist`);
        }
    }


    checkIfFileAlreadyExists(userId, files){
        this.checkIfUserAlreadyExists(userId)
        const user = this.users.get(userId);

        if(user.files.includes(files)){
            throw new Error(`File ${files} already exist`);
        }
    }

    backupUser(userId) {
          this.checkIfUserAlreadyExists(userId);
          const user = this.users.get(userId);
          const filesCopy = [...user.files];

            this.backups.set(userId,{
            files: filesCopy
           } )

    }
    
}


let users = new UserStarage()

users.addUser("matheus", 100 )
users.backupUser("matheus");

users.addFileForUser("matheus", "/file5.txt", 5);

console.log(users.getUsers("matheus").files);
console.log(users.backups.get("matheus"));