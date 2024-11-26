document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  document.addEventListener("click", (event) => {
    if (!navMenu.contains(event.target) && event.target !== hamburger) {
      navMenu.classList.remove("active");
    }
  });
});

function closeModal() {
  const pesan = document.getElementById("pesan-menu");
  pesan.style.display = "none";
}

document
  .getElementById("booking-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    console.log("Data Pemesanan:", Object.fromEntries(formData));

    alert("Pemesanan Anda telah dikirim!");
    closeModal();
  });
