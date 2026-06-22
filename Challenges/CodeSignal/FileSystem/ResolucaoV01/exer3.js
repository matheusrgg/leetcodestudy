


class CloudStorage{
    constructor(){
        this.user = new Map();
        this.file = new Map();
        this.backups = new Map();
    }

    addFile(name,size){
        if(!this.file.has(name)){
            this.file.set(name, size)
            return "true"
        }else{
            return "false"
        }
            
    }

    getFileSize(name){
         if(this.file.has(name)){
            let sizeOfFile = this.file.get(name)
            return sizeOfFile
         }else{
            return "null"
         }
    }

    deleteFile(name){
        if(this.file.has(name)){
            this.file.delete(name)
            return getFileSize(name)
        }else{
            return "null"
         }
    }

    getNLargest(prefix, n){
        
        const matchingFiles = [];
  
        for( const [name,size] of this.file){
            if(name.startsWith(prefix)){
                matchingFiles.push([name,size])
            }
        }

        const sortedItems = matchingFiles.sort((a, b) => {
            
            if(a[1] === b[1]){
                return a[0].localeCompare(b[0]);
            }    
            return  b[1] - a[1]
        })
  

        const slicedData = matchingFiles.slice(0,n)

        return slicedData.map(function mapAll(file){
            return `${file[0]}(${file[1]})`
        })
    
    }

    addUser(userId, capacity){
        if(!this.user.has(userId)){
            this.user.set(userId, {
                capacity: Number(capacity),
                used: 0,
                files: []
                })
            return "true"
        }else{
            return "false"
        }
    }

    addFileBy(userId, name, size){

        const user = this.user.get(userId)

        if(!user || user.used + Number(size) > user.capacity || this.file.has(name)){
            return "";
        }
      
        user.files.push(name)
        user.used += Number(size),

        this.file.set(name, {
            size: Number(size),
            owner: userId
            })

       return String(user.capacity - user.used)
    }


    mergeUser(userId1, userId2){
          if(!this.user.has(userId1) || !this.user.has(userId2) || userId1 === userId2){
            return "";
          }

          const u1 = this.user.get(userId1);
          const u2 = this.user.get(userId2);

            u1.capacity += u2.capacity;
            u1.used += u2.used;

          console.log("cade a soma", u1 );


          for (const fileName of u2.files){
               
                u1.files.push(fileName)
                const file = this.file.get(fileName)
                file.owner = userId1;
          }

          console.log("u1 after merge capacity and used", u1.files);
          this.user.delete(userId2);

          const remaining = u1.capacity - u1.used;

          return String(remaining)
    }

    backupUser(userId){

        if(!this.user.has(userId)){
            return ""
        }

        const user = this.user.get(userId)
        
        const filesBackUp = [];

        for(const fileName of user.files){
            const file = this.file.get(fileName);

            filesBackUp.push({
                name:fileName,
                size:file.size
            })
        }

        this.backups.set(userId,{
            files : filesBackUp
        })

        return filesBackUp.length
    }

    restoreUser(userId){

        if(!this.user.has(userId)){
            return ""
        }
        console.log("passe");

        if(!this.backups.has(userId)){
            return 0
        }

        const user = this.user.get(userId);


        for( const fileName of user.files){
             this.file.delete(fileName)
        }
        user.used =0 
        user.files = []


        console.log("cade o file", user);


        const backup = this.backups.get(userId)

        for(const file of backup.files){

        console.log("cade o file", file);
            user.files.push(file.name)
              this.file.set(file.name, {
            size:file.size,
            owner: userId
            })

            user.used += file.size;
        }

        return String(backup.files.length);

        
    }

}



const cloudStorage = new CloudStorage();

cloudStorage.addFile("file1.txt", 20)
cloudStorage.addFile("file2.txt", 40)
cloudStorage.addFile("file0.txt", 10)
cloudStorage.addFile("andFile0.txt", 20)

//console.log("primeiro teste 2", cloudStorage.getNLargest("file", 2));
cloudStorage.addUser("user1", "200")
cloudStorage.addUser("user2", "300")
cloudStorage.addUser("user3", "500")


cloudStorage.addFileBy("user1", "/a.txt", "50")
cloudStorage.addFileBy("user1", "/a.txt", "60")
cloudStorage.addFileBy("user2", "/b.txt", "30")
cloudStorage.addFileBy("user2", "/c.txt", "30")
//"merge user cade", cloudStorage.mergeUser("user1", "user2"), "70")
 
cloudStorage.backupUser("user1")

cloudStorage.addFileBy("user1", "/d.txt", "40")
console.log("começando o restore", cloudStorage.restoreUser("user1")); 