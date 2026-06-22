//https://www.hackerrank.com/domains/tutorials/10-days-of-javascript

function timeConversion(s) {



  let hour = s.slice(0,2)
  let month = s.slice(3,5)
  let seconds =s.slice(6,8)
  const period =s.slice(8,10)
  
  let hourConversion =0
  if(period === 'PM'){
    hourConversion = Number(hour) + 12
  }


  return `${hourConversion.toString()}:${month}:${seconds}`

}

console.log(timeConversion("07:05:45PM"));