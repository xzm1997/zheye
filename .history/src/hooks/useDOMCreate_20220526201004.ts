import { onUnmounted } from "vue"

function useDOMCreate (nodeId: string) {
  const node = document.createElement('div')
  node.id = 'back'
  document.body.appendChild(node)
  onUnmounted(() => {
    document.body.removeChild(node)
  })
}

export default useDOMCreate
