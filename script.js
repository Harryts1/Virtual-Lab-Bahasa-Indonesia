const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("show");
});

document.addEventListener("click", (event) => {
  if (!menuIcon.contains(event.target) && !menuList.contains(event.target)) {
    menuList.classList.remove("show");
  }
});

menuList.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    menuList.classList.remove("show");
  }
});

function togglePlaylist(playlistId) {
  const playlist = document.getElementById(playlistId);
  if (playlist.style.display === "none" || playlist.style.display === "") {
    playlist.style.display = "block";
  } else {
    playlist.style.display = "none";
  }
}

function changeVideo(videoUrl, playerId) {
  var player = document.getElementById(playerId);
  player.src = videoUrl;
}

const selectorButtons = document.querySelectorAll('.selector-btn');
const playlistsContainer = document.getElementById('playlists-container');
const quizzesContainer = document.getElementById('quizzes-container');

selectorButtons.forEach(button => {
  button.addEventListener('click', () => {
    selectorButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const contentType = button.getAttribute('data-content');
    if (contentType === 'playlists') {
      playlistsContainer.style.display = 'block';
      quizzesContainer.style.display = 'none';
    } else {
      playlistsContainer.style.display = 'none';
      quizzesContainer.style.display = 'block';
    }
  });
});

const quizData = {  
  bab2: [
    {
      question: "Manakah penulisan yang benar?",
      options: [
        "di mana", 
        "dimana", 
        "di-mana", 
        "di mana-mana"
      ],
      correct: 0,
      explanation: "Kata tanya 'di mana' ditulis terpisah."
    },
    {
      question: "Bagaimana cara menulis bilangan tingkat yang benar?",
      options: [
        "ke 2", 
        "ke-2", 
        "Ke-2", 
        "ke2"
      ],
      correct: 1,
      explanation: "Bilangan tingkat ditulis dengan 'ke-' diikuti angka, seperti 'ke-2'."
    },
    {
      question: "Dalam penulisan unsur serapan, manakah yang benar?",
      options: [
        "system", 
        "sistim", 
        "cistem", 
        "sistem"
      ],
      correct: 3,
      explanation: "'Sistem' adalah bentuk serapan yang benar dalam bahasa Indonesia dari kata 'system'."
    },

    {
      question: "Manakah contoh penggunaan huruf miring yang benar?",
      options: [
        "Kata serapan seperti defacto harus ditulis miring", 
        "Judul buku selalu ditulis dengan huruf miring", 
        "Kata asing yang belum diserap ke dalam bahasa Indonesia ditulis miring", 
        "Semua kata dalam bahasa daerah harus ditulis miring"
      ],
      correct: 2,
      explanation: "Huruf miring digunakan untuk kata asing yang belum diserap ke dalam bahasa Indonesia."
    },
    {
      question: "Bagaimana penulisan yang benar untuk imbuhan dan kata depan?",
      options: [
        "diatas, dibawah", 
        "di atas, di bawah", 
        "diAtas, diBawah", 
        "Di atas, Di bawah"
      ],
      correct: 1,
      explanation: "Kata depan 'di' ditulis terpisah dari kata yang mengikutinya, seperti 'di atas' dan 'di bawah'."
    },
    {
      question: "Pilih penulisan yang benar:",
      options: [
        "akibat nya", 
        "akibatnya", 
        "akibat-nya", 
        "a-kibat-nya"
      ],
      correct: 1,
      explanation: "'Akibatnya' dengan akhiran '-nya' ditulis serangkai."
    },
    {
      question: "Dalam penulisan huruf kapital, manakah yang benar?",
      options: [
        "saya Tinggal di jakarta", 
        "Saya tinggal Di Jakarta", 
        "Saya Tinggal di Jakarta", 
        "saya tinggal di Jakarta"
      ],
      correct: 2,
      explanation: "Huruf kapital digunakan pada awal kalimat dan nama tempat (Jakarta)."
    },
    {
      question: "Kapan huruf kapital digunakan dalam penulisan nama geografi?",
      options: [
        "Selalu untuk semua kata dalam nama geografi", 
        "Hanya untuk kata pertama dalam nama geografi", 
        "Untuk setiap kata kecuali kata penghubung", 
        "Tidak pernah digunakan dalam nama geografi"
      ],
      correct: 2,
      explanation: "Dalam nama geografi, setiap kata ditulis dengan huruf kapital kecuali kata penghubung seperti 'di', 'ke', 'dari', dll."
    },
    {
      question: "Manakah yang benar?",
      options: [
        "bilamana", 
        "bila mana", 
        "bila-mana", 
        "bila/mana"
      ],
      correct: 0,
      explanation: "'Bilamana' adalah kata penghubung yang ditulis serangkai."
    },
    {
      question: "Pilih penulisan yang benar:",
      options: [
        "oleh karena itu", 
        "olehkarenaitu", 
        "oleh-karena-itu", 
        "oleh_karena_itu"
      ],
      correct: 0,
      explanation: "'Oleh karena itu' adalah ungkapan penghubung antarkalimat yang ditulis terpisah."
    }
  ],
  bab3: [
    {
      question: "Manakah kalimat yang menggunakan tata bahasa yang benar?",
      options: [
        "Saya dan dia pergi ke pasar.",
        "Saya dan dia pergi kepasar.",
        "Saya dan dia pergi ke-pasar.",
        "Saya dan dia pergi pasar."
      ],
      correct: 0,
      explanation: "Kata depan 'ke' dalam konteks tempat seperti 'ke pasar' harus ditulis terpisah dari kata yang mengikutinya."
    },
    {
      question: "Bagaimana penulisan yang benar untuk kata 'saling'?",
      options: [
        "saling",
        "sa-ling",
        "sa ling",
        "saling-saling"
      ],
      correct: 0,
      explanation: "'Saling' adalah kata ganti yang tidak dipisah atau diulang dalam penggunaannya."
    },
    {
      question: "Manakah kalimat yang menggunakan preposisi dengan tepat?",
      options: [
        "Dia datang dengan menggunakan mobil.",
        "Dia datang menggunakan mobil.",
        "Dia datang dengan mobil.",
        "Dia datang mobil."
      ],
      correct: 2,
      explanation: "Preposisi 'dengan' digunakan untuk alat atau sarana, jadi penulisan yang tepat adalah 'dengan mobil'."
    },
    {
      question: "Bagaimana penulisan yang benar untuk 'di bawah' dan 'di atas'?",
      options: [
        "dibawah, diatas",
        "di bawah, di atas",
        "Di Bawah, Di Atas",
        "di-bawah, di-atas"
      ],
      correct: 1,
      explanation: "Kata depan 'di' harus dipisah dari kata yang mengikutinya, seperti 'di bawah' dan 'di atas'."
    },
    {
      question: "Manakah bentuk kata yang benar?",
      options: [
        "me-lakukan",
        "me lakukan",
        "melakukan",
        "me laku-kan"
      ],
      correct: 2,
      explanation: "'Melakukan' adalah bentuk kata kerja yang benar dan ditulis serangkai."
    },
    {
      question: "Bagaimana penulisan yang benar untuk kata 'di mana'?",
      options: [
        "dimana",
        "di-mana",
        "di mana",
        "di-mana-mana"
      ],
      correct: 2,
      explanation: "Kata tanya 'di mana' ditulis terpisah."
    },
    {
      question: "Manakah penggunaan imbuhan yang tepat?",
      options: [
        "me-ngatakan",
        "me ngatakan",
        "meng-atakan",
        "mengatakan"
      ],
      correct: 3,
      explanation: "'Mengatakan' ditulis serangkai karena imbuhan 'meng-' harus melekat pada kata dasar."
    },
    {
      question: "Bagaimana penulisan yang benar untuk ungkapan 'oleh karena itu'?",
      options: [
        "olehkarenaitu",
        "oleh-karena-itu",
        "oleh karena itu",
        "oleh_karena_itu"
      ],
      correct: 2,
      explanation: "'Oleh karena itu' adalah ungkapan penghubung antarkalimat yang ditulis terpisah."
    },
    {
      question: "Manakah bentuk kata yang benar?",
      options: [
        "ber-jalan",
        "berjalan",
        "ber jalan",
        "be-jalan"
      ],
      correct: 1,
      explanation: "'Berjalan' adalah kata kerja yang ditulis serangkai."
    },
    {
      question: "Bagaimana penulisan yang tepat untuk kata 'bilamana'?",
      options: [
        "bila mana",
        "bila-mana",
        "bila/mana",
        "bilamana"
      ],
      correct: 3,
      explanation: "'Bilamana' adalah kata penghubung yang ditulis serangkai."
    }
  ],
  bab4: [
    {
      question: "Bagian mana yang biasanya muncul pertama dalam struktur karya ilmiah?",
      options: [
        "Pendahuluan",
        "Abstrak",
        "Daftar Pustaka",
        "Kesimpulan"
      ],
      correct: 1,
      explanation: "Abstrak biasanya muncul pertama kali dalam karya ilmiah, memberikan gambaran singkat tentang keseluruhan penelitian."
    },
    {
      question: "Manakah ciri kalimat ragam ilmiah yang benar?",
      options: [
        "Menggunakan bahasa percakapan sehari-hari",
        "Tidak perlu menggunakan kalimat pasif",
        "Boleh menggunakan kata-kata informal",
        "Harus menggunakan istilah-istilah teknis"
      ],
      correct: 3,
      explanation: "Kalimat ragam ilmiah harus menggunakan istilah teknis untuk menyampaikan konsep-konsep yang spesifik dan tepat."
    },
    {
      question: "Bagaimana cara menghindari kalimat taksa?",
      options: [
        "Menggunakan kata-kata yang ambigu",
        "Menyusun kalimat secara sederhana",
        "Menghindari penggunaan konjungsi",
        "Memisahkan kalimat menjadi dua"
      ],
      correct: 1,
      explanation: "Kalimat taksa (ambiguous) dapat dihindari dengan menyusun kalimat sederhana dan jelas agar makna yang dimaksud tidak ganda."
    },
    {
      question: "Apa ciri kalimat mubazir?",
      options: [
        "Menggunakan terlalu banyak kata",
        "Tidak memiliki subjek atau predikat",
        "Tidak memiliki hubungan logis",
        "Menggunakan kata-kata tidak baku"
      ],
      correct: 0,
      explanation: "Kalimat mubazir adalah kalimat yang menggunakan terlalu banyak kata yang tidak diperlukan, sehingga tidak efisien."
    },
    {
      question: "Apa yang dimaksud dengan kalimat nirlogis?",
      options: [
        "Kalimat yang tidak masuk akal",
        "Kalimat yang tidak lengkap",
        "Kalimat yang tidak paralel",
        "Kalimat yang tidak efektif"
      ],
      correct: 0,
      explanation: "Kalimat nirlogis adalah kalimat yang tidak masuk akal atau bertentangan dengan logika, sehingga sulit dipahami."
    },
    {
      question: "Manakah ciri kalimat nirlengkap?",
      options: [
        "Tidak memiliki subjek atau predikat",
        "Tidak memiliki konjungsi",
        "Tidak memiliki unsur pokok kalimat",
        "Tidak memiliki kata kerja"
      ],
      correct: 2,
      explanation: "Kalimat nirlengkap adalah kalimat yang tidak memiliki unsur pokok seperti subjek atau predikat, membuatnya tidak lengkap."
    },
    {
      question: "Apa yang dimaksud dengan kalimat tidak sejajar?",
      options: [
        "Kalimat yang struktur gramatikal tidak konsisten",
        "Kalimat yang menggunakan bahasa tidak baku",
        "Kalimat yang tidak efektif menyampaikan informasi",
        "Kalimat yang tidak memiliki kesatuan makna"
      ],
      correct: 0,
      explanation: "Kalimat tidak sejajar terjadi ketika struktur gramatikal dalam satu kalimat tidak konsisten atau tidak paralel."
    },
    {
      question: "Manakah ciri kalimat efektif?",
      options: [
        "Kalimat yang pendek dan singkat",
        "Kalimat yang menggunakan struktur pasif",
        "Kalimat yang hanya memiliki subjek dan predikat",
        "Kalimat yang jelas, padat, dan logis"
      ],
      correct: 3,
      explanation: "Kalimat efektif adalah kalimat yang jelas, padat, dan logis, serta mampu menyampaikan informasi dengan efisien."
    },
    {
      question: "Bagaimana cara membangun kohesi dalam paragraf?",
      options: [
        "Menggunakan kalimat-kalimat yang tidak berhubungan",
        "Mengulangi kata-kata kunci dalam setiap kalimat",
        "Menghindari penggunaan kata penghubung",
        "Memasukkan kalimat-kalimat tidak relevan"
      ],
      correct: 1,
      explanation: "Kohesi dalam paragraf dibangun dengan mengulangi kata-kata kunci atau menggunakan kata penghubung untuk menjaga keterhubungan ide."
    },
    {
      question: "Apa fungsi kalimat topik dalam paragraf?",
      options: [
        "Menyampaikan ide utama paragraf",
        "Memberikan contoh-contoh pendukung",
        "Menjelaskan kalimat-kalimat sebelumnya",
        "Menyimpulkan isi paragraf"
      ],
      correct: 0,
      explanation: "Kalimat topik menyampaikan ide utama dari sebuah paragraf dan menjadi pengarah bagi kalimat-kalimat penjelas selanjutnya."
    }
  ],
  bab5: [
    {
      question: "Apa yang dimaksud dengan paragraf deduktif?",
      options: [
        "Paragraf yang dimulai dengan kalimat utama",
        "Paragraf yang dimulai dengan kalimat penjelas",
        "Paragraf yang dimulai dengan kalimat transisi",
        "Paragraf yang diakhiri dengan kalimat utama"
      ],
      correct: 0,
      explanation: "Paragraf deduktif dimulai dengan kalimat utama yang mengemukakan gagasan utama, diikuti oleh kalimat-kalimat penjelas."
    },
    {
      question: "Manakah ciri paragraf induktif?",
      options: [
        "Dimulai dengan kalimat umum, diikuti kalimat khusus",
        "Dimulai dengan kalimat khusus, diikuti kalimat umum",
        "Seluruh kalimat merupakan kalimat penjelas",
        "Tidak memiliki kalimat utama, hanya kalimat penjelas"
      ],
      correct: 1,
      explanation: "Paragraf induktif dimulai dengan kalimat-kalimat khusus (contoh, bukti), diakhiri dengan kalimat umum yang menyimpulkan."
    },
    {
      question: "Apa fungsi kalimat transisi dalam paragraf?",
      options: [
        "Menyampaikan ide utama paragraf",
        "Menghubungkan antar kalimat dalam paragraf",
        "Memberikan contoh-contoh pendukung",
        "Menyimpulkan isi paragraf"
      ],
      correct: 1,
      explanation: "Kalimat transisi digunakan untuk menghubungkan kalimat-kalimat dalam paragraf agar alur berpikir mudah diikuti."
    },
    {
      question: "Manakah ciri paragraf naratif?",
      options: [
        "Menceritakan peristiwa secara kronologis",
        "Menjelaskan suatu konsep atau definisi",
        "Membandingkan dua hal atau lebih",
        "Menyampaikan argumentasi atau pendapat"
      ],
      correct: 0,
      explanation: "Paragraf naratif digunakan untuk menceritakan peristiwa atau kejadian secara kronologis."
    },
    {
      question: "Apa tujuan utama paragraf deskriptif?",
      options: [
        "Menjelaskan suatu konsep atau definisi",
        "Menceritakan peristiwa secara kronologis",
        "Melukiskan suatu objek, tempat, atau situasi",
        "Menyampaikan argumen atau pendapat"
      ],
      correct: 2,
      explanation: "Paragraf deskriptif bertujuan untuk menggambarkan objek, tempat, atau situasi sehingga pembaca bisa membayangkan dengan jelas."
    },
    {
      question: "Manakah ciri paragraf ekspositori?",
      options: [
        "Menceritakan peristiwa secara berurutan",
        "Membandingkan dua hal atau lebih",
        "Menjelaskan suatu konsep atau definisi",
        "Menyampaikan pendapat atau argumentasi"
      ],
      correct: 2,
      explanation: "Paragraf ekspositori bertujuan untuk menjelaskan atau memberi informasi mengenai suatu konsep atau ide."
    },
    {
      question: "Apa tujuan utama paragraf argumentatif?",
      options: [
        "Menyampaikan informasi secara objektif",
        "Mendeskripsikan suatu objek atau situasi",
        "Meyakinkan pembaca akan suatu pendapat",
        "Menceritakan peristiwa secara kronologis"
      ],
      correct: 2,
      explanation: "Paragraf argumentatif bertujuan untuk meyakinkan pembaca mengenai suatu pendapat atau pandangan."
    },
    {
      question: "Manakah ciri paragraf komparatif?",
      options: [
        "Membandingkan dua hal atau lebih",
        "Menyampaikan pendapat atau argumentasi",
        "Menjelaskan suatu konsep atau definisi",
        "Menceritakan peristiwa secara berurutan"
      ],
      correct: 0,
      explanation: "Paragraf komparatif digunakan untuk membandingkan dua hal atau lebih dengan tujuan menemukan persamaan atau perbedaan."
    },
    {
      question: "Apa fungsi kalimat topik dalam paragraf?",
      options: [
        "Memberikan contoh-contoh pendukung",
        "Menghubungkan antar kalimat dalam paragraf",
        "Menyampaikan ide utama paragraf",
        "Menyimpulkan isi paragraf"
      ],
      correct: 2,
      explanation: "Kalimat topik menyampaikan ide utama dari paragraf dan menjadi inti dari seluruh kalimat penjelas."
    },
    {
      question: "Manakah ciri paragraf campuran?",
      options: [
        "Hanya menggunakan satu pola pengembangan",
        "Menggunakan dua atau lebih pola pengembangan",
        "Tidak memiliki kalimat topik",
        "Tidak memiliki kalimat penjelas"
      ],
      correct: 1,
      explanation: "Paragraf campuran menggunakan dua atau lebih pola pengembangan, seperti deduktif dan induktif dalam satu paragraf."
    }
  ],
  bab6: [
    {
      question: "Apa yang dimaksud dengan karya tulis ilmiah?",
      options: [
        "Tulisan yang bersifat ilmiah dan hanya ditulis oleh para ilmuwan",
        "Tulisan yang menggunakan bahasa formal dan berisi informasi faktual",
        "Tulisan yang membahas suatu topik secara mendalam dengan metode ilmiah",
        "Tulisan yang ditulis untuk kepentingan akademik dan dipublikasikan"
      ],
      correct: 2,
      explanation: "Karya tulis ilmiah adalah tulisan yang membahas suatu topik secara mendalam menggunakan metode ilmiah yang sistematis."
    },
    {
      question: "Apa ciri-ciri karya tulis ilmiah yang baik?",
      options: [
        "Menggunakan bahasa formal, objektif, dan sistematis",
        "Memuat gagasan orisinil dan argumentasi yang logis",
        "Memanfaatkan sumber pustaka yang relevan dan terpercaya",
        "Semua jawaban di atas benar"
      ],
      correct: 3,
      explanation: "Karya tulis ilmiah yang baik memiliki ciri-ciri penggunaan bahasa formal, gagasan yang orisinil, serta sumber pustaka yang terpercaya."
    },
    {
      question: "Apa saja tahapan dalam penulisan karya tulis ilmiah?",
      options: [
        "Memilih topik, menyusun kerangka, menulis draf, merevisi",
        "Merumuskan masalah, mengumpulkan data, menganalisis, menyimpulkan",
        "Menentukan tujuan, mengumpulkan bahan, mengolah data, mempublikasikan",
        "Memilih judul, meneliti literatur, melakukan eksperimen, menyusun laporan"
      ],
      correct: 0,
      explanation: "Tahapan umum dalam penulisan karya ilmiah mencakup memilih topik, menyusun kerangka, menulis draf, dan merevisi tulisan."
    },
    {
      question: "Apa yang dimaksud dengan latar belakang masalah dalam karya tulis ilmiah?",
      options: [
        "Konteks atau alasan yang mendasari pemilihan topik penelitian",
        "Rangkuman teori-teori yang relevan dengan topik penelitian",
        "Penjelasan tentang metode penelitian yang akan digunakan",
        "Simpulan dari hasil penelitian dan pembahasan"
      ],
      correct: 0,
      explanation: "Latar belakang masalah menjelaskan konteks dan alasan mengapa topik penelitian tersebut dipilih dan penting untuk diteliti."
    },
    {
      question: "Apa yang dimaksud dengan kerangka karangan dalam karya tulis ilmiah?",
      options: [
        "Rancangan outline atau struktur penulisan secara menyeluruh",
        "Bagian yang membahas teori-teori yang mendukung penelitian",
        "Uraian tentang langkah-langkah atau prosedur penelitian",
        "Bagian yang menyajikan data, analisis, dan pembahasan hasil"
      ],
      correct: 0,
      explanation: "Kerangka karangan adalah outline atau rancangan struktur keseluruhan karya tulis yang akan ditulis, membantu dalam pengorganisasian ide."
    },
    {
      question: "Apa tujuan utama pendahuluan dalam karya tulis ilmiah?",
      options: [
        "Menjelaskan latar belakang dan rumusan masalah penelitian",
        "Memaparkan metode penelitian yang digunakan",
        "Menyajikan data hasil penelitian dan analisisnya",
        "Memberikan kesimpulan akhir dari penelitian"
      ],
      correct: 0,
      explanation: "Pendahuluan berfungsi untuk menjelaskan latar belakang masalah dan merumuskan masalah yang menjadi fokus penelitian."
    },
    {
      question: "Apa fungsi tinjauan pustaka dalam karya tulis ilmiah?",
      options: [
        "Memaparkan teori-teori yang mendukung penelitian",
        "Menjelaskan metode dan langkah-langkah penelitian",
        "Menyajikan data hasil penelitian yang telah diolah",
        "Memberikan simpulan akhir dari penelitian"
      ],
      correct: 0,
      explanation: "Tinjauan pustaka bertujuan untuk memaparkan teori-teori yang relevan dan mendukung penelitian yang sedang dilakukan."
    },
    {
      question: "Apa yang harus diperhatikan dalam pemilihan topik karya tulis ilmiah?",
      options: [
        "Topik harus baru, menarik, dan belum banyak diteliti",
        "Topik harus sesuai dengan bidang keilmuan penulis",
        "Topik harus aktual dan bermanfaat bagi pembaca",
        "Semua jawaban di atas benar"
      ],
      correct: 3,
      explanation: "Pemilihan topik karya tulis ilmiah harus mempertimbangkan kebaruan, relevansi, dan manfaat bagi pembaca serta penulis."
    },
    {
      question: "Apa tujuan utama pembahasan dalam karya tulis ilmiah?",
      options: [
        "Menjelaskan latar belakang dan rumusan masalah penelitian",
        "Memaparkan teori-teori yang mendukung penelitian",
        "Menyajikan dan menganalisis data hasil penelitian",
        "Memberikan simpulan akhir dari penelitian"
      ],
      correct: 2,
      explanation: "Pembahasan berfungsi untuk menyajikan data hasil penelitian dan menganalisisnya sesuai dengan rumusan masalah."
    },
    {
      question: "Apa yang harus diperhatikan dalam penulisan simpulan karya tulis ilmiah?",
      options: [
        "Simpulan harus menunjukkan jawaban atas rumusan masalah",
        "Simpulan harus mengungkapkan temuan-temuan baru",
        "Simpulan harus mengaitkan dengan implikasi dan saran",
        "Semua jawaban di atas benar"
      ],
      correct: 3,
      explanation: "Simpulan harus merangkum jawaban atas rumusan masalah, mengungkapkan temuan baru, serta memberikan implikasi dan saran."
    }
  ],
  bab7: [
    {
      question: "Apa yang dimaksud dengan topik dalam karya tulis ilmiah?",
      options: [
        "Judul atau subjudul yang dibahas dalam karya tulis",
        "Tema utama yang menjadi fokus pembahasan",
        "Masalah atau fenomena yang diteliti",
        "Semua jawaban di atas benar"
      ],
      correct: 3,
      explanation: "Topik adalah fokus utama yang meliputi judul, masalah, atau fenomena yang dibahas dalam karya tulis ilmiah."
    },
    {
      question: "Apa yang harus diperhatikan dalam memilih topik karya tulis ilmiah?",
      options: [
        "Topik harus baru, menarik, dan belum banyak diteliti",
        "Topik harus sesuai dengan bidang keilmuan penulis",
        "Topik harus aktual dan bermanfaat bagi pembaca",
        "Semua jawaban di atas benar"
      ],
      correct: 3,
      explanation: "Pemilihan topik harus memperhatikan kebaruan, relevansi dengan keilmuan penulis, serta manfaat bagi pembaca."
    },
    {
      question: "Apa yang dimaksud dengan tema dalam karya tulis ilmiah?",
      options: [
        "Judul atau subjudul yang dibahas dalam karya tulis",
        "Masalah atau fenomena yang diteliti",
        "Perspektif atau sudut pandang utama dalam pembahasan",
        "Semua jawaban di atas benar"
      ],
      correct: 2,
      explanation: "Tema merupakan perspektif atau sudut pandang yang digunakan untuk membahas topik dalam karya tulis ilmiah."
    },
    {
      question: "Apa yang harus diperhatikan dalam menetapkan tema karya tulis ilmiah?",
      options: [
        "Tema harus sesuai dengan topik yang dipilih",
        "Tema harus menarik, aktual, dan bermanfaat bagi pembaca",
        "Tema harus memberikan sudut pandang yang jelas dan fokus",
        "Semua jawaban di atas benar"
      ],
      correct: 3,
      explanation: "Tema yang baik harus relevan dengan topik, menarik, aktual, dan memberikan sudut pandang yang jelas dan fokus."
    },
    {
      question: "Apa yang dimaksud dengan kerangka karangan dalam karya tulis ilmiah?",
      options: [
        "Rancangan outline atau struktur penulisan secara menyeluruh",
        "Bagian yang membahas teori-teori yang mendukung penelitian",
        "Uraian tentang langkah-langkah atau prosedur penelitian",
        "Bagian yang menyajikan data, analisis, dan pembahasan hasil"
      ],
      correct: 0,
      explanation: "Kerangka karangan adalah outline atau rancangan struktur penulisan yang mencakup seluruh isi karya tulis ilmiah."
    },
    {
      question: "Apa yang harus diperhatikan dalam menyusun kerangka karangan karya tulis ilmiah?",
      options: [
        "Kerangka harus mencerminkan struktur dan alur pembahasan",
        "Kerangka harus mencakup seluruh komponen karya tulis ilmiah",
        "Kerangka harus disusun secara sistematis dan logis",
        "Semua jawaban di atas benar"
      ],
      correct: 3,
      explanation: "Kerangka karangan yang baik harus sistematis, logis, mencerminkan struktur pembahasan, dan mencakup seluruh komponen karya ilmiah."
    },
    {
      question: "Apa yang dimaksud dengan kerangka karangan topik dalam karya tulis ilmiah?",
      options: [
        "Kerangka yang berfokus pada pembahasan topik penelitian",
        "Kerangka yang berfokus pada pembahasan metode penelitian",
        "Kerangka yang berfokus pada pembahasan hasil penelitian",
        "Kerangka yang berfokus pada pembahasan simpulan penelitian"
      ],
      correct: 0,
      explanation: "Kerangka karangan topik berfokus pada struktur dan alur pembahasan topik penelitian yang menjadi inti karya tulis ilmiah."
    },
    {
      question: "Apa manfaat menyusun kerangka karangan topik dalam karya tulis ilmiah?",
      options: [
        "Memudahkan pengorganisasian dan alur pembahasan topik",
        "Membantu mengidentifikasi gap penelitian yang perlu dikaji",
        "Menjamin kedalaman dan fokus pembahasan pada topik utama",
        "Semua jawaban di atas benar"
      ],
      correct: 3,
      explanation: "Kerangka karangan topik membantu menyusun pembahasan secara teratur, mendalam, dan fokus pada topik utama."
    },
    {
      question: "Apa yang harus diperhatikan dalam penulisan judul karya tulis ilmiah?",
      options: [
        "Judul harus singkat, jelas, dan mencerminkan topik utama",
        "Judul harus ditulis dalam bahasa Indonesia yang baku",
        "Judul harus menarik perhatian dan menggambarkan isi",
        "Semua jawaban di atas benar"
      ],
      correct: 3,
      explanation: "Judul karya tulis ilmiah harus singkat, jelas, baku, dan mampu menarik perhatian serta mencerminkan isi dari tulisan."
    },
    {
      question: "Apa yang dimaksud dengan judul tematik dalam karya tulis ilmiah?",
      options: [
        "Judul yang hanya mencantumkan topik utama penelitian",
        "Judul yang mencantumkan tema atau sudut pandang pembahasan",
        "Judul yang mencantumkan metode penelitian yang digunakan",
        "Judul yang mencantumkan kesimpulan utama penelitian"
      ],
      correct: 1,
      explanation: "Judul tematik adalah judul yang tidak hanya mencerminkan topik utama, tetapi juga menyiratkan tema atau sudut pandang pembahasan."
    }
  ]
};

