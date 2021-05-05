/**
 *  .toUppercCase and .toLowerCase are not allowed.
 *  Submitting kata will check for said methods and invalidate code if it exist.
 */

String.prototype.capitalize = function () {
  let firstChar = this.charCodeAt(0);
  let firstCapital = /[A-Z]/.test(this.charAt(0));
  if (firstCapital !== true && /[a-z]/.test(this[0]) === true) {
    return String.fromCharCode(firstChar - 32) + this.slice(1);
  }
  return this.split().join('');
};

console.log('hello world'.capitalize()); // 'Hello World'
console.log('today, I have a dream ... '.capitalize()); // 'Today, I have a dream ...'
console.log(
  'History is a very special subject.  what do you think?'.capitalize()
);
console.log(
  '(EsiO$y(IUPTP(ZuFGWfs6mY&PD82#D6GZ)e@JsNk(@N#jZfvbq^ DR9NTyfwpu8K$JRDb9(C#SX5UwT2$tAz6vpye&#BrFSjyXmTkyBcpEdFgA*afVtGFrFyVTSSkRg(BB6yA87^#I2IHxQEx6(kpPr$erAZKa EIkIPMSpToggpzRU2eIg%LBfOsrl^lb2PbU TTy#'.capitalize()
);
