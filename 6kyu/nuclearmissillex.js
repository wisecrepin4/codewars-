function launchAll(launchMissile) {
  for (var i = 0; i < 5; i++) {
    setTimeout(function () {
      launchMissile(i).bind(null, i);
    }, i * 1000);
  }
}
//or else we can turn the var to let to change the hoisting character
