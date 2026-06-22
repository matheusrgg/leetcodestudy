
    checkIfUserAlreadyExists(userId){
        if(!this.users.has(userId)){
            throw new Error(`User ${userId} does not exist`);
        }
        //return this.users.has(userId);
    }

     checkIfFileAlreadyExists(userId, files){
    
        this.checkIfUserAlreadyExists(userId)
        const user = this.users.get(userId);
        return user.files.includes(files);
    }

    

    checkSizeCapacity(userId,size){
        if (!this.checkIfUserAlreadyExists(userId)) {
            return null;
        }
         const user = this.users.get(userId);
         console.log("checkSizeCapacity", user)
         if((user.used + size) >  user.capacity){
            return false
         }else{
            return true
         }
       
        
    }