import { createApp } from 'vue'
import MessageOut from './MessageOut.vue'
export type MessageType = 'success' | 'error' | 'default'

const createMessage = (message: string, type: MessageType, timeout = 2000) => {
  const messageInstance = createApp(MessageOut, {
    message,
    type
  })
  const mountNode = document.createElement('div')
  document.body.appendChild(mountNode)
  messageInstance.mount(mountNode)
  setTimeout(() => {
    // TODO: .unmount() 中参数与原视频中不同
    messageInstance.unmount()
    document.body.removeChild(mountNode)
  }, timeout)
}

export default createMessage
