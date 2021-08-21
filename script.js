// // Game Suit
// var tanya= true;

// alert('Selamat Datang di Game Suit vs Komputer')
// while(tanya){
// 	// Menyimpan File User
// 	var player=prompt('Masukkan Pilihan: \n(Batu ; Gunting ; Kertas)\n(Huruf Besar dan Kecil Berpengaruh)');

// 	// Menyimpan File Komputer
// 	var comp = Math.random();
// 	if(comp<0.34){
// 		comp='Batu';
// 	}
// 	else if(comp>=0.34 && comp<0.66){
// 		comp='Gunting';
// 	}
// 	else{
// 		comp='Kertas';
// 	}

// 	// Kondisi Permainan
// 	var hasil='';
// 	if(player==comp){
// 		hasil= 'SERI!';
// 	}
// 	else if(player=='Batu'){
// 		hasil = (comp =='Gunting') ? 'MENANG!' : 'KALAH!';
// 	}
// 	else if(player=='Gunting'){
// 		hasil = (comp =='Batu') ? 'KALAH!' : 'MENANG!';
// 	}
// 	else if(player=='Kertas'){
// 		hasil = (comp =='Batu') ? 'MENANG!' : 'KALAH!';
// 	}
// 	else{
// 		hasil = 'Inputan yang dimasukkan tidak sesuai Pilihan';
// 	}

// 	// Menampilkan isi
// 	alert('Anda Memilih '+player+' Komputer Memilih '+comp+'\nHasilnya '+hasil);
// 	tanya=confirm('Main Lagi?');
// }
// alert('Terimakasih Telah Bermain');
//

// Suwit Versi 2.0
function getPilihanKomputer() {
  // Menyimpan File Komputer
  const comp = Math.random();

  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.66) return "orang";
  return "semut";
  //sama artinya dengan if else if, cara membacanya, misal kita punya sebuah bilangan random 0.7, maka apakah 0.7 < 0.34? karena tidak ia masuk ke if kedua, apakah 0.7 lebih dari sama dengan 0.34 && < dari 0.67? karena tidak, maka secara otomais akan direturn nilai semut
}

function getHasil(comp, player) {
  if (player == comp) return "SERI!";
  if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
  if (player == "orang") return comp == "gajah" ? "KALAH!" : "MENANG!";
  if (player == "semut") return comp == "orang" ? "KALAH!" : "MENANG!";
}

function putar() {
  const imgKomputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime(); // untuk mendapatkan/menangkap waktu saat ini
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgKomputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

// CARA DENGAN MENGGUNAKAN PERULANGAN DAN LEBIH EFEKTIF
const pilihan = document.querySelectorAll("li img");
let win = 1;
let lose = 1;
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);

    putar();

    setTimeout(function () {
      const imgKomputer = document.querySelector(".img-komputer");
      imgKomputer.setAttribute("src", "img/" + pilihanKomputer + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = hasil;

      // menambahkan skor
      const skorKomputer = document.querySelector(".skorKomputer");
      const skorPlayer = document.querySelector(".skorPlayer");

      if (hasil == "MENANG!") {
        skorPlayer.innerHTML = win++;
      }
      if (hasil == "KALAH!") {
        skorKomputer.innerHTML = lose++;
      }
    }, 1000);
  });
});

// CARA YANG BIASA DAN TIDAK TERLALU EFEKTIF

// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click',function(){
// 	const pilihanKomputer = getPilihanKomputer();
// 	const pilihanPlayer = pGajah.className;
// 	const hasil = getHasil(pilihanKomputer,pilihanPlayer);

// 	const imgKomputer = document.querySelector('.img-komputer');
// 	imgKomputer.setAttribute('src','img/' + pilihanKomputer + '.png');

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click',function(){
// 	const pilihanKomputer = getPilihanKomputer();
// 	const pilihanPlayer = pOrang.className;
// 	const hasil = getHasil(pilihanKomputer,pilihanPlayer);

// 	const imgKomputer = document.querySelector('.img-komputer');
// 	imgKomputer.setAttribute('src','img/' + pilihanKomputer + '.png');

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click',function(){
// 	const pilihanKomputer = getPilihanKomputer();
// 	const pilihanPlayer = pSemut.className;
// 	const hasil = getHasil(pilihanKomputer,pilihanPlayer);

// 	const imgKomputer = document.querySelector('.img-komputer');
// 	imgKomputer.setAttribute('src','img/' + pilihanKomputer + '.png');

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });
