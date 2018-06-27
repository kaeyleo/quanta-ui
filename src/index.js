import Header from './components/header'
import Menu from './components/menu'
import MenuItem from './components/menu-item'
import SubmenuItem from './components/submenu-item'
import Button from './components/button'
import ButtonGroup from './components/button-group'
import Callout from './components/callout'
import Alert from './components/alert'
import Message from './components/message'
import Tag from './components/tag'
import Dropdown from './components/dropdown'
import DropdownMenu from './components/dropdown-menu'
import DropdownItem from './components/dropdown-item'
import Divider from './components/divider'
import Radio from './components/radio'
import Checkbox from './components/checkbox'
import Switch from './components/switch'
import Input from './components/input'
import Textarea from './components/textarea'
import Tooltip from './components/tooltip'

const components = [
  Header,
  Menu,
  MenuItem,
  SubmenuItem,
  Button,
  ButtonGroup,
  Callout,
  Alert,
  Message,
  Tag,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Divider,
  Radio,
  Checkbox,
  Switch,
  Input,
  Textarea,
  Tooltip
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
  ButtonGroup,
  Callout,
  Alert,
  Message,
  Tag,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Divider,
  Radio,
  Checkbox,
  Switch,
  Input,
  Textarea,
  Tooltip
}

export default {
  install
}
