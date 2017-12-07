/**
 * set document title when router change
 * @param {String} title title name
 */
export function setTitle (title) {
  document.title = title
  const iframe = document.createElement('iframe')
  iframe.style.visibility = 'hidden'
  const iframeCallback = function () {
    setTimeout(() => {
      iframe.removeEventListener('load', iframeCallback)
      document.body.removeChild(iframe)
    }, 0)
  }
  iframe.addEventListener('load', iframeCallback)
  document.body.appendChild(iframe)
}

/**
 * cache return for function, ensure that the function is executed only once
 * @param {Function} func
 */

export function onceWrapper (func) {
  let isExecuted = false
  let promiseObj = null

  return (...arg) => {
    if (isExecuted) return promiseObj
    isExecuted = true
    promiseObj = func(...arg)
    return promiseObj
  }
}

/**
 * 时间戳格式化.
 * @param  {number} time 时间戳 .
 * @param  {string} formatStr 格式 .
 * @param  {boolean} ms 时间戳是否是秒为单位, 10位true, 13位false .
 * @return {string} 格式化后的字符串.
 */
export function format (time, formatStr, ms) {
  let t = new Date(ms ? time * 1000 : time)
  let tf = function (i) {
    return (i < 10 ? '0' : '') + i
  }
  return formatStr.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
    switch (a) {
      case 'yyyy':
        return tf(t.getFullYear())
      case 'MM':
        return tf(t.getMonth() + 1)
      case 'mm':
        return tf(t.getMinutes())
      case 'dd':
        return tf(t.getDate())
      case 'HH':
        return tf(t.getHours())
      case 'ss':
        return tf(t.getSeconds())
    }
  })
}
