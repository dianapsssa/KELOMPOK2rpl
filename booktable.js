let keranjang = [];
let total = 0;

document.querySelectorAll(".add-btn").forEach(btn => {
  btn.addEventListener("click", function() {
    let nama = this.dataset.name;
    let harga = parseInt(this.dataset.price);

    // cek apakah menu sudah ada di keranjang
    let item = keranjang.find(i => i.nama === nama);

    if (item) {
      item.qty++;
    } else {
      keranjang.push({ nama: nama, harga: harga, qty: 1 });
    }

    updateKeranjang();
  });
});

function updateKeranjang() {
    document.getElementById("checkoutBtn").addEventListener("click", function () {

    // simpan keranjang ke localStorage
    localStorage.setItem("keranjang", JSON.stringify(keranjang));

    // simpan total harga
    localStorage.setItem("totalHarga", total);

    // simpan metode pembayaran bila ada
    let metodePembayaran = document.querySelector("#metodePembayaran");
    if (metodePembayaran) {
        localStorage.setItem("metodePembayaran", metodePembayaran.value);
    }

    // pindah ke nota.html
    window.location.href = "nota.html";
});
  let tbody = document.querySelector("#tabelKeranjang tbody");
  tbody.innerHTML = "";

  total = 0;

  keranjang.forEach(item => {
    let subtotal = item.harga * item.qty;
    total += subtotal;

    tbody.innerHTML += `
      <tr>
        <td>${item.nama}</td>
        <td>${item.qty}</td>
        <td>Rp ${subtotal.toLocaleString()}</td>
      </tr>
    `;
  });

  document.getElementById("totalHarga").innerText = total.toLocaleString();
}