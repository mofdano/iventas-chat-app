function isValidEmail(email) {
  // eslint-disable-next-line no-useless-escape
  let rgx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return rgx.test(email);
}

function isValidPassword(password) {
  return password.length >= 8;
}


export{ isValidEmail, isValidPassword };
