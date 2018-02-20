/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(arr) {
  var len = arr.length,
       count = 0,
       i=1;
    for(i;i<=len;i++){
        var triangle = [];
        triangle.push(i);
        triangle.push(arr[i-1]);
        triangle.push(arr[arr[i-1]-1]);
        triangle.push(arr[arr[arr[i-1]-1]-1]);
        if(triangle[0]===triangle[3]&&triangle[0]!==triangle[1]&&triangle[0]!==triangle[2]&&triangle[1]!==triangle[2]&&triangle[3]!==triangle[1]&&triangle[3]!==triangle[2]){
            count++;
        }
    }
    return count/3;
};
