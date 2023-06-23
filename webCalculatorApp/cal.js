let ipStr = "";
let ipStrE = "";
function zero(){
    ipStr=ipStr.concat("0");
    ipStrE=ipStrE.concat("0");
    document.getElementById('ip').innerHTML=ipStrE;
}
function one(){
    ipStr=ipStr.concat("1");
    ipStrE=ipStrE.concat("1");
    document.getElementById('ip').innerHTML=ipStrE;
}
function two(){
    ipStr=ipStr.concat("2");
    ipStrE=ipStrE.concat("2");
    document.getElementById('ip').innerHTML=ipStrE;
}
function three(){
    ipStr=ipStr.concat("3");
    ipStrE=ipStrE.concat("3");
    document.getElementById('ip').innerHTML=ipStrE;
}
function four(){
    ipStr=ipStr.concat("4");
    ipStrE=ipStrE.concat("4");
    document.getElementById('ip').innerHTML=ipStrE;
}
function five(){
    ipStr=ipStr.concat("5");
    ipStrE=ipStrE.concat("5");
    document.getElementById('ip').innerHTML=ipStrE;
}
function six(){
    ipStr=ipStr.concat("6");
    ipStrE=ipStrE.concat("6");
    document.getElementById('ip').innerHTML=ipStrE;
}
function seven(){
    ipStr=ipStr.concat("7");
    ipStrE=ipStrE.concat("7");
    document.getElementById('ip').innerHTML=ipStrE;
}
function eight(){
    ipStr=ipStr.concat("8");
    ipStrE=ipStrE.concat("8");
    document.getElementById('ip').innerHTML=ipStrE;
}
function nine(){
    ipStr=ipStr.concat("9");
    ipStrE=ipStrE.concat("9");
    document.getElementById('ip').innerHTML=ipStrE;
}
function point(){
    ipStr=ipStr.concat(".");
    ipStrE=ipStrE.concat(".");
    document.getElementById('ip').innerHTML=ipStrE;
}
function add(){
    ipStr=ipStr.concat("+");
    ipStrE=ipStrE.concat(" + ");
    document.getElementById('ip').innerHTML=ipStrE;
}
function sub(){
    ipStr=ipStr.concat("-");
    ipStrE=ipStrE.concat(" - ");
    document.getElementById('ip').innerHTML=ipStrE;
}
function mul(){
    ipStr=ipStr.concat('*');
    ipStrE=ipStrE.concat(' x ');
    document.getElementById('ip').innerHTML=ipStrE;
}
function div(){
    ipStr=ipStr.concat('/');  
    ipStrE=ipStrE.concat(' &divide ');
    document.getElementById('ip').innerHTML=ipStrE;
}
function percent(){
    ipStr=ipStr.concat('%');
    ipStrE=ipStrE.concat(' % ');
    document.getElementById('ip').innerHTML=ipStrE;
}
function del(){
    let arr = ipStrE.split("");
    if(arr[arr.length-1]=='e'){
        arr.pop();
        arr.pop();
        arr.pop();
        arr.pop();
        arr.pop();
        arr.pop();
        arr.pop();
    }else{
        arr.pop();
    }
    ipStrE=arr.join("");
    let arr1 = ipStr.split("");
    arr1.pop();
    ipStr=arr1.join("");
    document.getElementById('ip').innerHTML=ipStrE;
}
function ac(){
    ipStrE="";
    ipStr="";
    document.getElementById('ip').innerHTML=ipStrE;
}

function equal(){
    // let num1="",num2="",i=0, result;
    // let ipArr = ipStr.split("");

    // while(ipArr[i]!='+'&&ipArr[i]!='-'&&ipArr[i]!='x'&&ipArr[i]!='&#247'&&ipArr[i]!='%'){
    //     num2=num2.concat(ipArr[i].toString());
    //     i++;
    // }
    // num1=num2;
    // let op = ipArr[i].toString();
    // num2="";
    // i++;
    // while(i<ipArr.length){
    //     num2=num2.concat(ipArr[i].toString());
    //     i++;
    // }

    // if(op=='+'){
    //     result = parseFloat(num1) + parseFloat(num2);
    // }
    // if(op=='-'){
    //     result = parseFloat(num1) - parseFloat(num2);
    // }
    // if(op=='x'){
    //     result = parseFloat(num1) * parseFloat(num2);
    // }
    // if(op=='&#247'){
    //     result = parseFloat(num1) / parseFloat(num2);
    // }
    // if(op=='%'){
    //     result = parseFloat(num1) / parseFloat(num2)*100;
    // }


    // ipStr="";
    // ipStr=result.toString();
    // document.getElementById('ip').innerHTML=ipStr;
    // parseFloat(result);
    if(ipStrE.search('%')>0){

        let num1="",num2="",i=0, result;
        let ipArr = ipStr.split("");
    
        while(ipArr[i]!='%'){
            num2=num2.concat(ipArr[i].toString());
            i++;
        }
        num1=num2;
        let op = ipArr[i].toString();
        num2="";
        i++;
        while(i<ipArr.length){
            num2=num2.concat(ipArr[i].toString());
            i++;
        }
        if(op=='%'){
            result = parseFloat(num1) / parseFloat(num2)*100;
            ipStr = result.toString();
            ipStrE = result.toString();
            document.getElementById('ip').innerHTML=ipStrE;
        }
    }

    else{

        ipStrE="";
        ipStrE=eval(ipStr);
        ipStrE=ipStrE.toString();
        document.getElementById('ip').innerHTML=ipStrE;
        ipStr=ipStrE;
    }
    document.getElementById("audio").play();


}

// function uc(){
//     document.body.classList.add('darkMode')
// }