function sum(...result) {
  // Start coding here !
  let total = 0;
  for (let i=0; i<result.length; i++){
    total = total + result[i];
  }
  return total;
}//ข้อนี้จริงๆใช้.reduceได้เพราะต้องการหาผลรวม

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
