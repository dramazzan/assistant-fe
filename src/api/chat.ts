import type { ApiErrorResponse, ChatRequest, ChatResponse } from '@/types/chat'

export async function sendChatMessage(message: string): Promise<ChatResponse> {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message } satisfies ChatRequest),
  })

  const data = (await response.json()) as ChatResponse & ApiErrorResponse

  if (!response.ok) {
    throw new Error(data.error || 'Ошибка сервера')
  }

  return data
}
