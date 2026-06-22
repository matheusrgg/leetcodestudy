search(root, value){
    if(!root){
        return false
    }else{
        if(root.value ===value){
            return true
        } else if(value < root.left ){
            return this.search(root.left, value)
        }
        else{
        return this.search(root.right, value)
        }
    }
}
