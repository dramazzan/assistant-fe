<script setup lang="ts">
defineProps<{
  modelValue: string
  loading: boolean
  listening: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
  submit: []
  voice: []
}>()
</script>

<template>
  <div class="form-wrap">
    <p v-if="listening" class="recording-hint">Идет запись. Нажмите на микрофон, чтобы остановить.</p>

    <form class="chat-form" :class="{ recording: listening }" @submit.prevent="emit('submit')">
      <button
        type="button"
        class="mic"
        :class="{ active: listening }"
        :aria-label="listening ? 'Остановить запись' : 'Начать запись'"
        :disabled="loading"
        @click="emit('voice')"
      >
        <span v-if="listening" class="pulse" aria-hidden="true"></span>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 14.8a3.5 3.5 0 0 0 3.5-3.5V6.1a3.5 3.5 0 0 0-7 0v5.2a3.5 3.5 0 0 0 3.5 3.5Zm6.1-3.8a1 1 0 1 0-2 0 4.1 4.1 0 1 1-8.2 0 1 1 0 1 0-2 0 6.1 6.1 0 0 0 5.1 6v2.5H8.6a1 1 0 1 0 0 2h6.8a1 1 0 1 0 0-2H13V17a6.1 6.1 0 0 0 5.1-6Z"
          />
        </svg>
      </button>

      <textarea
        :value="modelValue"
        placeholder="Спросите что угодно"
        rows="1"
        @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
      />

      <button type="submit" class="submit" :aria-label="loading ? 'Отправка' : 'Отправить'" :disabled="loading">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.7 4.7a1 1 0 0 0 0 1.4L14.6 12l-5.9 5.9a1 1 0 0 0 1.4 1.4l6.6-6.6a1 1 0 0 0 0-1.4L10.1 4.7a1 1 0 0 0-1.4 0Z" />
        </svg>
      </button>
    </form>
  </div>
</template>

<style scoped>
.form-wrap {
  width: 760px;
}

.recording-hint {
  min-height: 22px;
  margin: 0 0 10px;
  color: rgba(255, 223, 223, 0.92);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0;
}

.chat-form {
  width: 760px;
  height: 78px;
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 7px 7px 7px 32px;
  border: 4px solid rgba(44, 101, 183, 0.58);
  border-radius: 22px;
  background: rgba(6, 42, 99, 0.32);
  box-shadow:
    inset 0 0 28px rgba(2, 24, 58, 0.22),
    0 12px 42px rgba(2, 24, 58, 0.14);
}

.chat-form.recording {
  border-color: rgba(255, 107, 107, 0.82);
  box-shadow:
    inset 0 0 30px rgba(255, 107, 107, 0.1),
    0 0 0 6px rgba(255, 107, 107, 0.08),
    0 12px 42px rgba(2, 24, 58, 0.14);
}

textarea {
  flex: 1;
  height: 38px;
  resize: none;
  padding: 2px 0 0;
  overflow: hidden;
  font: inherit;
  font-size: 27px;
  line-height: 1.25;
  color: #eef5ff;
  border: 0;
  outline: none;
  background: transparent;
}

textarea::placeholder {
  color: rgba(229, 238, 255, 0.76);
}

button {
  display: grid;
  place-items: center;
  border: none;
  background: transparent;
  cursor: pointer;
  color: #ffffff;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.mic {
  position: relative;
  width: 32px;
  height: 42px;
  padding: 0;
  margin-right: 10px;
  color: rgba(65, 126, 217, 0.9);
}

.mic.active {
  color: #ff6b6b;
}

.mic svg {
  position: relative;
  z-index: 1;
  width: 29px;
  height: 29px;
  fill: currentColor;
}

.pulse {
  position: absolute;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: rgba(255, 107, 107, 0.2);
  animation: recording-pulse 1.2s ease-out infinite;
}

.submit {
  width: 64px;
  height: 64px;
  flex: 0 0 auto;
  border-radius: 16px;
  background: linear-gradient(145deg, #2d69c0, #2159ad);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 10px 24px rgba(1, 24, 60, 0.24);
}

.submit svg {
  width: 40px;
  height: 40px;
  fill: currentColor;
}

@keyframes recording-pulse {
  0% {
    transform: scale(0.7);
    opacity: 0.95;
  }

  100% {
    transform: scale(1.45);
    opacity: 0;
  }
}

@media (max-width: 900px) {
  .form-wrap {
    width: 100%;
  }

  .chat-form {
    width: 100%;
    height: 70px;
    gap: 12px;
    padding: 6px 6px 6px 18px;
    border-radius: 22px;
  }

  textarea {
    font-size: 20px;
  }

  .mic {
    margin-right: 8px;
  }

  .submit {
    width: 58px;
    height: 58px;
  }

  .submit svg {
    width: 40px;
    height: 40px;
  }
}
</style>
