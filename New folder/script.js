const toggle_btn = document.querySelector('.toggle_btn')
const togglebtnicon = document.querySelector('.toggle_btn i')
const dropdownmenu = document.querySelector('.dropdown_menu')

toggle_btn.onclick = function (){
    dropdownmenu.classList.toggle('open')
    const isOpen = dropdownmenu.classList.contains('open')

    togglebtnicon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}