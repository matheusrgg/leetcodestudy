class CloudStarage {
    constructor() {
        this.files = new Map()
    }

    addFile(name, size) {
        if (!this.files.has(name)) {
            this.files.set(name, size)
            return true
        } else {
            return false
        }

    }

    deleteFile(name) {
        const result =  this.files.delete(name)
        return result
    }

    getAllFiles(storage) {

        const allFiles = storage.files

        for (const [name, size] of allFiles) {

            if (name.startsWith('/file')) {
                console.log("getAllFiles", name, size)
                return name
            }

        }
    }

    getFilesSortedBySizeAndDescendingOrder(files) {

        const filesArray = Array.from(files)

        return filesArray.sort(function (a, b) {
            //se os numeros forem igual
            if (a[1] === b[1]) {
                //decidir pela ordem alfabetics
                return a[0].localeCompare(b[0])
            }
            return b[1] - a[1]
        })
    }



    getNLargest(prefix, n) {

        const matchingFiles = [];

        const allFiles = Array.from(this.files)

        for (const [name, size] of allFiles) {

            if (name.startsWith(prefix)) {
                let file = [name, size]
                matchingFiles.push(file)
            }
        }

        const filteredItems = this.getFilesSortedBySizeAndDescendingOrder(matchingFiles)
        const slicedMatchingFiles = filteredItems.slice(0, n)
        return slicedMatchingFiles.map(function formatSliced(x) {
            return `${x[0]}(${x[1]})`
        })

    }




}

let storage = new CloudStarage();
storage.addFile('/file1.txt', 10)
storage.addFile('/file2.txt', 20)
storage.addFile('andFile2.txt', 40)


console.log("calling getAllFiles ALL THE FILES", storage.getNLargest("/file", 2))


