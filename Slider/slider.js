const all = ele => document.querySelectorAll(ele)
const one = ele => document.querySelector(ele)
// 가로
const slide_width = () => {
    const wrap = one('.slide') // .slide 선택
    const target = wrap.children[0] // .slide ul 선택
    const len = target.children.length // .slide li 갯수
    // .slide ul의 너비 조정
    target.style.cssText = `width:calc(100% * ${len});display:flex;transition:1s`
    // .slide li의 너비 조정
    Array.from(target.children)
    .forEach(ele => ele.style.cssText = `width:calc(100% / ${len});`)
    // 화면 전환 실행
    let pos = 0
    setInterval(() => {
        pos = (pos + 1) % len // 장면 선택
        target.style.marginLeft = `${-pos * 100}%`
    }, 1500) // 1500 = 1500ms = 1.5sec. 즉, 1.5초 마다 실행
}
// 세로
const slide_height = () => {
    const wrap = one('.slide') // .slide 선택
    const target = wrap.children[0] // .slide ul 선택
    const len = target.children.length // .slide li 갯수
    const height = target.clientHeight
    // .slide ul의 너비 조정
    target.style.cssText = `height:calc(100% * ${len});transition:1s`
    // .slide li의 너비 조정
    Array.from(target.children)
    .forEach(ele => ele.style.cssText = `height:calc(100% / ${len});`)
    // 화면 전환 실행
    let pos = 0
    setInterval(() => {
      pos = (pos + 1) % len // 장면 선택
      target.style.marginTop = `${-pos * height}px`
    }, 1500) // 1500 = 1500ms = 1.5sec. 즉, 1.5초 마다 실행
}
// 페이드
const slide_fade = () => {
    const wrap = one('.slide') // .slide 선택
    const target = wrap.children[0] // .slide ul 선택
    const len = target.children.length // .slide li 갯수
    const liStyle = `
      position:absolute;
      left:0;right:0;top:0;bottom:0;transition:1s;opacity:0
    `
    target.style.cssText = `position:relative;`
    Array.from(target.children)
    .forEach(ele => ele.style.cssText = liStyle)
    target.children[0].style.opacity = 1
    let pos = 0
    setInterval(() => {
      target.children[pos].style.opacity = 0
      pos = (pos + 1) % len 
      target.children[pos].style.opacity = 1
    }, 1500)
}
const slide_reset = () => {
    location.reload(true);
}