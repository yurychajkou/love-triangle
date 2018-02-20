/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var arr = preferences;
  var sumAngle = 0;
    for (var i =0; i <= arr.length-1; i++) {
        var firstAngel = arr[i] -1;
    var secAngel = arr[firstAngel] -1;
    var thirdAngel = arr[secAngel] -1;
        if (thirdAngel == i) {
        sumAngle++}
        }
        return(Math.trunc(sumAngle/3))
  } 