const chapterButtons = document.querySelectorAll('.chapter-btn');
const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit-quiz');
const nextButton = document.getElementById('next-question');
const resultDiv = document.getElementById('quiz-result');
const progressBar = document.getElementById('progress');
const hintButton = document.getElementById('hint-btn');
const hintText = document.getElementById('hint-text');

let currentChapter = '';
let currentQuestionIndex = 0;
let score = 0;

chapterButtons.forEach(button => {
  button.addEventListener('click', () => {
      currentChapter = button.getAttribute('data-chapter');
      currentQuestionIndex = 0;
      score = 0;
      loadQuestion();
      updateProgress();
      chapterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
  });
});

function loadQuestion() {
  const question = quizData[currentChapter][currentQuestionIndex];
  quizContainer.innerHTML = `
      <div class="question">
          <p>${currentQuestionIndex + 1}. ${question.question}</p>
          ${question.options.map((option, i) => `
              <div>
                  <input type="radio" id="option${i}" name="answer" value="${i}">
                  <label for="option${i}">${option}</label>
              </div>
          `).join('')}
      </div>
  `;
  submitButton.style.display = 'block';
  nextButton.style.display = 'none';
  resultDiv.innerHTML = '';
  hintText.style.display = 'none';
}

function updateProgress() {
  const progress = ((currentQuestionIndex + 1) / quizData[currentChapter].length) * 100;
  progressBar.style.width = `${progress}%`;
}

