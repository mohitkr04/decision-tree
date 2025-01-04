import { TreeData } from '../types';

export class HistoryManager {
  private past: TreeData[] = [];
  private future: TreeData[] = [];
  private current: TreeData;

  constructor(initialState: TreeData) {
    this.current = initialState;
  }

  push(newState: TreeData) {
    this.past.push(this.current);
    this.current = newState;
    this.future = [];
  }

  undo(): TreeData | null {
    if (this.past.length === 0) return null;
    
    this.future.push(this.current);
    this.current = this.past.pop()!;
    return this.current;
  }

  redo(): TreeData | null {
    if (this.future.length === 0) return null;
    
    this.past.push(this.current);
    this.current = this.future.pop()!;
    return this.current;
  }

  getCurrentState(): TreeData {
    return this.current;
  }

  canUndo(): boolean {
    return this.past.length > 0;
  }

  canRedo(): boolean {
    return this.future.length > 0;
  }
} 