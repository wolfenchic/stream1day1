function areaOfCircle(n) {
    if(typeof(n)=="number") {
    let result = 3.1416 * (n * n);
   return Number(result.toFixed(2));
  } else {
      return "error";
  }
    
}

function squareRoot(n) {
    if(typeof(n)=="number") {
    let result = Math.sqrt(n);
    return Number(result.toFixed(2));
} else {
    return "error";
}
}

function squareMe(n) {
    if(typeof(n)=="number") {
    let result = n * n;
   return Number(result.toFixed(2));
} else {
    return "error";
}

}

function cubeMe(n) {
    if(typeof(n)=="number") {
    let result =n * n * n;
   return Number(result.toFixed(2));
} else {
    return "error";
}

}

function triangleMe(n) {
    if(typeof(n)=="number") {
    let result = (5 * 10)*2;
   return Number(result.toFixed(2));
  } else {
      return "error";
  }
}

function whatYear(n) {
    if(typeof(n)=="number") {
    let result = (2020 - 2018);
   return Number(result.toFixed(2));

      
  }
}

