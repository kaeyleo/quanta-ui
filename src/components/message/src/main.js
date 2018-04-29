import Vue from 'vue'
import MessageComponent from './main.vue'

const MessageConstructor = Vue.extend(MessageComponent)

const instances = []
const defaultOptions = {
  top: 24,
  type: 'primary',
  duration: 3000
}

const Message = options => {
  const instance = new MessageConstructor({
    data: options
  })
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  // set props
  instance.vm.visible = true
  // 'primary', 'success', 'warning', 'error'
  instance.vm.type = typeof instance.vm.type === 'string'
    ? (instance.vm.type || defaultOptions.type)
    : defaultOptions.type

  let offsetTop = defaultOptions.top

  for (let i = 0, len = instances.length; i < len; i++) {
    offsetTop += instances[i].$el.offsetHeight + 16
  }

  instance.vm.top = offsetTop
  instances.push(instance)
}

// TODO: prop validator

export default Message
