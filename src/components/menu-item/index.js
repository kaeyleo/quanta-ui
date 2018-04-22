import MenuItem from './src/main'

MenuItem.install = function (Vue) {
  Vue.component(MenuItem.name, MenuItem)
}

export default MenuItem
