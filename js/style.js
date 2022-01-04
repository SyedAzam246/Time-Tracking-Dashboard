const cards = document.querySelectorAll('.card');
const navLink = document.querySelectorAll('.card-nav-dot');

cards.forEach(e => {
    e.addEventListener('mouseover', () => {
        removeActiveClass();
        e.classList.add('active');
        
    })
  
}) 

function removeActiveClass () {
    
    cards.forEach(e => {
        e.addEventListener('mouseleave', () =>{
            e.classList.remove('active')
        })
        
    })
}