function calculateTriangleProperties() {
  var s1 = parseFloat(document.getElementById('lado1').value);
  var s2 = parseFloat(document.getElementById('lado2').value);
  var s3 = parseFloat(document.getElementById('lado3').value);

  if (isNaN(s1) || isNaN(s2) || isNaN(s3)) {
    document.getElementById('data').innerHTML = 'Insira apenas números';
    return;
  }

  if (s1 <= 0 || s2 <= 0 || s3 <= 0) {
    document.getElementById('data').innerHTML =
      'Números não positivos não são válidos';
    return;
  }

  if (!isValidTriangle(s1, s2, s3)) {
    document.getElementById('data').innerHTML =
      'Os valores informados não podem formar um triâgulo. Tente novamente!';
    return;
  }

  document.getElementById('data').innerHTML = createOutput(s1, s2, s3);
}

function isValidTriangle(lado1, lado2, lado3) {
  if (
    lado1 + lado2 <= lado3 ||
    lado1 + lado3 <= lado2 ||
    lado2 + lado3 <= lado1
  )
    return false;
  else return true;
}

function getTrianglePerimeter(lado1, lado2, lado3) {
  return lado1 + lado2 + lado3;
}

function getTriangleArea(lado1, lado2, lado3) {
  var semiPermineter = getTrianglePerimeter(lado1, lado2, lado3) / 2;
  return Math.sqrt(
    semiPermineter *
      (semiPermineter - lado1) *(semiPermineter - lado2) *(semiPermineter - lado3)
  );
}
function createOutput(lado1, lado2, lado3) {
  return `Triângulos com lados ${lado1}, ${lado2}, ${lado3} <br />
  tem uma área de = ${getTriangleArea(lado1, lado2, lado3)} <br/>
  e perimetro de ${getTrianglePerimeter(lado1, lado2, lado3)}`;
}
