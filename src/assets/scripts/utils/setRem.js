export default function setRem (doc, win) {
  const docEle = doc.documentElement
  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'    // 旋转or大小改变
  let resizeHandler = () => {
    const clientWidth = docEle.clientWidth
    if (!clientWidth) {
      return
    }
    const fontSize = 100 * (clientWidth / 750)
    docEle.style.fontSize = `${fontSize > 100 ? 100 : fontSize}` + 'px'
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, resizeHandler, false)
  doc.addEventListener('DOMContentLoaded', resizeHandler, false)
}
