/** @format */

const dropdownMenus = document.querySelectorAll('.dropdown__menu')
const dropdownMenuBtns = document.querySelectorAll('.dropdown__btn')
const dropdownIcons = document.querySelectorAll('.nav__item--dropdown')
let flag = []
dropdownMenuBtns.forEach((btn,index)=>{
	flag.push(true)
	btn.addEventListener('click', ()=>{
		dropdownMenus[index].classList.toggle('dropdown__active')	
		dropdownIcons[index].src = flag[index] ? require('../images/icon-arrow-up.svg') : require('../images/icon-arrow-down.svg')
		flag[index] = !flag[index]
	})
})

const nav = document.querySelector('.nav')
const navOpenBtn = document.querySelector('.btn__menu--open')
const navCloseBtn = document.querySelector('.btn__menu--close')

navOpenBtn.addEventListener('click', ()=>{
	nav.classList.add('nav--active')
})
navCloseBtn.addEventListener('click', ()=>{
	nav.classList.remove('nav--active')
})
