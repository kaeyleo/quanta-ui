import Message from './src/main'

Message.install = function (Vue) {
  Vue.component(Message.name, Message)
}

export default Message
