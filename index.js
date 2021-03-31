const TempTracker = require('./TempTracker');

const tt = new TempTracker();

tt.push(10);
tt.push(11);
tt.push(5);
tt.push(6);
tt.push(45);
tt.push(40);

console.log(tt.stack);
console.log(tt.getMin());
console.log(tt.getMax());
console.log(tt.getAvg());
