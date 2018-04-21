import Menu from './src/main'

Menu.install = function (Vue) {
  Vue.component(Menu.name, Menu)
}

export default Menu
