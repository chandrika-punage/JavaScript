let goGoa=(success,failure)=>{
    let acc_Bal=5000;
    acc_Bal>20000?success("Go to Goa"):failure("Next week")

}
goGoa((response)=>{console.log(response)} ,(err)=>{console.log(err)})