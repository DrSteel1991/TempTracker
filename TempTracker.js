class TempTracker {
  constructor() {
    this.minMaxAvgStack = [];
    this.stack = [];
  }

  push(temp) {
    const newMinMaxAvg = { min: temp, max: temp, avg: temp, total: temp };
    if (this.minMaxAvgStack.length > 0) {
      const lastMinMaxAvg = this.minMaxAvgStack[this.minMaxAvgStack.length - 1];
      newMinMaxAvg.min = Math.min(lastMinMaxAvg.min, temp);
      newMinMaxAvg.max = Math.max(lastMinMaxAvg.max, temp);
      newMinMaxAvg.total = lastMinMaxAvg.total + temp;
      newMinMaxAvg.avg = newMinMaxAvg.total / (this.stack.length + 1);
    }
    this.minMaxAvgStack.push(newMinMaxAvg);
    this.stack.push(temp);
  }

  pop() {
    this.minMaxAvgStack.pop();
    return this.stack.pop();
  }

  getMin() {
    return this.minMaxAvgStack[this.minMaxAvgStack.length - 1].min;
  }

  getMax() {
    return this.minMaxAvgStack[this.minMaxAvgStack.length - 1].max;
  }

  getAvg() {
    return this.minMaxAvgStack[this.minMaxAvgStack.length - 1].avg;
  }
}

module.exports = TempTracker;
