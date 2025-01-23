<template>
  <div class="learning-plan" v-if="skillStore.currentPlan">
    <div class="header">
      <button class="back-btn" @click="skillStore.clearSelection">返回选择</button>
      <h2>{{ skillStore.currentPlan.title }}</h2>
      <p>预计用时：{{ skillStore.currentPlan.duration }}</p>
    </div>
    
    <div class="steps">
      <div
        v-for="step in skillStore.currentPlan.steps"
        :key="step.id"
        class="step-card"
      >
        <div class="step-header">
          <h3>{{ step.title }}</h3>
          <span class="duration">{{ step.duration }}</span>
        </div>
        <p>{{ step.content }}</p>
        <template v-if="step.title === '音标学习'">
          <PhonicsLearning />
        </template>
        <label class="checkbox">
          <input
            type="checkbox"
            v-model="step.completed"
          >
          完成学习
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSkillStore } from '../stores/skillStore';
import PhonicsLearning from './PhonicsLearning.vue';

const skillStore = useSkillStore();
</script>

<style scoped>
.learning-plan {
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 30px;
  position: relative;
}

.back-btn {
  position: absolute;
  left: 0;
  top: 0;
  padding: 8px 16px;
  border: none;
  background: #42b883;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}

.steps {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.step-card {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.step-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.duration {
  color: #666;
  font-size: 0.9em;
}

.checkbox {
  display: block;
  margin-top: 10px;
}
</style>