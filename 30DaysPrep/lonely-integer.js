



function lonelyinteger(a){
    console.log(a);

    a.filter((item)=>{
        //preciso pegar um item e ver se ele é igual o outro
        return a.indexOf(item) === a.lastIndexOf(item)
    })
}



const a = [1,2,3,4,3,2,1]

lonelyinteger(a)