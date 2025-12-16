localStorage.setItem("loginUser", JSON.stringify({
  id: "U001",
  nama: "Diana",
  email: "diana@gmail.com",
  photo: "profile.jpg" // bisa diganti upload user
}));

window.location.href = "signup.html";



// ===============================
// HALAMAN HOME DASHBOARD
// ===============================
function loadHomeDashboard() {
    document.getElementById("dashboardBox").innerHTML = `
        <div id="dashboardContainer">
            <img src="${userData.foto}" class="profile-img-large">

            <h2>${userData.nama}</h2>
            <p>Email: ${userData.email}</p>
            <p>No HP: ${userData.hp}</p>

            <div class="info-box">
                <b>Level:</b> ${userData.level}<br>
                <b>Poin:</b> ${userData.point}<br>
                <b>Pesanan:</b> ${userData.pesanan}
            </div>

            <button class="btn btn-edit" onclick="loadEditProfile()">Edit Profil</button>
            <button class="btn btn-order" onclick="loadRiwayat()">Riwayat Pesanan</button>
            <button class="btn btn-logout" onclick="loadLogout()">Logout</button>
        </div>
    `;
}

// ===============================
// HALAMAN EDIT PROFILE
// ===============================
function loadEditProfile() {
    document.getElementById("dashboardBox").innerHTML = `
        <div class="page-center">
            <h2>Edit Profil</h2>

            <img src="${userData.foto}" class="profile-img-large">

            <label>Nama :</label>
            <input type="text" id="editNama" value="${userData.nama}" class="input-box">

            <label>Email :</label>
            <input type="email" id="editEmail" value="${userData.email}" class="input-box">

            <label>No HP :</label>
            <input type="text" id="editHp" value="${userData.hp}" class="input-box">

            <button class="btn btn-save" onclick="saveProfile()">Simpan</button>

            <button class="btn btn-back" onclick="window.location.href='home.html'">Kembali ke Home</button>
        </div>
    `;
}

// SIMPAN PROFILE
function saveProfile() {
    userData.nama = document.getElementById("editNama").value;
    userData.email = document.getElementById("editEmail").value;
    userData.hp = document.getElementById("editHp").value;

    alert("Profil berhasil diperbarui!");
    loadHomeDashboard();
}

// ===============================
// HALAMAN RIWAYAT PESANAN
// ===============================
function loadRiwayat() {
    document.getElementById("dashboardBox").innerHTML = `
        <div class="page-center">
            <h2>Riwayat Pesanan</h2>

            <p>Belum ada pesanan yang dibuat.</p>

            <button class="btn btn-back" onclick="window.location.href='home.html'">
                Kembali ke Home
            </button>
        </div>
    `;
}

// ===============================
// HALAMAN LOGOUT
// ===============================
function loadLogout() {
    document.getElementById("dashboardBox").innerHTML = `
        <div class="page-center">
            <h2>Anda telah logout</h2>
            <p>Terima kasih telah menggunakan layanan kami.</p>

            <button class="btn btn-back" onclick="window.location.href='home.html'">
                Login Kembali
            </button>
        </div>
    `;
}

// ===============================
// DEFAULT TAMPILKAN HOME
// ===============================
loadHomeDashboard();
