import { ref } from 'vue'
import { sendChatMessage } from '@/api/chat'
import type { ChatMessage } from '@/types/chat'

export function useChat() {
  const message = ref('')
  const messages = ref<ChatMessage[]>([])
  const error = ref('')
  const loading = ref(false)
  let nextMessageId = 1

  const sendMessage = async () => {
    const text = message.value.trim()

    if (!text) {
      error.value = 'Введите текст перед отправкой'
      return
    }

    try {
      loading.value = true
      error.value = ''
      message.value = ''
      messages.value.push({
        id: nextMessageId,
        role: 'user',
        text,
      })
      nextMessageId += 1

      const data = await sendChatMessage(text)
      messages.value.push({
        id: nextMessageId,
        role: 'assistant',
        text: data.answer,
      })
      nextMessageId += 1
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Ошибка сервера'
    } finally {
      loading.value = false
    }
  }

  return {
    message,
    messages,
    error,
    loading,
    sendMessage,
  }
}
