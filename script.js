let searchForm = document.querySelector('.search-form'); 
document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active');
    shoppingcart.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
    
}
let shoppingcart = document.querySelector('.shopping-cart'); 
document.querySelector('#cart-btn').onclick=()=>{
    shoppingcart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
    
}
let loginform = document.querySelector('.login-form'); 
document.querySelector('#login-btn').onclick=()=>{
    loginform.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingcart.classList.remove('active');
    navbar.classList.remove('active');
 
    
}
let navbar = document.querySelector('.navbar'); 
document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingcart.classList.remove('active');
    loginform.classList.remove('active');
}
window.onscroll=()=>{
    searchForm.classList.remove('active');
    shoppingcart.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
    
}





// scroll sections
let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top =window.scrollY;
        let offset = sec.offsetTop -100;
        let height =sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top>=offset && top < offset + height){
            //action navbar links
            navLinks.forEach(Links =>{
                Links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').claaList.add('active');
            })
            
        }
    })
}


