


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
      if(this.user.has(userId)) return "false";

      this.user.set(userId,{
        capacity: Number(capacity),
        used:0,
        files:[]
      })

      return "true"

    }

    addFileBy(userId, name, size){
      
        if(!this.user.has(userId)) return "false";
        
        const user = this.user.get(userId)

        const fileSize = Number(size)

        const currentCapacity = user.capacity - user.used
        const supposedCapacity = fileSize

        if(currentCapacity > supposedCapacity){
            user.used += fileSize
            user.files.push([name,fileSize])
        }

        this.file.set(name, {
            size: Number(size),
            owner: userId
        })

        console.log(user)

         return String(user.capacity - user.used)
    }

    //tem alguma coisa errada aqui pq tá vindo 170160, bom vou seguir e depois volto pra estudar

    mergeUser(userId1, userId2){


        const account1 = this.user.get(userId1)
        const account2 = this.user.get(userId2)


        for( const fileName of account2.files){

            console.log("dentro do loop. ser aque mando o push", fileName)
    

            account1.files.push(fileName)
            this.file.set(fileName,{
                size: fileName.size,
                owner:this.userId1
            })
        }

        account1.capacity += account2.capacity
        account1.used += account2.used

        this.user.delete(userId2)

        return String(account1.capacity -account1.used)
      
    }

}   


const cloudStorage = new CloudStorage();


cloudStorage.addFile("/dir1/dir2/file.txt", 10)
cloudStorage.addFile("/direee/dir2/file.txt", 5)


cloudStorage.getNLargest("/dir", 2)


cloudStorage.addUser("user1", "200")

cloudStorage.addUser("user2", "200")

//cloudStorage.addFileBy("user1", "/dir/file.med", "30")
cloudStorage.addFileBy("user2", "/file333.med", "40")

console.log(cloudStorage.addFileBy("user2", "/file4444.med", "80"))

console.log(cloudStorage.mergeUser("user1","user2"))
