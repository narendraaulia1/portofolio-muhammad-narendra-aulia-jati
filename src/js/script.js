// Custom Crusor 
document.body.style.cursor = "url('/src/cur/Iron_Sword.cur'),auto";


// Progress Scroll Bar
const line = document.querySelector(".line");

window.onscroll = () => {
    const { innerHeight, scrollY } = window;
    const { clientHeight}=document.body;
    const height = clientHeight -innerHeight;
    const status = (scrollY / height) * 100;
    line.style.width = status + "%";
}


// Animasi Untuk nav responsive
const animates = document.querySelector(".nav-animation");
const width = window.innerWidth;

if(width < 765) {
    animates.classList.add("animate__slideInUp");
}   else if(width < 1024) {
    animates.classList.add("animate__slideInLeft");
}   else {
    animates.classList.add("animate__slideInLeft");
}


// Scroll Function
function scrollToSelection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: 'start'
        });
    }
}

// Menyalin Text
const contactItem = document.querySelectorAll('.contact-item');

contactItem.forEach(item => {
    item.addEventListener('click', () => {
    const text = item.querySelector('p').textContent;

    navigator.clipboard.writeText(text)
    .then(() => alert('Berhasil Menyalin'))
    .catch(() => alert('Gagal Menyalin Text'));
});
});