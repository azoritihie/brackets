module.exports = function check(str, bracketsConfig) {

  let stack = [];
  let openChar = [];
  let closeChar = [];
  let brackets = str.split('');
    
  //Insert paired characters into different arrays
  for( let i = 0; i < bracketsConfig.length; i++) {
    openChar.push(bracketsConfig[i][0]);
    closeChar.push(bracketsConfig[i][1]);
  }
  
  for(let i=0; i < brackets.length; i++){
    if(openChar.includes(brackets[i])){
      if (closeChar.indexOf(brackets[i])===stack[stack.length-1]) {
        stack.pop()
      } else stack.push(openChar.indexOf(brackets[i]));
    }
    else if (closeChar.includes(brackets[i])){
      if(closeChar.indexOf(brackets[i]) === stack[stack.length-1]){
        stack.pop();
      } else return false;
    }
  }
  return stack.length == 0; 
}
