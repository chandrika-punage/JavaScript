
// let changeColor1=()=>{          //To Check weather the click is working or not...console nd try
//     console.log("helllo")
//     alert("testtt")
// }


let changeColor1=()=>{
    let tag_Ref=document.getElementById('btn1');
    console.log(tag_Ref)
    //document.getElementById('btn1').innerHTML="gm"
    document.getElementById('btn').style.backgroundColor="blue"

}


// function changeColor1(){
//     document.getElementById('btn1').innerHTML='GM'
//     document.getElementById('btn1').style.backgroundColor='blue'
// }


let changeColor2=()=>{
    // let tag_Ref=document.getElementsByTagName('button')[1] //(using index property)
    // console.log(tag_Ref)

    document.getElementsByTagName('button')[1].style.backgroundColor="yellow"

}

let changeCase=()=>{
    let name=document.getElementsByClassName('blurEx').value;
    document.getElementsByClassName('blurEx').value=name.toupperCase();
}