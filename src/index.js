module.exports = function solveEquation(equation) {
  var arr = equation.split(' ');
  	console.log(arr);
  var x1, x2, d,
  	  a = Number(arr[0]), 
  	  b = Number(arr[3] + arr[4]),
  	  c = Number(arr[7] + arr[8]);
  var D = b * b - 4 * a * c;
  
  if (D == 0) 
  	x1 = x2 = -1 * b / (2 * a);

  if (D > 0) {
  	d = Math.sqrt(D);
  	x1 = (-1 * b - d) / (2 * a);
  	x2 = (-1 * b + d) / (2 * a);
  }
  if (x1 > x2) {
  	var t = x1;
  	x1 = x2;
  	x2 = t;
  }
  x1 = Math.round(x1);
  x2 = Math.round(x2);
  var mass = [];
  mass.push(x1);
  mass.push(x2);
  return mass;
  
}
