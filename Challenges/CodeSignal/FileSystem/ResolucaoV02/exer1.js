


class CloudStorage{
    constructor(){
        this.file = new Map()
        this.user = new Map()
        this.backUp = new Map()
    }

    addFile(name, size){
        if(!this.file.has(name)){
              this.file.set(name, size)
              return "true"
        }else{
            return "false"
        }
    }

    getFileSize(name){
        if(this.file.has(name)){
            return this.file.get(name)
        }else{
            return ""
        }
    }

    deleteFile(name){
        if(this.file.has(name)){
            const fileSize = this.file.get(name)
            this.file.delete(name)
            return fileSize
        }else{
            return "";
        }

    }

    getNLargest(prefix, n){

        const matchingFiles = []

        for( const [name, size] of this.file){
            if(name.startsWith(prefix)){
                matchingFiles.push([name,size])
            }
        }

  

        return matchingFiles.sort(function(a,b){
            if(a[0]=== b[0]){
                return a[1].localeCompare(b[1])
            }
            return b[1]-a[1]

        })
        .slice(0,n)
        .map(a=> `${a[0]}(${a[1]})`)
    }



    //----------- Agora começa a dar uma esquetanda hahahahah BORAA POURRA
    //------- POURRA QUE MERDA NAO LEMBRO AGORA COMO FICA AQUI SE ADDICONO NO MAP DO USER OU FILES


    addUser(userId, capacity){
        if (this.user.has(userId)) return "false";

        this.user.set(userId, {
            capacity: Number(capacity),
            usedCapacity: 0,
            files: []
        });

        return "true";

    }

    addFileBy(userId, name, size){

         const user = this.user.get(userId)
         const fileSize = Number(size);
         
        if (!user) return "";
        if (this.file.has(name)) return "";
  
        if (user.usedCapacity + fileSize > user.capacity) return "";

         this.file.set(name, {
            size: fileSize,
            owner: userId
        })

        user.files.push(name);
        user.usedCapacity += fileSize;

        return String(user.capacity - user.usedCapacity);


    }

    //tem alguma coisa errada aqui pq tá vindo 170160, bom vou seguir e depois volto pra estudar

    mergeUser(userId1, userId2){

        if (userId1 === userId2) return "";

        const user1 = this.user.get(userId1)
        const user2 = this.user.get(userId2)

        if (!user1 || !user2) return "";

        for( const fileName of user2.files){
            const file = this.file.get(fileName);

            if(file){
                file.owner = userId1
            }
           
            user1.files.push(fileName)
        }

        user1.usedCapacity += user2.usedCapacity
        user1.capacity += user2.capacity

        this.user.delete(userId2)

        return String(user1.capacity - user1.usedCapacity);
    }


    //Beleza, bnora lá nivel 4
    //Lembro que o spread é muito importante nessa hora

    backupUser(userId){

        const user = this.user.get(userId)
        if(!user) return false

        const filesBackup = []

        for(const fileName of user.files){
            const file = this.file.get(fileName)
             filesBackup.push({
                name: fileName,
                size: file.fileSize

             })   
        }
        this.backUp.set(userId, {
            files : filesBackup
        })

        return filesBackup.length

    }

    restoreUser(userId){

    }
}   


const cloudStorage = new CloudStorage();


cloudStorage.addFile("/dir1/dir2/file.txt", 10)
cloudStorage.addFile("/direee/dir2/file.txt", 5)


cloudStorage.getNLargest("/dir", 2)


cloudStorage.addUser("user1", "200")

cloudStorage.addUser("user2", "200")

cloudStorage.addFileBy("user1", "/dir/file.med", "30")
cloudStorage.addFileBy("user2", "/file333.med", "40")
cloudStorage.addFileBy("user2", "/file4444.med", "80")

//console.log(cloudStorage.mergeUser("user1","user2"))

console.log(cloudStorage.backupUser("user1"))