const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')


const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src="Computer.jpg">'
    title.innerHTML = 'Web-Developer.'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium laborum non enim quia? Maiores, consequuntur.'
    profile_img.innerHTML = '<img src="Bunyod.jpg" alt="">'
    name.innerHTML = 'Bunyod Duschonov'
    date.innerHTML = 'May 07 , 2021'

    animated_bgs.forEach(bg => bg.classList.remove('animeted-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animeted-bg-text'))
}