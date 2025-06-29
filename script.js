// AOS (Animate On Scroll) Initialization
AOS.init({
    duration: 1000, /* Durasi animasi lebih panjang */
    easing: 'ease-in-out',
    once: true,
    mirror: false /* Animasi hanya berjalan sekali saat pertama kali terlihat */
});

// Navbar Toggle Functionality
document.getElementById("menuToggle").addEventListener("click", function () {
    document.getElementById("navbarMenu").classList.toggle("active");
});

// Close Navbar Menu when a link is clicked (for mobile)
document.querySelectorAll("#navbarMenu a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navbarMenu").classList.remove("active");
    });
});

console.log("Selamat datang di Portofolio Mahardika!");
