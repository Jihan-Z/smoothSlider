var util = {
  addClass: function (el, name) {
    if (!el) {
      return
    }
    var nameList = name.split(' ')
    var i = nameList.length
    while (i--) {
      el.className = new RegExp('(\s*)' + nameList[i] + '(\s*)', 'ig').test(el.className) && el.className || (el.className + ' ' + nameList[i]).replace(/^\s|\s$/g, '')
    }
  },
  removeClass: function (el, name) {
    if (!el) {
      return
    }
    var nameList = name.split(' ')
    var i = nameList.length
    while (i--) {
      el.className = el.className.replace(new RegExp('(\s*)' + nameList[i] + '(\s*)', 'ig'), '').replace(/^\s|\s$/g, '').replace(/\s+/g, ' ')
    }
  }
}

module.exports = util
