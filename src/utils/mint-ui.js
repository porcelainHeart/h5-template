import {
  Navbar,
  TabItem,
  Spinner,
  Button,
  InfiniteScroll,
} from 'mint-ui'

const UIComponents = [
  Navbar,
  TabItem,
  Spinner,
  Button,
]

const JSComponents = [
  InfiniteScroll,
]

export default function registerComponents (Vue) {
  UIComponents.forEach(component => {
    Vue.component(component.name, component)
  })

  JSComponents.forEach(component => {
    Vue.use(component)
  })
}
