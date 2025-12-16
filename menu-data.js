// Ambil data menu dari localStorage
let menuData = JSON.parse(localStorage.getItem("menuData")) || [];

// Simpan menu ke localStorage
function saveMenu(){
  localStorage.setItem("menuData", JSON.stringify(menuData));
}

// Menampilkan menu di menu.html
function loadMenu(){
  const box = document.getElementById("menuList");
  if(!box) return;

  box.innerHTML = "";
  menuData.forEach((m)=>{
    box.innerHTML += `
      <div class="menu-item">
        <img src="${m.img}">
        <h3>${m.name}</h3>
        <p>Rp ${m.price}</p>
      </div>
    `;
  });
}

// Admin: tambah menu
function addMenu(){
  const name = menuName.value;
  const price = menuPrice.value;
  const img = menuImage.value;

  if(!name || !price || !img){
      alert("Lengkapi semua field!");
      return;
  }

  menuData.push({name, price, img});
  saveMenu();

  loadAdminMenu();

  alert("Menu berhasil ditambahkan!");

  // Opsi: langsung update menu.html jika terbuka
  window.dispatchEvent(new Event("storage"));
}

// Tampilkan menu di admin menu
function loadAdminMenu(){
  const box = document.getElementById("adminMenuList");
  if(!box) return;

  box.innerHTML = "";
  menuData.forEach((m, i)=>{
      box.innerHTML += `
        <div class="menu-container">
    <div class="menu-item">
          <strong>${m.name}</strong><br>
          Harga: Rp ${m.price}<br>
          <button onclick="deleteMenu(${i})">Hapus</button>
        </div>
      `;
  });
}

// Hapus menu
function deleteMenu(i){
  menuData.splice(i,1);
  saveMenu();
  loadAdminMenu();
}
