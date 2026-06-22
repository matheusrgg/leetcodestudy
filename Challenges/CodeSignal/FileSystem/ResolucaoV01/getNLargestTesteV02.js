


class CloudStorage{
    constructor(){
        this.file = new Map();
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

        const matchingFiles = []

        for( const [file,size] of this.file){

            if(file.startsWith(prefix)){
                matchingFiles.push([file,size])
            }
        }

        return matchingFiles
        .sort((a,b) => b[1]-a[1])
        .slice(0,n)
        .map(a=>`${a[0]}(${a[1]})` )
    
    }

}



const cloudStorage = new CloudStorage();

cloudStorage.addFile("file1.txt", 20)
cloudStorage.addFile("file2.txt", 40)
cloudStorage.addFile("file0.txt", 10)
cloudStorage.addFile("andFile0.txt", 20)

console.log("primeiro teste", cloudStorage.getNLargest("file", 2));
