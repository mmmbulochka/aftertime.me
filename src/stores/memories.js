import {makeAutoObservable} from 'mobx';

class MemoryCreator {
  constructor() {
    makeAutoObservable(this);
  }
  memories = [];
  async loadMemories() {
    const response = await fetch('/api/memories');
    const memories = await response.json();
    this.memories = memories;
  }
}

export default MemoryCreator;
