export function validateEmail(email){
  var re = /\S+@\S+/;
    return re.test(email);
}

export function validateMessage(message){
  if(message.length > 5){
    return true;
  } else {
    return false;
  }
}
