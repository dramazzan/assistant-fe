<script setup lang="ts">
import ChatForm from '@/components/ChatForm.vue'
import ChatResult from '@/components/ChatResult.vue'
import { useChat } from '@/composables/useChat'
import { useVoiceInput } from '@/composables/useVoiceInput'

const { message, messages, error, loading, sendMessage } = useChat()
const { listening, startVoiceInput } = useVoiceInput(message, error)
</script>

<template>
  <main class="page">
    <section class="hero">
      <div class="chat-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path
            d="M7.2 8.1h9.6a3.4 3.4 0 0 1 3.4 3.4v.8a3.4 3.4 0 0 1-3.4 3.4h-3.7l-3.4 2.9v-2.9H7.2a3.4 3.4 0 0 1-3.4-3.4v-.8a3.4 3.4 0 0 1 3.4-3.4Z"
          />
        </svg>
      </div>

      <div class="intro">
        <p class="greeting">Привет!</p>
        <h1>Что вы хотите узнать?</h1>
        <p class="subtitle">Задайте вопрос голосом или напишите его вручную.</p>
      </div>

      <div class="chat-area">
        <ChatResult :error="error" :messages="messages" :loading="loading" />

        <ChatForm
          v-model="message"
          :loading="loading"
          :listening="listening"
          @submit="sendMessage"
          @voice="startVoiceInput"
        />
      </div>
    </section>
  </main>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.page {
  min-height: 100vh;
  background:
    radial-gradient(circle at 18% 53%, rgba(31, 100, 190, 0.22), transparent 27%),
    linear-gradient(180deg, #0d3976 0%, #0b3671 48%, #0b3773 100%);
  color: #f7f9ff;
}

.hero {
  width: 100%;
  max-width: 980px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 58px 0 54px 116px;
}

.chat-icon {
  width: 62px;
  height: 62px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(145deg, #2b66bd, #1e56aa);
  box-shadow: 0 18px 45px rgba(3, 24, 61, 0.26);
}

.chat-icon svg {
  width: 32px;
  height: 32px;
  fill: #ffffff;
}

.intro {
  margin-top: 54px;
}

h1 {
  max-width: 760px;
  margin: 32px 0 0;
  font-size: 54px;
  font-weight: 700;
  line-height: 1.12;
  letter-spacing: 0;
  text-shadow: 0 4px 18px rgba(2, 24, 55, 0.26);
}

.greeting {
  font-size: 44px;
  font-weight: 700;
  line-height: 1;
  text-shadow: 0 4px 18px rgba(2, 24, 55, 0.26);
}

.subtitle {
  max-width: 620px;
  margin-top: 26px;
  color: rgba(234, 242, 255, 0.72);
  font-size: 28px;
  line-height: 1.42;
  text-shadow: 0 3px 14px rgba(2, 24, 55, 0.2);
}

.chat-area {
  width: 760px;
  display: grid;
  gap: 14px;
  margin-top: auto;
}

@media (max-width: 900px) {
  .hero {
    max-width: none;
    padding: 42px 22px 34px;
  }

  .intro {
    margin-top: 42px;
  }

  .greeting {
    font-size: 36px;
  }

  h1 {
    font-size: 38px;
  }

  .subtitle {
    font-size: 21px;
  }

  .chat-area {
    width: 100%;
  }
}
</style>
