export interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  criIndexBefore?: number;
  criIndexAfter?: number;
  tags?: string[];
}

export interface Persona {
  id: string;
  name: string;
  role: string;
  scenario: string;
  avatar: string;
  inputs: string[];
  initialCRI: number;
  finalCRI: number;
  historyCRI: number[];
  gadScore: number;
  phqScore: number;
  transcript: string;
  clinicalNote: string;
}

export interface TechNode {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  specs: { label: string; value: string }[];
  codeSnippet: string;
}

export interface PitchChapter {
  id: number;
  title: string;
  subtitle: string;
  concept: string;
  painPoints?: { issue: string; consequence: string; icon: string }[];
  solutionBullets?: { title: string; desc: string; extra?: string }[];
  displayStats?: { label: string; value: string; desc: string }[];
  quote?: string;
  keyAction?: string;
}
