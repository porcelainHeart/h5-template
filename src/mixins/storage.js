import Vue from 'vue'
const { localStorage, sessionStorage } = window

function storageGenerator (storage) {
  const name = storage === localStorage
    ? 'storage'
    : 'session'

  return {
    [`${name}Get`]: key => JSON.parse(storage.getItem(key)),
    [`${name}Set`] (key, val) {
      storage.setItem(key, JSON.stringify(val))
    },
    [`${name}Remove`] (...keys) {
      keys.forEach(key => { storage.removeItem(key) })
    },
    [`${name}Clear`] () {
      storage.clear()
    },
  }
}

Vue.mixin({
  methods: {
    ...storageGenerator(localStorage),
    ...storageGenerator(sessionStorage),
  },
})
