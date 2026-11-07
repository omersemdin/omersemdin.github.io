// BLOG YAZILARI
// Şu an yayında yazı yok. Aşağıdaki örnek yazılar yorum satırı olarak duruyor;
// kendi yazınızı eklemek için birini kopyalayıp başındaki // işaretlerini silin ve POSTS listesinin içine koyun.
// Yeni yazı eklemek için listenin EN ÜSTÜNE yeni bir { ... } bloğu ekleyin.
// id: adres çubuğunda görünür (Türkçe karakter ve boşluk kullanmayın, tire kullanın)
// kategori: "gezi", "spor" veya "oyun"
// kapak: 2 renk (kartın arka plan geçişi) + emoji
const POSTS = [
];

// --- ÖRNEK YAZILAR (yayında değil) ---
//   {
//     id: "kapadokya-hafta-sonu",
//     baslik: "Kapadokya'da İki Gün",
//     tarih: "2026-10-12",
//     kategori: "gezi",
//     emoji: "🎈",
//     kapak: ["#f59e0b", "#ef4444"],
//     ozet: "Gün doğumunda balonlar, vadilerde yürüyüş ve küçük bir rota önerisi.",
//     icerik: `
//       <p><em>Bu bir örnek yazıdır — kendi deneyiminizle değiştirin.</em></p>
//       <p>Sabah 5'te kalkmaya değer mi? Kesinlikle evet. Göreme'nin tepesinden yüzlerce balonun aynı anda yükselişini izlemek, alarmın acısını unutturuyor.</p>
//       <h2>Rota</h2>
//       <ul>
//         <li><strong>1. gün:</strong> Göreme Açık Hava Müzesi → Güvercinlik Vadisi yürüyüşü → Uçhisar'da gün batımı</li>
//         <li><strong>2. gün:</strong> Balon izleme → Kızılçukur Vadisi → Avanos'ta çömlek atölyesi</li>
//       </ul>
//       <h2>İpuçları</h2>
//       <p>Yürüyüş için rahat ayakkabı şart. Gün içinde sıcak, akşamları serin olabiliyor; ince bir mont alın.</p>
//     `,
//   },
//   {
//     id: "ilk-yari-maraton",
//     baslik: "İlk Yarı Maratonuma Nasıl Hazırlandım",
//     tarih: "2026-09-03",
//     kategori: "spor",
//     emoji: "🏃",
//     kapak: ["#22c55e", "#0ea5e9"],
//     ozet: "12 haftalık plan, yapılan hatalar ve yarış günü öğrendiklerim.",
//     icerik: `
//       <p><em>Bu bir örnek yazıdır — kendi deneyiminizle değiştirin.</em></p>
//       <p>21,1 km kâğıt üstünde korkutucu görünüyordu. Hedefim sadece bitirmekti; sonunda hedeflediğimden iyi bir süreyle bitirdim.</p>
//       <h2>Haftalık plan</h2>
//       <ul>
//         <li>2 kısa tempolu koşu</li>
//         <li>1 interval antrenmanı</li>
//         <li>1 uzun koşu (her hafta ~1 km artırarak)</li>
//       </ul>
//       <h2>Öğrendiklerim</h2>
//       <p>Uzun koşularda yavaş gitmek, hızlı gitmekten daha zor ama daha faydalı. Ve yarış günü yeni ayakkabı denenmez!</p>
//     `,
//   },
//   {
//     id: "karadeniz-yaylalari",
//     baslik: "Karadeniz Yaylaları Rotası",
//     tarih: "2026-07-20",
//     kategori: "gezi",
//     emoji: "⛰️",
//     kapak: ["#10b981", "#6366f1"],
//     ozet: "Ayder, Pokut ve Gito: bulutların üstünde bir hafta.",
//     icerik: `
//       <p><em>Bu bir örnek yazıdır — kendi deneyiminizle değiştirin.</em></p>
//       <p>Karadeniz'de hava her an değişebiliyor. Planınızı esnek tutun; sis kalktığında manzara her şeye değiyor.</p>
//       <h2>Durak durak</h2>
//       <ul>
//         <li><strong>Ayder:</strong> Kaplıca ve şelaleler</li>
//         <li><strong>Pokut:</strong> Fotoğrafı en çok çekilen yayla evleri</li>
//         <li><strong>Gito:</strong> Bulut denizini izlemek için ideal</li>
//       </ul>
//     `,
//   },