submitButton.addEventListener('click', () => {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (selectedAnswer) {
      const answerIndex = parseInt(selectedAnswer.value);
      const question = quizData[currentChapter][currentQuestionIndex];
      const labels = document.querySelectorAll('label');
      
      labels.forEach((label, index) => {
          if (index === question.correct) {
              label.style.backgroundColor = '#d7f9e3';
              label.style.borderColor = '#58cc02';
          } else if (index === answerIndex) {
              label.style.backgroundColor = '#ffdfe0';
              label.style.borderColor = '#ea2b2b';
          }
      });

      if (answerIndex === question.correct) {
          score++;
          resultDiv.innerHTML = '<p style="color: #58cc02;">Benar!</p>';
      } else {
          resultDiv.innerHTML =  `<p style="color: #ea2b2b;">Salah. ${question.explanation}</p>`;
      }

      submitButton.style.display = 'none';
      nextButton.style.display = 'block';
  }
});

nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData[currentChapter].length) {
      loadQuestion();
      updateProgress();
  } else {
      showFinalResult();
  }
});

function showFinalResult() {
  const total = quizData[currentChapter].length;
  quizContainer.innerHTML = `
      <h2>Hasil Akhir</h2>
      <p>Anda menjawab ${score} dari ${total} soal dengan benar.</p>
      <button id="restart-quiz" class="submit-btn">Ulangi Kuis</button>
  `;
  submitButton.style.display = 'none';
  nextButton.style.display = 'none';
  progressBar.style.width = '100%';

  document.getElementById('restart-quiz').addEventListener('click', () => {
      currentQuestionIndex = 0;
      score = 0;
      loadQuestion();
      updateProgress();
  });
}

