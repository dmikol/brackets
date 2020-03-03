module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let obj = {};
  bracketsConfig.forEach(function(item){
      obj[item[0]] = item[1];
  });
  str.split('').forEach(function(item){
      if(stack.length == 0){
          stack.push(item);
      }
      else{
          if(item == obj[stack[stack.length-1]]){
              stack.pop();
          }
          else{
            stack.push(item);
          }
      }
      
  });
  return stack.length == 0 ? true : false;
}
