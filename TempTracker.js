class TempTracker {
  constructor() {
    this.minMaxAvgStack = [];
    this.stack = [];
  }

  push(temp) {
    const newMinMaxAvg = { min: temp, max: temp, avg: temp };
    if (this.minMaxAvgStack.length) {
      const lastMinMaxAvg = this.minMaxAvgStack[this.minMaxAvgStack.length - 1];
      newMinMaxAvg.min = Math.min(lastMinMaxAvg.min, temp);
      newMinMaxAvg.max = Math.max(lastMinMaxAvg.min, temp);
      newMinMaxAvg.avg = this.calculateAvg(temp);
    }
    this.minMaxAvgStack.push(newMinMaxAvg);
    this.stack.push(temp);
  }

  calculateAvg(temp) {
    return (
      [...this.stack, temp].reduce((a, b) => a + b, 0) / (this.stack.length + 1)
    );
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
