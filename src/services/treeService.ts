import { db } from '../config/firebase';
import { 
  collection, 
  addDoc, 
  getDocs, 
  updateDoc, 
  doc, 
  DocumentData, 
  QueryDocumentSnapshot 
} from 'firebase/firestore';
import { TreeData } from '../types';

export const treeService = {
  async saveProgress(userId: string, treeData: TreeData): Promise<void> {
    try {
      await addDoc(collection(db, 'progress'), {
        userId,
        treeData,
        timestamp: new Date()
      });
    } catch (error) {
      console.error('Error saving progress:', error);
      throw error;
    }
  },

  async getProgress(userId: string): Promise<DocumentData[]> {
    try {
      const querySnapshot = await getDocs(
        collection(db, 'progress')
      );
      return querySnapshot.docs
        .filter((doc: QueryDocumentSnapshot) => doc.data().userId === userId)
        .map((doc: QueryDocumentSnapshot) => doc.data());
    } catch (error) {
      console.error('Error getting progress:', error);
      throw error;
    }
  },

  async saveCustomTree(userId: string, treeData: TreeData) {
    try {
      await addDoc(collection(db, 'customTrees'), {
        userId,
        treeData,
        timestamp: new Date()
      });
    } catch (error) {
      console.error('Error saving custom tree:', error);
      throw error;
    }
  }
}; 