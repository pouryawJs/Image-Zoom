let $ = document

const container = $.querySelector('.container')
const img = $.querySelector('img')

container.addEventListener('mousemove', (event) => {
    
    img.style.scale = 2
    img.style.transformOrigin = `${event.clientX - event.target.offsetLeft}px 
    ${event.clientY - event.target.offsetTop}px`
})
container.addEventListener('mouseleave', () => {
    img.removeAttribute('style')
})