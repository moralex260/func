Math.sqrt();
document.write('розвязування квадратного рівняння  ax2+bx+c=0');

const a = Number(prompt('введіть число а'));

const b = Number(prompt('введіть число b'));
const c = Number(prompt('введіть число c'));
document.write('<br> ви ввели таки числа:<br>a= ' + a, '<br>b=' + b, '<br>c=' + c);

function solveQuadr(a, b, c) {
  let x1, x2;
  const sqrd = Math.sqrt(d);
 let x1 =Number( (-b + sqrd) / (2 * a));
 let x2 =Number ((-b - sqrd) / (2 * a));
  const d = disc(a, b, c);
  const sqrd = Math.sqrt(d);
  if (d === 0) {
    return 'x1=' + x1;

  }
  else
  if (d > 0) {
    return 'x1=' + x1 + ',x2=' + x2;
  }
  else
    prn('не має розвязків');

}

function disc(a, b, c) {
  const d = disc(a, b, c);
  return d = b * b - 4 * a * c
 
  
  

}
const result = solveQuadr(a,b,c);

function prn(val) {
  document.write('<br>' + val);

prn(result);

document.write('відповідь' +result);
}