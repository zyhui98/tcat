// 需要先安装pinia: npm install pinia
import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Skill, LearningPlan } from '@/types/skill';

export const useSkillStore = defineStore('skill', () => {
  const currentSkill = ref<Skill | null>(null);
  const currentPlan = ref<LearningPlan | null>(null);

  const skills: Skill[] = [
    {
      id: 'english',
      name: '英语',
      icon: '🇬🇧',
      description: '学习英语，打开世界之窗'
    },
    {
      id: 'ukulele',
      name: '尤克里里',
      icon: '🎸',
      description: '轻松学习快乐乐器'
    },
    {
      id: 'java',
      name: 'Java编程',
      icon: '☕',
      description: '掌握编程技能'
    }
  ];

  const learningPlans: Record<string, LearningPlan> = {
    english: {
      id: 'english-basic',
      skillId: 'english',
      title: '英语基础学习计划',
      duration: '3个月',
      steps: [
        {
          id: '1',
          title: '音标学习',
          content: '掌握48个国际音标',
          duration: '2周',
          completed: false
        },
        {
          id: '2',
          title: '基础词汇',
          content: '学习1000个核心词汇',
          duration: '4周',
          completed: false
        }
      ]
    },
    // 其他技能的学习计划...
  };

  function selectSkill(skill: Skill) {
    currentSkill.value = skill;
    currentPlan.value = learningPlans[skill.id];
  }

  function clearSelection() {
    currentSkill.value = null;
    currentPlan.value = null;
  }

  return {
    skills,
    currentSkill,
    currentPlan,
    selectSkill,
    clearSelection
  };
});