class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length; 
  }

  add(item) {
    this.items.push(item); 
    this.items.sort ((a,b) => {
      return a-b; 
    })
    this.length = this.items.length;
  }

  get(pos) {
    if(pos > this.length) {
      throw new Error('OutOfBounds');
    }
    else {
      return this.items[pos];
    }
  }

  max() {
    if(this.length === 0) {
      throw new Error('EmptySortedList');
    }
    else {return this.items[this.length - 1];
    }
  }

  min() {
    if(this.length === 0) {
      throw new Error('EmptySortedList');
    }
    else {return this.items[0];
    }
  }

  sum() {
    if(this.length === 0) {
      return 0;
    } else { 
      // const reducer = (previousValue, currentValue) => previousValue + currentValue;

      return this.items.reduce((previousValue, currentValue) => previousValue + currentValue);
    }
  }

  avg() {
    if(this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
