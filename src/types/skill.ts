export interface Skill {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface LearningPlan {
  id: string;
  skillId: string;
  title: string;
  duration: string;
  steps: LearningStep[];
}

export interface LearningStep {
  id: string;
  title: string;
  content: string;
  duration: string;
  completed: boolean;
}