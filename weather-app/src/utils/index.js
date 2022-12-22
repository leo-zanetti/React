function generateToken() {
  //edit the token allowed characters
  let a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split('');
  let b = [];
  for (var i = 0; i < 31; i++) {
    let j = (Math.random() * (a.length - 1)).toFixed(0);
    b[i] = a[j];
  }
  return b.join('');
}

export default generateToken;
