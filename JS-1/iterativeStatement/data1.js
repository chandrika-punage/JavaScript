//iterate employees array
//constructor tr elements
//update table body

let employees=[{"eid":1,"ename":"Enriqueta","gender":"Polygender"},
{"eid":2,"ename":"Jackie","gender":"Male"},
{"eid":3,"ename":"Franciska","gender":"Female"},
{"eid":4,"ename":"Seana","gender":"Female"},
{"eid":5,"ename":"Ashlan","gender":"Bigender"},
{"eid":6,"ename":"Rosemaria","gender":"Female"},
{"eid":7,"ename":"Morly","gender":"Male"},
{"eid":8,"ename":"Valentina","gender":"Female"},
{"eid":9,"ename":"Halsy","gender":"Male"},
{"eid":10,"ename":"Malachi","gender":"Male"},
{"eid":11,"ename":"Bekki","gender":"Female"},
{"eid":12,"ename":"Reggi","gender":"Female"},
{"eid":13,"ename":"Lucian","gender":"Male"},
{"eid":14,"ename":"Elke","gender":"Female"},
{"eid":15,"ename":"Ignatius","gender":"Male"},
{"eid":16,"ename":"Madel","gender":"Non-binary"},
{"eid":17,"ename":"Gottfried","gender":"Male"},
{"eid":18,"ename":"Belle","gender":"Bigender"},
{"eid":19,"ename":"Arin","gender":"Male"},
{"eid":20,"ename":"Gardener","gender":"Male"},
{"eid":21,"ename":"Stanley","gender":"Male"},
{"eid":22,"ename":"Joellen","gender":"Female"},
{"eid":23,"ename":"Sam","gender":"Male"},
{"eid":24,"ename":"Fredek","gender":"Male"},
{"eid":25,"ename":"Bobbette","gender":"Female"},
{"eid":26,"ename":"Sybilla","gender":"Polygender"},
{"eid":27,"ename":"Agna","gender":"Female"},
{"eid":28,"ename":"Fitz","gender":"Male"},
{"eid":29,"ename":"Valentia","gender":"Female"},
{"eid":30,"ename":"Massimiliano","gender":"Male"},
{"eid":31,"ename":"Dana","gender":"Genderfluid"},
{"eid":32,"ename":"Carlin","gender":"Male"},
{"eid":33,"ename":"Estelle","gender":"Female"},
{"eid":34,"ename":"Richart","gender":"Male"},
{"eid":35,"ename":"Jessy","gender":"Female"},
{"eid":36,"ename":"Steffen","gender":"Male"},
{"eid":37,"ename":"Ingunna","gender":"Female"},
{"eid":38,"ename":"Simone","gender":"Female"},
{"eid":39,"ename":"Karoline","gender":"Female"},
{"eid":40,"ename":"Rafaelita","gender":"Female"},
{"eid":41,"ename":"Lewie","gender":"Male"},
{"eid":42,"ename":"Catharina","gender":"Female"},
{"eid":43,"ename":"Penelopa","gender":"Female"},
{"eid":44,"ename":"Cyndie","gender":"Female"},
{"eid":45,"ename":"Albertina","gender":"Female"},
{"eid":46,"ename":"Nevile","gender":"Male"},
{"eid":47,"ename":"Lock","gender":"Male"},
{"eid":48,"ename":"Bernarr","gender":"Male"},
{"eid":49,"ename":"Mylo","gender":"Male"},
{"eid":50,"ename":"Riannon","gender":"Female"},
{"eid":51,"ename":"Rozella","gender":"Female"},
{"eid":52,"ename":"Neils","gender":"Male"},
{"eid":53,"ename":"Francesco","gender":"Male"},
{"eid":54,"ename":"Ximenez","gender":"Male"},
{"eid":55,"ename":"Roshelle","gender":"Agender"},
{"eid":56,"ename":"Mateo","gender":"Male"},
{"eid":57,"ename":"Glendon","gender":"Bigender"},
{"eid":58,"ename":"Kip","gender":"Female"},
{"eid":59,"ename":"Emyle","gender":"Female"},
{"eid":60,"ename":"Else","gender":"Female"},
{"eid":61,"ename":"Ely","gender":"Male"},
{"eid":62,"ename":"Ellynn","gender":"Female"},
{"eid":63,"ename":"Hadrian","gender":"Bigender"},
{"eid":64,"ename":"Gerhard","gender":"Male"},
{"eid":65,"ename":"Inigo","gender":"Agender"},
{"eid":66,"ename":"Rory","gender":"Male"},
{"eid":67,"ename":"Erskine","gender":"Genderfluid"},
{"eid":68,"ename":"Sutherlan","gender":"Male"},
{"eid":69,"ename":"Joelly","gender":"Genderfluid"},
{"eid":70,"ename":"Lanae","gender":"Female"},
{"eid":71,"ename":"Sylvia","gender":"Female"},
{"eid":72,"ename":"Clemmie","gender":"Male"},
{"eid":73,"ename":"Calley","gender":"Female"},
{"eid":74,"ename":"Babs","gender":"Female"},
{"eid":75,"ename":"Merilyn","gender":"Female"},
{"eid":76,"ename":"Myron","gender":"Agender"},
{"eid":77,"ename":"Shanie","gender":"Female"},
{"eid":78,"ename":"Amory","gender":"Male"},
{"eid":79,"ename":"Byrom","gender":"Male"},
{"eid":80,"ename":"Karel","gender":"Male"},
{"eid":81,"ename":"Fabiano","gender":"Male"},
{"eid":82,"ename":"Brew","gender":"Male"},
{"eid":83,"ename":"Maryann","gender":"Female"},
{"eid":84,"ename":"Vincenty","gender":"Male"},
{"eid":85,"ename":"Emelina","gender":"Female"},
{"eid":86,"ename":"Yovonnda","gender":"Female"},
{"eid":87,"ename":"Rebeka","gender":"Female"},
{"eid":88,"ename":"Justino","gender":"Male"},
{"eid":89,"ename":"Tori","gender":"Female"},
{"eid":90,"ename":"Haroun","gender":"Male"},
{"eid":91,"ename":"Alexa","gender":"Female"},
{"eid":92,"ename":"Eleanore","gender":"Female"},
{"eid":93,"ename":"Annetta","gender":"Genderqueer"},
{"eid":94,"ename":"Gerianne","gender":"Female"},
{"eid":95,"ename":"Alfredo","gender":"Genderfluid"},
{"eid":96,"ename":"Lorettalorna","gender":"Female"},
{"eid":97,"ename":"Dannel","gender":"Polygender"},
{"eid":98,"ename":"Judah","gender":"Male"},
{"eid":99,"ename":"Jordon","gender":"Male"},
{"eid":100,"ename":"Bridgette","gender":"Female"}]


// `(back tick) using this becoz we r writing html in javascript

let display_Emp_Data=()=>{
    let rows="";
    for(let emp of employees){
        rows=rows+`<tr>                         
                    <td>${emp.eid}</td>
                    <td>${emp.ename}</td>
                    <td>${emp.gender}</td>
                   </tr>`
    }    

    document.getElementsByTagName('tbody')[0].innerHTML=rows
    //document.getElementsByTagName('tbody')[0].innerHTML="GM"
}




