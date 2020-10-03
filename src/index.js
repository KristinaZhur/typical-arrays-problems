
exports.min = function min (array) {
  
  if ( array == null|| array.length == 0 ){
    return 0;
  };
  let min = 0;

  for (let i = 0; i<array.length; i++){
    if (array[i]<=min){
      min = array[i];
    };
  }
  return min;
}

exports.max = function max (array) {
  
  let max =0;
  if ( array == null || array.length == 0 ){
    return 0;
  };
  for (let i = 0; i<array.length; i++){
    if (array[i]>max){
      max = array[i];
    };
  }
  return max;
}

exports.avg = function avg (array) {
  
  if ( array == null || array.length == 0){
    return 0;
  };
  let summ = 0;
  let avg =0;
  for (let i = 0; i<array.length; i++){
    summ+=array[i];
  };
  avg = summ/array.length;
  return avg;
}
