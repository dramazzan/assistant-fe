export interface ChatRequest {
  message: string
}

export interface ChatResponse {
  answer: string
}

export interface ApiErrorResponse {
  error?: string
}

export interface ChatMessage {
  id: number
  role: 'user' | 'assistant'
  text: string
}
