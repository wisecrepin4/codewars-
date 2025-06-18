function validateHello(greetings) {
  let res = false;
  let greet = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"];
  for (let i = 0; i < greet.length; i++) {
    res = greetings.toLowerCase().includes(greet[i]);
    if (res == true) {
      break;
    }
  }

  return res;
}
//this function returns whether we have done a greeting or not in a message
