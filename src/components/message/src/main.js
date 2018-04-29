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

  const duration = options.duration
  instance.duration = (typeof duration === 'number' && duration !== 0)
    ? duration
    : defaultOptions.duration

  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)

  instance.vm.visible = true

  const top = instance.vm.top
  instance.vm.top = (!!top && typeof top === 'number')
    ? top
    : defaultOptions.top

  // 'primary', 'success', 'warning', 'error'
  instance.vm.type = typeof instance.vm.type === 'string'
    ? (instance.vm.type || defaultOptions.type)
    : defaultOptions.type

  let offsetTop = instance.vm.top

  for (let i = 0, len = instances.length; i < len; i++) {
    offsetTop += instances[i].$el.offsetHeight + 16
  }

  instance.vm.top = offsetTop
  instances.push(instance)
}

// TODO: prop validator

// TODO: remove the destroyed instance

export default Message
