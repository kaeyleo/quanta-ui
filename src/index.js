import Header from './components/header'
import Menu from './components/menu'
import MenuItem from './components/menu-item'
import SubmenuItem from './components/submenu-item'
import Button from './components/button'
import Callout from './components/callout'
import Alert from './components/alert'
import Message from './components/message'
import Tag from './components/tag'
import Dropdown from './components/dropdown'
import DropdownMenu from './components/dropdown-menu'
import DropdownItem from './components/dropdown-item'

const components = [
  Header,
  Menu,
  MenuItem,
  SubmenuItem,
  Button,
  Callout,
  Alert,
  Message,
  Tag,
  Dropdown,
  DropdownMenu,
  DropdownItem
]

const install = function (Vue, options = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$message = Message
}

export {
  install,
  Header,
  Menu,
  MenuItem,
  SubmenuItem,
  Button,
  Callout,
  Alert,
  Message,
  Tag,
  Dropdown,
  DropdownMenu,
  DropdownItem
}

export default {
  install
}
