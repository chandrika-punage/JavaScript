let employees=[
    {eid:101,ename:"Rahul",esal:45000},
    {eid:102,ename:"Sonia",esal:55000}
]

let createEmployee=(emp)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let db_status=true;
            //if we give false it never executes becoz .then won't get executed
            db_status===true?resolve("data inserted"):reject("Failed")
            employees.push(emp);
        
        },4000)

    })
}

let getEmployees=()=>{
    setTimeout(()=>{
        let rows=""
        for(let emp of employees){
            rows=rows+`<tr>
                        <td>${emp.eid}</td>
                        <td>${emp.ename}</td>
                        <td>${emp.esal}</td>
            </tr>`
        }

    document.getElementById("table_data").innerHTML=rows;
    },2000)

}

let execute=async()=>{
    await createEmployee({eid:103,ename:"John",esal:50000})
    getEmployees()
    
}
execute();




