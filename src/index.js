/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var Spichonee1 = 0;
  var Spichonee2 = 0;
  var Spichonee3 = 0;
  var counter = 0;

  for(let i = preferences.length - 1, loveTriangle = preferences.length; i>=0; i-- , loveTriangle--) {
    Spichonee1 = preferences[i];
    Spichonee2 = preferences[Spichonee1-1];
    Spichonee3 = preferences[Spichonee2-1];
    if (loveTriangle !== Spichonee2 && loveTriangle === Spichonee3) {
      counter++;
      preferences.length--;
    } else {
      preferences.length--;
    }  
  }
  return counter;
};
