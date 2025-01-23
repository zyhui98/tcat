<template>
  <div class="skill-selector">
    <h2 class="title">选择你要学习的技能</h2>
    <div class="skill-grid">
      <div
        v-for="skill in skillStore.skills"
        :key="skill.id"
        class="skill-card"
        :class="{ active: skillStore.currentSkill?.id === skill.id }"
        @click="skillStore.selectSkill(skill)"
      >
        <div class="skill-icon">{{ skill.icon }}</div>
        <h3>{{ skill.name }}</h3>
        <p>{{ skill.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSkillStore } from '../stores/skillStore';

const skillStore = useSkillStore();
</script>

<style scoped>
.skill-selector {
  padding: 20px;
}

.title {
  text-align: center;
  margin-bottom: 30px;
}

.skill-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.skill-card {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.skill-card.active {
  border: 2px solid #42b883;
}

.skill-icon {
  font-size: 40px;
  margin-bottom: 10px;
}
</style>