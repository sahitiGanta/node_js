var calc=require('./cal.js')
console.log(cal.add(1,2))
console.log(cal.sub(2,1))
console.log(cal.mul(2,5))
cal.div(12,2,(err,result)=>{
    if(err)
        console.log(err)
    else
        console.log(result)
})
cal.div(12,0,(err,result)=>{
    if(err)
        console.log(err)
    else
        console.log(result)
})