//////////////////////////////////ENCRIPTION////////////////////////////////////

let key;
let cipherMatrix = new Array(26);

let encMessage = [];
let finalEncMessage ="";
let keyCompare;
let message;
let messageLength;

let keyDecoded;
let messageDecoded;

let keyDecodedCompare;
let decodedMessage = [];
let finalDecodedMessage = "";
let messageDecodedLength;

function input(){
  for (let i = 0; i < 26; i++) {
    cipherMatrix[i] = new Array(26);
  }

  for(let i=0;i<26;i++){
    for(let j=0;j<26;j++){
      if(i+j<26){
      cipherMatrix[i][j]=i+j;
    }
    else{
      cipherMatrix[i][j]=(i+j)-26;
    }
    }
  }

  var x = document.getElementById("message").value;
  var  y = document.getElementById("key").value;
  key = y.toUpperCase();
  let rep = key;
  if(x!=null && y!=null){
  message = x.toUpperCase();
  messageLength = message.length;
  if(messageLength>key.length){
    for(let i=2;messageLength-rep.length>=0;i++){
      rep = key.repeat(i);
    }
  }
  keyCompare = rep.slice(0,messageLength);
  for(let k=0;k<message.length;k++){
    if(message.charCodeAt(k) == 32){
      encMessage[k]=String.fromCharCode(32);
    }
    else{
    encMessage[k]=String.fromCharCode(cipherMatrix[message.charCodeAt(k)-65][keyCompare.charCodeAt(k)-65]+65);
  }
    finalEncMessage+=encMessage[k];
  }

}
document.getElementById("out").innerHTML="CIPHERED MESSAGE :<br>"+finalEncMessage;
finalEncMessage="";
}

//////////////////////////////////DECRIPTION////////////////////////////////////


function inputDecoded(){

  for (let i = 0; i < 26; i++) {
    cipherMatrix[i] = new Array(26);
  }

  for(let i=0;i<26;i++){
    for(let j=0;j<26;j++){
      if(i+j<26){
      cipherMatrix[i][j]=i+j;
    }
    else{
      cipherMatrix[i][j]=(i+j)-26;
    }
    }
  }

  var toMessage = document.getElementById("messageDec").value;
  var toKey = document.getElementById("keyDec").value;
  keyDecoded = toKey.toUpperCase();
  let repKeyDecoded = keyDecoded;

  if(toMessage!=null && toKey!=null){
    messageDecoded = toMessage.toUpperCase();
    messageDecodedLength = toMessage.length;
    if(messageDecodedLength>repKeyDecoded.length){
      for(let z=2;messageDecodedLength-repKeyDecoded.length>=0;z++){
        repKeyDecoded = keyDecoded.repeat(z);
      }
    }
    keyDecodedCompare = repKeyDecoded.slice(0,messageDecodedLength);
    for(let i=0;i<messageDecodedLength;i++){
      if(messageDecoded.charCodeAt(i) == 32){
        decodedMessage[i]=String.fromCharCode(32);
        finalDecodedMessage+=decodedMessage[i];
      }
      else{
        for(let j=0;j<26;j++){
          if(messageDecoded.charCodeAt(i)-65 == cipherMatrix[keyDecodedCompare.charCodeAt(i)-65][j]){
            decodedMessage[i]=String.fromCharCode(j+65);
            finalDecodedMessage+=decodedMessage[i];
          }
        }
      }
    }

  }
  document.getElementById("outDecoded").innerHTML = "DECIPHERED MESSAGE :<br>"+finalDecodedMessage;
  finalDecodedMessage="";
}
