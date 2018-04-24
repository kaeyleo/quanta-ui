import Header from './components/header'
import Menu from './components/menu'
import MenuItem from './components/menu-item'
import SubmenuItem from './components/submenu-item'
import Button from './components/button'

const components = [Header, Menu, MenuItem, SubmenuItem, Button]

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
  SubmenuItem,
  Button
}

export default {
  install
}