hintButton.addEventListener('click', () => {
  if (currentChapter && quizHints[currentChapter]) {
      hintText.textContent = quizHints[currentChapter][currentQuestionIndex] || 'Tidak ada petunjuk untuk soal ini.';
      hintText.style.display = 'block';
  } else {
      hintText.textContent = 'Tidak ada petunjuk untuk bab ini.';
      hintText.style.display = 'block';
  }
});

const quizHints = {
  bab2: [
    "Perhatikan penulisan kata depan 'di'.",
    "Ingat aturan penulisan bilangan tingkat dalam bahasa Indonesia.",
    "Perhatikan cara penulisan kata serapan dalam bahasa Indonesia.",
    "Ingat kapan huruf miring digunakan dalam penulisan.",
    "Perhatikan perbedaan antara imbuhan dan kata depan.",
    "Ingat aturan penulisan akhiran '-nya'.",
    "Perhatikan penggunaan huruf kapital di awal kalimat dan nama tempat.",
    "Ingat aturan penggunaan huruf kapital dalam nama geografi.",
    "Perhatikan penulisan kata penghubung.",
    "Ingat cara penulisan ungkapan penghubung antarkalimat."
  ],
  bab3: [
    "Perhatikan penggunaan kata depan 'ke' yang tepat.",
    "Pelajari aturan penulisan imbuhan 'saling'.",
    "Ingat penggunaan preposisi 'dengan' yang tepat.",
    "Ingat aturan penulisan imbuhan 'me-'.",
    "Perhatikan penulisan kata tanya 'di mana'.",
    "Pelajari aturan penulisan imbuhan 'me-' dan 'meng-'.",
    "Ingat aturan penulisan ungkapan penghubung antarkalimat.",
    "Pelajari aturan penulisan imbuhan 'ber-'.",
    "Perhatikan penulisan kata penghubung 'bilamana'."
  ],
  bab4: [
    "Pelajari struktur umum penulisan karya ilmiah.",
    "Ingat karakteristik kalimat ragam ilmiah.",
    "Pelajari cara menghindari kalimat taksa.",
    "Ingat karakteristik kalimat mubazir.",
    "Pahami pengertian kalimat nirlogis.",
    "Ketahui karakteristik kalimat nirlengkap.",
    "Pelajari pengertian kalimat tidak sejajar.",
    "Kenali karakteristik kalimat efektif.",
    "Pelajari teknik membangun kohesi dalam paragraf.",
    "Pahami fungsi kalimat topik dalam sebuah paragraf."
  ],
  bab5: [
    "Pelajari pengertian paragraf deduktif.",
    "Kenali karakteristik paragraf induktif.",
    "Pahami fungsi kalimat transisi dalam paragraf.",
    "Kenali karakteristik paragraf naratif.",
    "Pahami tujuan utama paragraf deskriptif.",
    "Ketahui karakteristik paragraf ekspositori.",
    "Pahami tujuan utama paragraf argumentatif.",
    "Kenali karakteristik paragraf komparatif.",
    "Pahami fungsi kalimat topik dalam paragraf.",
    "Kenali karakteristik paragraf campuran."
  ],
  bab6: [
    "Pelajari definisi karya tulis ilmiah dari segi karakteristik dan tujuannya.",
    "Pelajari karakteristik karya tulis ilmiah yang baik berdasarkan aspek bahasa, substansi, dan sumber informasi.",
    "Ingat tahapan penulisan karya tulis ilmiah secara umum.",
    "Pahami fungsi dan komponen latar belakang masalah dalam karya tulis ilmiah.",
    "Pelajari pengertian dan fungsi kerangka karangan dalam karya tulis ilmiah.",
    "Pahami tujuan dan komponen utama dari bagian pendahuluan karya tulis ilmiah.",
    "Ketahui fungsi dan komponen utama dari tinjauan pustaka dalam karya tulis ilmiah.",
    "Pelajari kriteria pemilihan topik karya tulis ilmiah yang baik.",
    "Ketahui fungsi dan fokus utama dari bagian pembahasan dalam karya tulis ilmiah.",
    "Pelajari karakteristik simpulan yang baik dalam karya tulis ilmiah."
  ],
  bab7: [
    "Pahami pengertian topik dalam konteks karya tulis ilmiah.",
    "Ingat kriteria pemilihan topik karya tulis ilmiah yang baik.",
    "Pahami pengertian tema dalam konteks karya tulis ilmiah.",
    "Ketahui kriteria penetapan tema karya tulis ilmiah yang baik.",
    "Pelajari pengertian dan fungsi kerangka karangan dalam karya tulis ilmiah.",
    "Ketahui prinsip-prinsip penyusunan kerangka karangan karya tulis ilmiah yang baik.",
    "Pahami pengertian dan fokus dari kerangka karangan topik dalam karya tulis ilmiah.",
    "Pelajari manfaat menyusun kerangka karangan topik dalam karya tulis ilmiah.",
    "Ketahui prinsip-prinsip penulisan judul karya tulis ilmiah yang baik.",
    "Pahami pengertian dari judul tematik dalam konteks karya tulis ilmiah."
  ]
};

