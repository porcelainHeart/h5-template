function lazyLoading (path) {
  return () => import(`@/components/${path}`)
}

const routes = [
  {
    path: '/demo',
    name: 'Demo',
    meta: {title: 'Demo Page'},
    component: lazyLoading('Demo'),
  },
  {
    path: '*',
    redirect: '/demo',
  },
]

export default routes
