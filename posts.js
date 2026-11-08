// BLOG YAZILARI
// Şu an yayında yazı yok. Aşağıdaki örnek yazılar yorum satırı olarak duruyor;
// kendi yazınızı eklemek için birini kopyalayıp başındaki // işaretlerini silin ve POSTS listesinin içine koyun.
// Yeni yazı eklemek için listenin EN ÜSTÜNE yeni bir { ... } bloğu ekleyin.
// id: adres çubuğunda görünür (Türkçe karakter ve boşluk kullanmayın, tire kullanın)
// kategori: "gezi", "spor" veya "oyun"
// kapak: 2 renk (kartın arka plan geçişi) + emoji
const POSTS = [
  {
    id: "ghost-of-tsushima",
    baslik: "Hep Bir Oyunun İçindeydim: Ghost of Tsushima",
    tarih: "2026-11-07",
    kategori: "oyun",
    emoji: "⛩️",
    kapak: ["#b91c1c", "#1e1b4b"],
    kapakGizle: true, // yazının başında kapak yerine Reels tarzı animasyon var
    ozet: "Atari kasetlerinden Dota 2'ye, oradan da beni yeniden hikâyeli oyunlara bağlayan Ghost of Tsushima'ya uzanan bir yolculuk.",
    icerik: `
      <div class="reel-embed">
        <iframe src="reel.html#embed" title="Hep Bir Oyunun İçindeydim — kısa animasyon" loading="lazy"></iframe>
        <p class="reel-links mono">
          <a href="reel.html" target="_blank" rel="noopener">⛶ tam ekran izle</a>
          <a href="assets/reel/ghost-of-tsushima-reel.mp4" download>⬇ videoyu indir (MP4)</a>
        </p>
      </div>

      <p>Kendimi bildim bileli hep bir oyunun içinde olmuşumdur. Küçükken sokakta ve parkta abilerle futbol, evde Mert Abi ile Atari, annemle pişti, okulda basketbol… Bu süreç, yanlış hatırlamıyorsam 3. sınıfta kendime ait bir bilgisayarım olmasıyla farklı bir evrene adım atmamla devam etti.</p>
      <p>Aslında çok da farklı bir evren değildi, çünkü evde Atari'yi çok oynardık. Kaseti sürekli üfleyerek çalıştırmak, kaybetmeye bir türlü tenezzül edememek… Bunlar o zamanlardan kalma. Bilgisayar geldiğinde ise Atari'ye kıyasla daha güzel görüntüler ve çok daha fazla çeşitlilik beni içine iyice çekti.</p>

      <h2>Rekabetin peşinde</h2>
      <p>Küçüklüğümden beri içimde hep rekabetçi bir taraf vardı ve oyun oynarken de bu tarafımı yaşamayı seviyordum. Ne yazık ki o zamanlar internet evlerde yaygın olmadığı için oynadığım oyunlar bu rekabetçi tarafımı pek tatmin etmiyordu. Beni en çok tatmin eden oyun FIFA 06'ydı.</p>
      <p>2010–2011 civarında internet artık yaygınlaşmaya başlamıştı. O zamanlar kuzenim Barış Abi, Point Blank adında bir oyun oynuyordu ve beni de bu oyuna bulaştırdı 🙂 Benim farkında olmadığım şey ise oyunlara çok hızlı adapte olmammış. Bu kadar hızlı adapte olunca abiler beni çok sevdi ve hemen klan savaşlarına dahil ettiler. Bu oyunla birlikte o rekabetçi tatmin duygusu nihayet gelmişti. Tatil günlerinde sabah akşam bu oyunu oynardık.</p>
      <p>Sonra, Allah'ın belası 2013 senesinde bir arkadaşımızın abisine Dota 2 Beta Key'i gelmiş, o da arkadaşıma vermiş. Arkadaşım da bizimle paylaştı ve "Hadi indirin de birlikte oynayalım" diye bir gün yaşadık. O günden sonra, aradan 13 yıl geçmesine rağmen hâlâ bu oyunu takip edip oynayacağımı bilmiyordum. Bunlara FIFA, CS ve LoL gibi oyunlar da eklenince rekabetçi olmayan bir oyunu oynayamaz hale geldim; resmen sıkılıyordum. GTA 5'i bile oynuyordum ama hiç tatmin etmiyordu.</p>

      <h2>Tatmin duygusu azalınca</h2>
      <p>Yıllar geçtikçe bilgisayar oyunlarının verdiği tatmin duygusu da azalmaya başladı. Bazen "Acaba eskisi kadar iyi değilim de ondan mı?" diyordum, ama bir bakıyorum yine herkesi tokatlıyorum; demek ki sebep bu değilmiş 🙂 Belki de sürekli aynı şeyleri yaşamaktan sıkılmıştım.</p>
      <p>Uzun bir aradan sonra Red Dead Redemption 2'ye başlamaya karar verdim ve iyi ki de vermişim. Bu kadar derin hikâyeli bir oyun oynamak, içimdeki oyun oynama isteğini yeniden ateşledi. Ardından Hades'i bitirdim, ama yine de rekabetçi oyunların verdiği hazzı alamıyordum.</p>

      <h2>Ghost of Tsushima'ya giden yol</h2>
      <p>Geçenlerde yeni aldığım PlayStation'da oyun ararken Ghost of Tsushima'yı gördüm. Puanları çok yüksekti ve oyun Japonya'da geçiyordu. Zaten çok yakın bir zamanda Japonya'ya gitmiş ve ülkeye bayılmıştım; "Neden denemeyeyim?" dedim.</p>
      <p>Yine de uzun bir süre beklettim. Belki de yine rekabetçi tarafım yüzünden başlamak istemedim: Sürekli FIFA'yı açıp Ultimate Team'e girmenin, kolu kırmakla kırmamak arasında gidip gelmenin verdiği hazdan vazgeçemiyordum. Sonra bir gün tam maça girdim ve oyun kapandı. Oyun beni doğrudan kaybetmiş saydı. "Başlayacağım böyle oyuna" deyip Ghost of Tsushima'ya geçtim.</p>

      <h2>İlk izlenimler</h2>
      <p>Oyun daha ilk dakikalarda beni resmen içine çekti. 2020 yapımı olmasına rağmen (PlayStation 5 için hazırlanan Director's Cut sürümü 2021'de çıktı) görselliği bu kadar detaylı bir oyunu uzun zamandır görmemiştim. İlk başta Elden Ring tarzı bir oyun beklerken, bende daha çok gelişmiş bir Assassin's Creed hissi uyandırdı.</p>
      <p>Oynanışın çok karmaşık olacağını düşünüyordum ama çok basit çıktı: İki tuşa basarak düşmanı öldürebiliyorsunuz. Ancak bu, oyunun çok kolay olduğu anlamına gelmiyor; her düşmana karşı farklı bir duruş (stance) seçip ona göre oynamak gerekiyor. Hikâyenin yarısına gelmiş olmama rağmen hangi düşmana nasıl saldırmam gerektiğine ya da Ghost yeteneklerinden hangisini kullanacağıma hâlâ tam karar veremiyorum. Oynanış bu kadar kapsamlı tutulurken hikâyesi, müzikleri ve içerikleri de aynı seviyede tutulmuş.</p>

      <h2>Değerlendirme</h2>
      <p>Bilmiyorum, belki de uzun zaman sonra hissettiklerimi paylaştığım bir yazı olduğu için Ghost of Tsushima'dan çok, neredeyse emeklediğim yıllardan başlayan bir yazı oldu.</p>
      <p>Ghost of Tsushima'yı değerlendirmem gerekirse, kendi açımdan harika bir oyun olmuş derim. Elbette birileri çıkıp "Böyle oyun mu olur, şurası şöyle kötü" diyecektir. Ben anlamam; adamlar hem içinde bol bol Japonya olan bir oyun yapmış hem de sürekli savaşılabilecek bir oyun yapmış. Bence çok fazla şey beklemeye gerek yok.</p>

      <div class="score-box">
        <div class="score mono">9<span>/10</span></div>
        <div>
          <p><strong>Artılar:</strong> Detaylı görsellik, basit ama derin savaş sistemi, hikâye ve müzikler, bol bol Japonya.</p>
          <p><strong>Eksiler:</strong> Konuşmalar geçilemiyor, bazen sıkılıyorum (napabilirim 😞). Bir de bir bölümde bug'a girip boşa kılıç salladım.</p>
        </div>
      </div>
    `,
  },
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
