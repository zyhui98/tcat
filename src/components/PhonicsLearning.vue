<template>
  <div class="phonics-learning">
    <div class="phonics-grid">
      <div v-for="phoneme in phonemes" :key="phoneme.symbol" class="phoneme-card" :class="{ completed: phoneme.completed }" @click="selectPhoneme(phoneme)">
        <div class="phoneme-symbol">{{ phoneme.symbol }}</div>
      </div>
    </div>

    <div v-if="selectedPhoneme" class="phoneme-detail">
      <div class="phoneme-header">
        <h3>{{ selectedPhoneme.symbol }}</h3>
        <div class="header-actions">
          <button class="play-btn" @click="playPhonemeSound(selectedPhoneme.symbol)">
            🔊 发音
          </button>
          <button class="complete-btn" :class="{ completed: selectedPhoneme.completed }" @click="markPhonemeCompleted()">
            {{ selectedPhoneme.completed ? '已学习' : '标记完成' }}
          </button>
        </div>
      </div>

      <div class="example-words">
        <div v-for="word in selectedPhoneme.examples" :key="word.text" class="word-item" @click="playWordSound(word.text)">
          <div class="word-text">{{ word.text }}</div>
          <div class="word-phonetic">[{{ word.phonetic }}]</div>
          <div class="word-rule">{{ word.rule }}</div>
          <div class="digital-human">
            <div class="avatar">🤖</div>
            <button class="play-btn" @click.stop="playWordSound(word.text)">
              播放发音
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface PhonemeExample {
  text: string;
  phonetic: string;
  rule: string;
}

interface Phoneme {
  symbol: string;
  examples: PhonemeExample[];
  completed: boolean;
}

const phonemes = ref<Phoneme[]>([
  {
    symbol: 'æ',
    completed: false,
    examples: [
      { text: 'cat', phonetic: 'kæt', rule: '在辅音之间发短元音' },
      { text: 'map', phonetic: 'mæp', rule: '在闭音节中发短音' },
      { text: 'hand', phonetic: 'hænd', rule: '在nd前发短音' }
    ]
  },
  {
    symbol: 'e',
    completed: false,
    examples: [
      { text: 'bed', phonetic: 'bed', rule: '在闭音节中发短音' },
      { text: 'head', phonetic: 'hed', rule: '在ea组合中发短音' }
    ]
  },
  {
    symbol: 'ɪ',
    completed: false,
    examples: [
      { text: 'sit', phonetic: 'sɪt', rule: '在闭音节中发短音' },
      { text: 'fish', phonetic: 'fɪʃ', rule: '在辅音前发短音' }
    ]
  },
  // ... 添加更多音标数据
]);

const selectedPhoneme = ref<Phoneme | null>(null);

function selectPhoneme(phoneme: Phoneme) {
  selectedPhoneme.value = phoneme;
}

function playPhonemeSound(symbol: string) {
  const utterance = new SpeechSynthesisUtterance(symbol);
  utterance.lang = 'en-US';
  utterance.rate = 0.8; // 降低语速以更清晰地发音
  speechSynthesis.speak(utterance);
}

function playWordSound(word: string) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = 'en-US';
  utterance.rate = 0.8; // 降低语速以更清晰地发音
  speechSynthesis.speak(utterance);
}

function markPhonemeCompleted() {
  if (selectedPhoneme.value) {
    selectedPhoneme.value.completed = true;
  }
}
</script>

<style scoped>
.phonics-learning {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}



.phonics-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
}

.phonics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  gap: 10px;
}

.phoneme-card {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.phoneme-card:hover {
  transform: scale(1.05);
}

.phoneme-card.completed {
  background: #e8f7f0;
  border: 1px solid #42b883;
}

.phoneme-symbol {
  font-size: 1.5em;
  color: #42b883;
}

.phoneme-detail {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.phoneme-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.example-words {
  display: grid;
  gap: 15px;
}

.word-item {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background: #f8f8f8;
  border-radius: 8px;
  cursor: pointer;
}

.word-text {
  font-size: 1.2em;
  font-weight: bold;
}

.word-phonetic {
  color: #666;
}

.word-rule {
  color: #42b883;
}

.digital-human {
  display: flex;
  align-items: center;
  gap: 8px;
}

.avatar {
  font-size: 1.5em;
}

.play-btn {
  padding: 4px 8px;
  border: none;
  background: #42b883;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.play-btn:hover {
  background: #3aa876;
}

.header-actions {
  display: flex;
  gap: 10px;
}

.complete-btn {
  padding: 4px 8px;
  border: 1px solid #42b883;
  background: white;
  color: #42b883;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}

.complete-btn:hover {
  background: #f0f9f6;
}

.complete-btn.completed {
  background: #42b883;
  color: white;
}
</style>