import Header from './components/header'

const components = [Header]

const install = function (Vue, options = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export {
  install,
  Header
}

export default {
  install
}
