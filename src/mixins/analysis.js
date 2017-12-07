import Vue from 'vue'

Vue.mixin({
  methods: {
    sendEvent (category, action, label, value) {
      window._hmt.push(['_trackEvent', category, action, label, value])
      console.log('_trackEvent', category, action, label, value || null)
    },
  },
  beforeRouteEnter (to, from, next) {
    const { meta, path } = to
    if (meta.pv) window._hmt.push(['_trackPageview', path])
    next()
  },
})
