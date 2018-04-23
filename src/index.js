import Header from './components/header'
import Menu from './components/menu'
import MenuItem from './components/menu-item'
import SubmenuItem from './components/submenu-item'

const components = [Header, Menu, MenuItem, SubmenuItem]

const install = function (Vue, options = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export {
  install,
  Header,
  Menu,
  MenuItem,
  SubmenuItem
}

export default {
  install
}
