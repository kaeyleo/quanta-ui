import Vue from 'vue'
import MessageComponent from './main.vue'

const MessageConstructor = Vue.extend(MessageComponent)

const instances = []
let key = 1
const defaultOptions = {
  top: 24,
  type: 'primary',
  duration: 3000
}

const Message = options => {
  const instance = new MessageConstructor({
    data: options
  })

  instance.id = key++
  instance.onClose = Message.close

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

Message.close = vm => {
  const id = vm.id
  const len = instances.length
  let index = 0
  let height = 0

  const instance = instances.find((e, i) => {
    index = i
    return e.id === id
  })

  height = instance.$el.offsetHeight
  instances.splice(index, 1)

  for (let i = index; i < len - 1; i++) {
    const offsetTop = parseInt(instances[i].$el.style.top) - height - 16
    instances[i].$el.style.top = `${offsetTop}px`
  }
}

// TODO: prop validator

export default Message
