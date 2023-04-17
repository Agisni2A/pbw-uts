document.title = "Warteg Nyong";

function cardFood(foods) {
  // ambil nilai dari select element dan input element
  const kategoriFilter = document.getElementById("kategori-filter").value;
  const namaMknSearch = document
    .getElementById("namaMkn-search")
    .value.toLowerCase();

  // filter array foods berdasarkan kategori dan nama makanan
  const filteredFoods = foods.filter((food) => {
    const isKategoriMatch =
      kategoriFilter === "semua" || food.kategori === kategoriFilter;
    const isNamaMknMatch = food.namaMkn.toLowerCase().includes(namaMknSearch);
    return isKategoriMatch && isNamaMknMatch;
  });

  // generate HTML untuk setiap food-card yang sesuai
  const html = filteredFoods
    .map(
      (food) => `
        <div class="food-card">
          <div class="food-image">
            <img src="${food.gambar}" alt="${food.namaMkn}" />
          </div>
          <div class="food-namaMkn">
            <p class="namaMkn">${food.namaMkn}</p>
            <h5>${food.harga}</h5>
          </div>
        </div>
      `
    )
    .join("");

  // tampilkan hasil filter pada element dengan id "product"
  document.getElementById("product").innerHTML = html;
}

// Daftar objek untuk setiap food-card
const foods = [
  {
    namaMkn: "Nasi Putih",
    harga: "Rp.6.000",
    kategori: "nasi",
    gambar:
      "https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/IDITE2020022510544027060/detail/b619eeef43c547a99a6485b197427309_1588053269444968069.webp",
  },
  {
    namaMkn: "Paket Nasi + Ikan Bawal Goreng + Tumis",
    harga: "Rp.17.000",
    kategori: "nasi",
    gambar:
      "https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/IDITE2020051808414931453/detail/4eee7dbae19f402197ca262bf6c9d73f_1654436537019119239.webp",
  },
  {
    id: 1,
    namaMkn: "Ayam Kecap",
    harga: "Rp.10.000",
    kategori: "lauk",
    gambar:
      "https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/IDITE2020022510312147160/detail/06353009bca5421b88710eb661281a47_1587304781522732975.webp",
  },
  {
    namaMkn: "Ayam Goreng",
    harga: "Rp.9.000",
    kategori: "lauk",
    gambar:
      "https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/IDITE2020022510174115083/detail/ab6ad549a6424759942e201bbbfb4b53_1590046907089629450.webp",
  },
  {
    namaMkn: "Ikan Patin Goreng",
    harga: "Rp.9.000",
    kategori: "lauk",
    gambar:
      "https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/IDITE2020022510362253523/detail/ec74848ce99e4a439898f2d34cdea49c_1588084350712916229.webp",
  },
  {
    namaMkn: "Ikan Patin Balado",
    harga: "Rp.8.000",
    kategori: "lauk",
    gambar:
      "https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/IDITE2020022510370060255/detail/99e62f2b15fb45b888a97c7bd97c9326_1599659013561998972.webp",
  },
  {
    namaMkn: "Ikan Bawal Balado",
    harga: "Rp.8.000",
    kategori: "lauk",
    gambar:
      "https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/IDITE2020051808445428844/detail/73972acd5b4e4e0996ad423299e9b860_1602122920073317394.webp",
  },
  {
    namaMkn: "Chicken",
    harga: "Rp.8.000",
    kategori: "lauk",
    gambar:
      "https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/IDITE2020070805171530455/detail/143cf539b4144dd3b8103b052ea59a38_1650446542750514185.webp",
  },
  {
    namaMkn: "Ikan Bawal Goreng",
    harga: "Rp.8.000",
    kategori: "lauk",
    gambar:
      "https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/IDITE2020051808445428844/detail/73972acd5b4e4e0996ad423299e9b860_1602122920073317394.webp",
  },
  {
    namaMkn: "Tumis Buncis Tempe",
    harga: "Rp.3.000",
    kategori: "lauk",
    gambar:
      "https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/IDITE2020022902525600874/detail/1b8566201f834d3db84f49a5fab03b58_1588050295693481232.webp",
  },
  {
    namaMkn: "Ikan Lele Balado",
    harga: "Rp.8.000",
    kategori: "lauk",
    gambar:
      "https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/IDITE2020022510382642002/detail/6f9266f4c46942a38f38d21d84bf532c_1602122919848460676.webp",
  },
  {
    namaMkn: "Pindang Tongkol",
    harga: "Rp.4.000",
    kategori: "lauk",
    gambar:
      "https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/IDITE2020022510392909098/detail/504999d9e4e94e9ab32331799387df1f_1602490227859351178.webp",
  },
  {
    namaMkn:'Telor Ceplok Goreng',
    harga:'Rp.4.500',
    kategori:'lauk',
    gambar:'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/IDITE2020022510505820915/detail/ffb2e70a718144a9adce968177ab9370_1595799365855485411.webp'
  },
  {
    namaMkn:'Telor Dadar',
    harga:'Rp.4.500',
    kategori:'lauk',
    gambar:'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/IDITE2020022510513499383/detail/adfa6abc416244aba5e75d80ae41ea7f_1587410687382958743.webp'
  },
  {
    namaMkn:'Tahu Goreng',
    harga:'Rp.1.500',
    kategori:'gorengan',
    gambar:'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/IDITE2020022510051735505/detail/c2d33cc223124023b9b408138fb8e753_1595798489063575349.webp'
  },
  {
    namaMkn: "Kentang Mustofa",
    harga: "Rp.4.000",
    kategori: "lauk",
    gambar:
      "https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/IDITE2020022510065109899/detail/6f26a6fb4504490e8683870297c97e80_1669542464738724745.webp",
  },
  {
    namaMkn: "Tempe Goreng",
    harga: "Rp.1.500",
    kategori: "gorengan",
    gambar:
      "https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/IDITE2020022510023790899/detail/7d48091e87254d28b5aae17955317026_1602122919324694290.webp",
  },
  {
    namaMkn: "Es Teh Manis",
    harga: "Rp.4.000",
    kategori: "minuman",
    gambar:
      "https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/IDITE2020022511244457007/detail/ade21b06ff0d4e58ab55cc826a017abd_1587301627629242096.webp",
  },
  {
    namaMkn: "Teh Manis Anget",
    harga: "Rp.4.000",
    kategori: "minuman",
    gambar:
      "https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/IDITE2020022511282143345/detail/252f4ca1d75344fb8656c92b1779325a_1618908835944538753.webp",
  },
  {
    namaMkn: "Es Kuku Bima",
    harga: "Rp.5.000",
    kategori: "minuman",
    gambar:
      "https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/IDITE2020022511222726303/detail/b2e96ad313cb49e5b624bc77814f75d6_1590210388467731388.webp",
  },
  {
    namaMkn: "Es Kuku Bima + Susu",
    harga: "Rp.8.000",
    kategori: "minuman",
    gambar:
      "https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/IDITE2020022511231348386/detail/1661e32b5dbc41c7aa86f4f2f8578ba4_1590210388475884790.webp",
  },
  {
    namaMkn: "Telor Bulat Balado",
    harga: "Rp.4.500",
    kategori: "lauk",
    gambar:
      "https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/IDITE2020022510491873326/detail/79e1d4c848644220a1304ca87d18b6cc_1587410612681138205.webp",
  },
  {
    namaMkn: "Perkedel Kentang",
    harga: "Rp.2.500",
    kategori: "lauk",
    gambar:
      "https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/IDITE2020022510115115242/detail/353cdb2833c24523960c3035d99924b7_1590131525261451386.webp",
  },
  {
    namaMkn: "Tahu Balado",
    harga: "Rp.2000",
    kategori: "lauk",
    gambar:
      "https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/IDITE2020022509592787417/detail/1497d5f0ac394864b14d2fc4f782b73c_1588044453120310975.webp",
  },
  {
    namaMkn: "Capcai",
    harga: "Rp.4.000",
    kategori: "lauk",
    gambar:
      "https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/IDITE2020022509475619457/detail/63a47ffa80ac496490cb1e1daff25bb4_1587375354901271259.webp",
  },
  {
    namaMkn: "Sayur Nangka",
    harga: "Rp.3000",
    kategori: "lauk",
    gambar:
      "https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/IDITE2020022509483016002/detail/c82cf2a16be7438a9cffb0a04ecde504_1588952133483316111.webp",
  },
  {
    namaMkn: "Tumis Kacang Panjang",
    harga: "Rp.3000",
    kategori: "lauk",
    gambar:
      "https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/IDITE2020022509432048930/detail/a763105e93e24da1a88d0a2312e693f9_1590926763769498723.webp",
  },
];

cardFood(foods);

document.getElementById("kategori-filter").addEventListener("change", () => {
  cardFood(foods);
});

document.getElementById("namaMkn-search").addEventListener("input", () => {
  cardFood(foods);
});

document.querySelector(".btn").addEventListener("click", function table() {
  if (confirm("Apa kamu ingin memesan meja?")) {
    let nameTable = prompt("Pemesanan meja atas nama ?");
    let person = prompt("Berapa banyak orang dalam 1 meja ?");
    let date = prompt("Di Hari apa kamu ingin memesan meja ?");
    let time = prompt("Di jam berapa kamu ingin memesan meja ?");
    alert(
      "Terimakasih sudah memesan meja di Warteg Nyong\nSelamat untuk " +
        nameTable +
        " pemesanan meja kamu untuk hari " +
        date +
        " di jam " +
        time +
        " berhasil."
    );
  }
});
