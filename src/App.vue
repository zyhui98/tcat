<template>
  <div class="app">
    <header>
      <h1>三脚猫</h1>
      <p class="slogan">学习从此简单快乐</p>
    </header>
    
    <main>
      <template v-if="!skillStore.currentSkill">
        <SkillSelector />
      </template>
      <template v-else>
        <LearningPlanView />
      </template>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useSkillStore } from './stores/skillStore';
import SkillSelector from './components/SkillSelector.vue';
import LearningPlanView from './components/LearningPlanView.vue';

const skillStore = useSkillStore()
</script>

<style>
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

header {
  text-align: center;
  margin-bottom: 40px;
}

header h1 {
  color: #42b883;
  margin-bottom: 8px;
}

.slogan {
  color: #666;
  font-size: 1.2em;
  margin: 0;
}
</style>