document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  if (username === 'admin' && password === 'password') {
      window.location.href = 'index.html';
  } else {
      document.getElementById('error-message').textContent = 'Invalid username or password';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const containers = document.querySelectorAll('.word-list, .source-words');
  
  containers.forEach(container => {
      new Sortable(container, {
          group: 'shared',
          animation: 150,
          ghostClass: 'dragging',
          onStart: function(evt) {
              evt.item.classList.add('dragging');
          },
          onEnd: function(evt) {
              evt.item.classList.remove('dragging');
          },
          onChange: function(evt) {
              updateContainerStyles();
          }
      });
  });

  document.querySelectorAll('.word-list').forEach(container => {
      container.addEventListener('dragenter', function() {
          this.classList.add('dragover');
      });

      container.addEventListener('dragleave', function() {
          this.classList.remove('dragover');
      });

      container.addEventListener('drop', function() {
          this.classList.remove('dragover');
      });
  });
});

function updateContainerStyles() {
  document.querySelectorAll('.word-list').forEach(container => {
      if (container.children.length > 0) {
          container.style.backgroundColor = '#f8f9fa';
      } else {
          container.style.backgroundColor = '';
      }
  });
}

function checkAnswers() {
  const bakuContainer = document.getElementById('baku');
  const tidakBakuContainer = document.getElementById('tidakBaku');
  let correct = 0;
  let total = 0;

  document.querySelectorAll('.word-item').forEach(item => {
      item.style.backgroundColor = '';
  });

  bakuContainer.querySelectorAll('.word-item').forEach(item => {
      total++;
      if (item.dataset.correct === 'baku') {
          correct++;
          item.style.backgroundColor = '#90EE90';
          item.style.color = '#006400';
      } else {
          item.style.backgroundColor = '#FFB6C1';
          item.style.color = '#8B0000';
      }
  });

  tidakBakuContainer.querySelectorAll('.word-item').forEach(item => {
      total++;
      if (item.dataset.correct === 'tidakBaku') {
          correct++;
          item.style.backgroundColor = '#90EE90';
          item.style.color = '#006400';
      } else {
          item.style.backgroundColor = '#FFB6C1';
          item.style.color = '#8B0000';
      }
  });

  const scoreElement = document.getElementById('score');
  const percentage = Math.round((correct / total) * 100) || 0;
  
  scoreElement.style.opacity = '0';
  setTimeout(() => {
      scoreElement.textContent = `Skor Anda: ${correct}/${total} (${percentage}%)`;
      scoreElement.style.opacity = '1';
  }, 200);

  const checkButton = document.querySelector('.check-button');
  checkButton.disabled = true;
  checkButton.style.opacity = '0.7';
  setTimeout(() => {
      checkButton.disabled = false;
      checkButton.style.opacity = '1';
  }, 1500);
}
