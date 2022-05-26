import { createApp } from 'vue'
import MessageOut from './MessageOut.vue'
export type MessageType = 'success' | 'error' | 'default'

const createMessage = (message: string, type: MessageType, timeout = 2000) => {
  const messageInstance = createApp(Message, {
    message,
    type
  })
}

export default createMessage
