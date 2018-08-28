export default function setRem (doc, win) {
  const docEle = doc.documentElement
  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'    // 旋转or大小改变
  let resizeHandler = () => {
    const clientWidth = docEle.clientWidth
    if (!clientWidth) {
      return
    }
    const fontSize = String(100 * (clientWidth / 750))
    docEle.style.fontSize = `${fontSize}` + 'px'
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, resizeHandler, false)
  doc.addEventListener('DOMContentLoaded', resizeHandler, false)
}
