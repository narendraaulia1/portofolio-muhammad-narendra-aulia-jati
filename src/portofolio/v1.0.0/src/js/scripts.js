// scroll function 
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.navbar a, .beranda a, button[data-target]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Mencegah aksi default dari link

            const targetId = this.getAttribute('data-target'); // Mengambil ID target dari data-target
            const targetElement = document.getElementById(targetId); // Mencari elemen target
            
            targetElement.scrollIntoView({
                behavior: 'smooth' // Scroll dengan efek halus
            });

            // Jika ingin menambahkan pengaturan URL yang bersih tanpa hash, gunakan kode berikut:
            // history.pushState(null, '', window.location.pathname);
        });
    });
});

// Hamburger Button Function
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});

// Scroll Decoration
window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar");
    var space = document.querySelector(".space"); // Pastikan ini sesuai dengan elemen konten Anda

    if (window.scrollY > 0) {
        navbar.classList.add("sticky");
        content.style.paddingTop = "120px"; // Sesuaikan dengan tinggi navbar Anda
    } else {
        navbar.classList.remove("sticky");
        content.style.paddingTop = "0";
    }
});

// FAQ Collapsible
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


