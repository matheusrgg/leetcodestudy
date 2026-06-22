


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
        
        const matchingFiles= []

       // primeiro prefixo
       for(const [name, size] of this.file){
            if(name.startsWith(prefix)){
                matchingFiles.push([name,size])
            }
       }

       matchingFiles.sort(function(a,b){
        if (a[1] === b[1]) {
                return a[0].localeCompare(b[0]);
                }

                return b[1] - a[1];
       })

       const slicedFile = matchingFiles.slice(0,n)

       return slicedFile.map((file)=>{
            return `${file[0]}(${file[1]})`;
       })
    
    }

}



const cloudStorage = new CloudStorage();

cloudStorage.addFile("file1.txt", 20)
cloudStorage.addFile("file2.txt", 40)
cloudStorage.addFile("file0.txt", 10)
cloudStorage.addFile("andFile0.txt", 20)

console.log("primeiro teste", cloudStorage.getNLargest("file", 2));
