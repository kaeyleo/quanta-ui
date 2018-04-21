import Header from './components/header'
import Menu from './components/menu'

const components = [Header, Menu]

const install = function (Vue, options = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export {
  install,
  Header,
  Menu
}

export default {
  install
}
