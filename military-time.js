
//Input
//07:05:45PM
//12:01:00PM
//12:01:00AM

//outPut
//19:05:45
//12:01:00
//00:01:00



function extractHours(horas){
  
    const hora = horas.slice(0,2)
    const minuto = horas.slice(3,5)
    const segundo = horas.slice(6,8)
    const periodo = horas.slice(8,10)

    if(periodo == "PM"){
        if(hora == '12'){
            console.log("entrei")
             const novoHorario = "12:" + minuto + ":" + segundo;
             return novoHorario
        }else{
        console.log("que valor é", typeof(Number(hora)))
        const horaMilitar = Number(hora) + 12
        const novoHorario = horaMilitar + ":" + minuto + ":" + segundo;
        return novoHorario
        }
    
    }else{
        if(periodo == "AM"){
        
           
        
        if(hora == '12'){
            console.log("entrei AM")
            const novoHorario = "00"  + ":" + minuto + ":" + segundo;
            return novoHorario;
        }else{
            console.log("estou aqui")
            const novoHorario =  hora + ":" + minuto + ":" + segundo;
            return novoHorario
        }
     }
    }

}

console.log(extractHours("06:40:03AM"))