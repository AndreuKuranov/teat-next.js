import { makeAutoObservable } from 'mobx';

class Counter {
  cuont: number = 1
  timer: number = 60

  constructor() {
    makeAutoObservable(this)
  }

  increment() {
    this.cuont = this.cuont + 1
  }

  decrement() {
    this.cuont = this.cuont - 1
  }

  get total() { 
    return `Count * timer = ${this.cuont * this.timer}`
  }
}

export default new Counter();