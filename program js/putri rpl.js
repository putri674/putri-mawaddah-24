var dialog = document.querySelector("dialog");

// Ketika tombol untuk membuka popup diklik
document.querySelector("#open-popup").onclick = function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Cek apakah username dan password diisi
    if (username && password) {
        dialog.showModal(); // Tampilkan dialog
    } 
};

// Ketika tombol "IYA" diklik
document.querySelector(".IYA-btn").onclick = function() {
    dialog.close(); // Tutup dialog
    var username = document.getElementById("username").value; // Ambil username
    var password = document.getElementById("password").value; // Ambil password

    // Cek apakah username dan password benar
    if (username === "putri" && password === "2626") {
        window.location.href = 'halaman_berikutnya.html'; // Arahkan ke halaman berikutnya
    } else {
        alert("username tidak ditemukan"); // Tampilkan pesan kesalahan
    }
};

// Ketika tombol  diklik
document.querySelector("#putri-btn").onclick = function() {
    dialog.close(); // Tutup dialog
    alert("anda tidak login"); // Tampilkan pesan bahwa pengguna tidak login
};