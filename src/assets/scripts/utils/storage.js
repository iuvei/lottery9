let storage = window.sessionStorage

if (!storage) { // 是不是有sessionStorage
  if (window.localStorage) {  // 是不是有localStorage
    storage = window.localStorage
  } else if (document.cookie && navigator.cookieEnabled) {  // cookie处理
    storage = {
      setItem: function (item, value) {
        let cookies = document.cookie.split(';')
        let cookie = ''
        let isExast = false
        cookies.forEach((item) => {
          let subItem = item.split('=')
          cookie += (subItem[0].trim() + '=')
          if (subItem[0].trim() === item) {
            cookie += (JSON.stringify(value) + ';')
            isExast = true
          } else {
            cookie += (subItem[1].trim() + ';')
          }
        })
        if (isExast) {
          document.cookie = cookie.substr(0, cookie.length - 1)
        } else {
          document.cookie += (';' + item + '=' + JSON.stringify(value))
        }
      },
      getItem: function (item) {
        let cookies = document.cookie.split(';')
        let isExast = false
        cookies.forEach(item => {
          let subItem = item.split('=')
          if (subItem[0].trim() === item) {
            isExast = true
            return JSON.parse(subItem[1])
          }
        })
        if (!isExast) {
          throw Error(item + '不存在')
        }
      },
      removeItem: function (item) {
        let cookies = document.cookie.split(';')
        let cookie = ''
        let isExast = false
        cookies.forEach((item) => {
          let subItem = item.split('=')
          cookie += (subItem[0].trim() + '=')
          if (subItem[0].trim() === item) {
            console.log(`remove item success`)
            isExast = true
          } else {
            cookie += (subItem[1].trim() + ';')
          }
        })
        if (isExast) {
          document.cookie = cookie.substr(0, cookie.length - 1)
        } else {
          throw Error(item + '不存在')
        }
      },
      clear: function () {
        document.cookie = ''
      }
    }
  } else {
    alert('请开启cookie')
  }
}
export function setStorage (item, value) {
  storage.setItem(item, value)
}

export function getStorage (item) {
  storage.getItem(item)
}

export function removeStorage (item) {
  storage.removeItem(item)
}

export function removeAllStorage () {
  storage.clear()
}
