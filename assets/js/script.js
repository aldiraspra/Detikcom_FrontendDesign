$(document).ready(function () {
  // Initialize the Bootstrap carousel
  var carousel = $('#carouselExampleFade').carousel();

  // Inisialisasi filter pada sub-gallery-image pertama
  $('.sub-gallery-image').eq(0).addClass('active').css('filter', 'grayscale(0)');
  $('.sub-gallery-image').not(':eq(0)').css('filter', 'grayscale(100%)');

  // Menangani peristiwa slide pada carousel
  $('#carouselExampleFade').on('slide.bs.carousel', function (event) {
    // Dapatkan indeks slide yang baru aktif
    var activeIndex = $(event.relatedTarget).index('.carousel-item');

    // Mengatur filter pada sub-gallery-image
    $('.sub-gallery-image').removeClass('active').css('filter', 'grayscale(100%)');
    $('.sub-gallery-image').eq(activeIndex).addClass('active').css('filter', 'grayscale(0)');
  });

  // Menangani klik pada sub-gallery-image
  $('.sub-gallery-image').on('click', function () {
    // Dapatkan indeks sub-gallery-image yang diklik
    var clickedIndex = $(this).index('.sub-gallery-image');

    // Mengaktifkan item carousel yang sesuai (dengan penyesuaian indeks)
    carousel.carousel(clickedIndex);

    // Reset semua sub-gallery images ke warna
    $('.sub-gallery-image').css('filter', 'grayscale(100%)');

    // Terapkan efek grayscale ke sub-gallery image yang diklik
    $(this).css('filter', 'grayscale(0)');
  });
});



//NAVBAR BERITA
document.addEventListener("DOMContentLoaded", function () {
  
  // Ambil semua elemen navbar-berita-item
  const navbarItems = document.querySelectorAll(".navbar-berita-item");

  // Tambahkan event listener untuk setiap elemen
  navbarItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Hapus kelas aktif dari semua elemen
      navbarItems.forEach(function (otherItem) {
        otherItem.classList.remove("navbar-berita-item-clicked");
        otherItem.style.cursor = "pointer"; // Set the cursor to default for all items
      });

      // Tambahkan kelas aktif pada elemen yang diklik
      item.classList.add("navbar-berita-item-clicked");

      // Dapatkan tipe konten yang dipilih
      const contentType = item.getAttribute("data-content-type");

      // Dapatkan semua elemen timestamp-overlay
      const timestampOverlays = document.querySelectorAll(".timestamp-overlay");

      // Sembunyikan semua timestamp-overlay terlebih dahulu
      timestampOverlays.forEach(function (timestampOverlay) {
        timestampOverlay.style.display = "none";
      });

      // Tampilkan timestamp yang sesuai dengan tipe konten yang dipilih
      if (contentType === "artikel") {
        // Tidak ada timestamp yang ditampilkan untuk artikel
      } else if (contentType === "foto") {
        // Tampilkan timestamp untuk foto
        const fotoTimestamps = document.querySelectorAll(".foto.timestamp-overlay");
        fotoTimestamps.forEach(function (timestampOverlay) {
          timestampOverlay.style.display = "flex";
        });
      } else if (contentType === "video") {
        // Tampilkan timestamp untuk video
        const videoTimestamps = document.querySelectorAll(".video.timestamp-overlay");
        videoTimestamps.forEach(function (timestampOverlay) {
          timestampOverlay.style.display = "flex";
        });
      }

      // Set the cursor to default for the clicked item
      item.style.cursor = "default";
    });
  });
});



