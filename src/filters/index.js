/**
 * [formatDate description]
 * @param  {[type]}  time      [description]
 * @param  {String}  formatStr [description]
 * @param  {Boolean} [ms=true] [description]
 * @return {String}            [description]
 */

export function formatDate (
  time,
  formatStr,
  ms = true,
) {
  if (!time) return

  const t = new Date(ms ? time : time * 1000)
  const tf = i => i < 10 ? `0${i}` : i

  return formatStr.replace(/yyyy|MM|dd|HH|mm|ss/g, a => {
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
