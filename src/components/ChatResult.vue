<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import type { ChatMessage } from '@/types/chat'

const props = defineProps<{
  error: string
  messages: ChatMessage[]
  loading: boolean
}>()

const historyRef = ref<HTMLElement | null>(null)

watch(
  () => [props.messages.length, props.loading, props.error],
  async () => {
    await nextTick()

    if (historyRef.value) {
      historyRef.value.scrollTop = historyRef.value.scrollHeight
    }
  },
)
</script>

<template>
  <div v-if="messages.length || error || loading" ref="historyRef" class="chat-history">
    <div v-for="message in messages" :key="message.id" class="message-row" :class="message.role">
      <div class="bubble">
        {{ message.text }}
      </div>
    </div>

    <div v-if="loading" class="message-row assistant">
      <div class="bubble typing">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div v-if="error" class="message-row assistant">
      <div class="bubble error">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.chat-history {
  width: 760px;
  max-height: 300px;
  display: grid;
  gap: 10px;
  overflow: auto;
  padding: 16px;
  background: rgba(3, 29, 72, 0.26);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 18px;
}

.message-row {
  display: flex;
}

.message-row.user {
  justify-content: flex-end;
}

.message-row.assistant {
  justify-content: flex-start;
}

.bubble {
  max-width: 82%;
  padding: 12px 15px;
  color: #eef5ff;
  border-radius: 17px;
  line-height: 1.45;
  font-size: 17px;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.user .bubble {
  background: linear-gradient(145deg, #2d69c0, #2159ad);
  border-bottom-right-radius: 6px;
}

.assistant .bubble {
  background: rgba(255, 255, 255, 0.12);
  border-bottom-left-radius: 6px;
}

.bubble.error {
  color: #ffe1e1;
  background: rgba(255, 92, 92, 0.16);
  border: 1px solid rgba(255, 107, 107, 0.28);
}

.typing {
  display: flex;
  gap: 5px;
  align-items: center;
  min-width: 58px;
  min-height: 43px;
}

.typing span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(238, 245, 255, 0.78);
  animation: typing-dot 1s ease-in-out infinite;
}

.typing span:nth-child(2) {
  animation-delay: 0.15s;
}

.typing span:nth-child(3) {
  animation-delay: 0.3s;
}

@keyframes typing-dot {
  0%,
  80%,
  100% {
    transform: translateY(0);
    opacity: 0.45;
  }

  40% {
    transform: translateY(-5px);
    opacity: 1;
  }
}

@media (max-width: 900px) {
  .chat-history {
    width: 100%;
    max-height: 260px;
  }

  .bubble {
    max-width: 90%;
    font-size: 15px;
  }
}
</style>
