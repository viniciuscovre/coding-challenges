class PriorityQueue {
  constructor() {
    this.collection = [];
  }

  isEmpty() {
    return this.collection.length === 0;
  }

  enqueue(element) {
    if (this.isEmpty()) this.collection.push(element);
    else {
      let updated = false;

      for (let i = 0; i < this.collection.length; i++) {
        if (element.distance < this.collection[i].distance) {
          this.collection.splice(i, 0, element);
          updated = true;
          break;
        }
      }

      if (!updated) this.collection.push(element);
    }
  }

  dequeue() {
    const deleted = this.collection.shift();
    return deleted;
  }
}

module.exports = PriorityQueue;
