





class CloudStarage{
    constructor(){
        this.files = new Map();
    }
    addFile(name, size) {
        if(!this.files.has(name)){
            this.files.set(name, size)
            return true
        }else{
            return false
        }
        
    }

    getFileSize(name){
        if(!this.files.has(name)){
            return null
        }
        return this.files.get(name)
    }

    getAllFiles(storage){

        const allFiles = storage.files

        for(const [name, size] of allFiles){

            if(name.startsWith('/file')){
                console.log("getAllFiles", name, size)
               return name
            }
          
        }
    }

    deleteFile(name){
        if(this.files.has(name)){
            const fileSize = this.files.get(name)
            this.files.delete(name)
            return fileSize
          
        }else{
            return null
        }
        
    }

}



let storage = new CloudStarage()
storage.addFile('/file1.txt', 10)
storage.addFile('/file2.txt', 20)

console.log(storage.files)
console.log("Get Files",storage.getFileSize('/file1.txt'));
console.log("calling getAllFiles", storage.getAllFiles(storage) )

//console.log(storage.deleteFile('/file1.txt'))
//console.log(storage.getFileSize('/file2.txt'));