const TempTracker = require('./TempTracker');

describe('Push element to stack', () => {
  test('it inserts new value to top of stack', () => {
    const tempTracker = new TempTracker();
    tempTracker.push(10);
    expect(tempTracker.stack[0]).toBe(10);
    tempTracker.push(12);
    expect(tempTracker.stack[1]).toBe(12);
  });

  test('it pop the last value that got inserted in the stack', () => {
    const tempTracker = new TempTracker();
    tempTracker.push(10);
    tempTracker.push(20);
    tempTracker.push(30);
    expect(tempTracker.stack.length).toBe(3);
    tempTracker.pop();
    expect(tempTracker.stack.length).toBe(2);
  });

  test('it gets min temperature from stack', () => {
    const tempTracker = new TempTracker();
    tempTracker.push(10);
    tempTracker.push(20);
    tempTracker.push(5);
    expect(tempTracker.getMin()).toBe(5);
    tempTracker.pop();
    expect(tempTracker.getMin()).toBe(10);
    expect(
      tempTracker.minMaxAvgStack[tempTracker.minMaxAvgStack.length - 1].min
    ).toBe(10);
  });

  test('it gets max temperature from stack', () => {
    const tempTracker = new TempTracker();
    tempTracker.push(10);
    tempTracker.push(20);
    tempTracker.push(30);
    expect(tempTracker.getMax()).toBe(30);
    expect(
      tempTracker.minMaxAvgStack[tempTracker.minMaxAvgStack.length - 1].max
    ).toBe(30);
    tempTracker.pop();
    expect(tempTracker.getMax()).toBe(20);
    expect(
      tempTracker.minMaxAvgStack[tempTracker.minMaxAvgStack.length - 1].max
    ).toBe(20);
  });

  test('it gets average temperature from stack', () => {
    const tempTracker = new TempTracker();
    tempTracker.push(10);
    tempTracker.push(20);
    tempTracker.push(30);
    tempTracker.push(40);
    expect(tempTracker.getAvg()).toBe(25);
    expect(
      tempTracker.minMaxAvgStack[tempTracker.minMaxAvgStack.length - 1].avg
    ).toBe(25);
    tempTracker.pop();
    expect(tempTracker.getAvg()).toBe(20);
    expect(
      tempTracker.minMaxAvgStack[tempTracker.minMaxAvgStack.length - 1].avg
    ).toBe(20);
  });
});
