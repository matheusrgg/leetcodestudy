

//Salvar um User



class UserStarage{
    constructor(){
        this.users = new Map();
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
        this.checkIfFileAlreadyExists(userId,fileName)
        this.checkSizeCapacity(userId, size)
     
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

    checkSizeCapacity(userId,size){
         const user = this.users.get(userId);
         if((user.used + size) >  user.capacity){
             throw new Error(`File ${user.used + size} surpass capacity ${user.capacity}`);
         }
       
        
    }
    
}


let users = new UserStarage()

users.addUser("matheus", 100 )



console.log("testando o método -------- 2", users.addFileForUser("matheus","/file2.txt", 30))
console.log("testando o método -------- 2", users.addFileForUser("matheus","/file3.txt", 30))
//console.log("testando o método -------- 2", users.addFileForUser("matheus","/file4.txt", 100))
console.log("testando o método -------- 99", users.getUsers("matheus").used)
console.log("testando o método", users.getUsers("matheus"))
