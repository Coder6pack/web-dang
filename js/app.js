/**
 * CỔNG KHÔNG GIAN DI SẢN THỰC TẾ ẢO 3D - CHỦ TỊCH HỒ CHÍ MINH
 * Logic điều khiển giao diện, màn hình chào Bác Hồ & Hoa Sen, tìm kiếm, bộ lọc và cửa sổ xem 3D
 */

const officialLinksData = [
  {
    featured: true,
    url: 'https://trunguongcuc.hochiminh.vn',
    image: 'assets/official-trunguong-cuc.jpg',
    badge: 'LIÊN KẾT ƯU TIÊN',
    category: 'CỔNG THÔNG TIN NỔI BẬT',
    title: 'Trung ương Cục',
    domain: 'trunguongcuc.hochiminh.vn',
    description: 'Kết nối trực tiếp đến cổng thông tin Trung ương Cục do khách yêu gửi.',
    cta: 'MỞ LIÊN KẾT ƯU TIÊN',
    features: [
      'Thông tin và tư liệu về Trung ương Cục',
      'Kết nối không gian di sản số',
      'Liên kết được ưu tiên trong cổng thông tin'
    ]
  },
  {
    url: 'https://sanpham.starglobal3d.vn/smart-heritage-3d/lang-chu-tich-ho-chi-minh/?startscene=scene_01_lang_bac_(1)&startactions=lookat(0,0,120,0,0);',
    image: 'assets/official-lang-chu-tich-ho-chi-minh.jpg',
    badge: 'SMART HERITAGE 3D',
    category: 'KHÔNG GIAN DI SẢN 3D',
    title: 'Làng Chủ tịch Hồ Chí Minh',
    domain: 'sanpham.starglobal3d.vn',
    description: 'Mở không gian di sản 3D về Chủ tịch Hồ Chí Minh trên nền tảng Smart Heritage.',
    cta: 'TRẢI NGHIỆM 3D NGAY',
    features: [
      'Trải nghiệm tương tác Smart Heritage 3D',
      'Khám phá không gian văn hóa số',
      'Mở toàn cảnh 360° trên nền tảng Smart Heritage'
    ]
  },
  {
    url: 'https://baotang.hochiminh.vn',
    image: 'assets/official-bao-tang-ho-chi-minh.jpg',
    badge: 'CỔNG THÔNG TIN DI SẢN',
    category: 'BẢO TÀNG HỒ CHÍ MINH',
    title: 'Bảo tàng Hồ Chí Minh',
    domain: 'baotang.hochiminh.vn',
    description: 'Kết nối cổng thông tin Bảo tàng Hồ Chí Minh.',
    cta: 'MỞ CỔNG THÔNG TIN',
    features: [
      'Tra cứu thông tin di sản',
      'Khám phá không gian văn hóa Hồ Chí Minh',
      'Mở trang thông tin chính thức của bảo tàng'
    ]
  },
  {
    url: 'https://pacbo.hochiminh.vn',
    image: 'assets/official-pac-bo.jpg',
    badge: 'KHÔNG GIAN DI SẢN',
    category: 'DI TÍCH PÁC BÓ',
    title: 'Pác Bó',
    domain: 'pacbo.hochiminh.vn',
    description: 'Khám phá thông tin di sản tại Pác Bó.',
    cta: 'KHÁM PHÁ PÁC BÓ',
    features: [
      'Tìm hiểu không gian di tích Pác Bó',
      'Kết nối tư liệu về Chủ tịch Hồ Chí Minh',
      'Mở cổng thông tin chính thức tại địa danh'
    ]
  },
  {
    url: 'https://atkdinhhoa.hochiminh.vn',
    image: 'assets/official-atk-dinh-hoa.jpg',
    badge: 'KHÔNG GIAN DI SẢN',
    category: 'DI TÍCH ATK ĐỊNH HÓA',
    title: 'ATK Định Hóa',
    domain: 'atkdinhhoa.hochiminh.vn',
    description: 'Kết nối thông tin di sản tại ATK Định Hóa.',
    cta: 'KHÁM PHÁ ATK ĐỊNH HÓA',
    features: [
      'Khám phá không gian di tích ATK',
      'Tra cứu tư liệu lịch sử liên quan',
      'Mở trang thông tin chính thức tại địa danh'
    ]
  },
  {
    url: 'https://k9dachong.hochiminh.vn',
    image: 'assets/official-k9-da-chong.jpg',
    badge: 'KHÔNG GIAN DI SẢN',
    category: 'DI TÍCH K9 ĐÁ CHÔNG',
    title: 'K9 Đá Chông',
    domain: 'k9dachong.hochiminh.vn',
    description: 'Khám phá thông tin di sản tại K9 Đá Chông.',
    cta: 'KHÁM PHÁ K9 ĐÁ CHÔNG',
    features: [
      'Tìm hiểu không gian di tích K9 Đá Chông',
      'Kết nối tư liệu về Chủ tịch Hồ Chí Minh',
      'Mở cổng thông tin chính thức tại địa danh'
    ]
  },
  {
    url: 'https://tantrao.hochiminh.vn',
    image: 'assets/official-tan-trao.jpg',
    badge: 'KHÔNG GIAN DI SẢN',
    category: 'DI TÍCH TÂN TRÀO',
    title: 'Tân Trào',
    domain: 'tantrao.hochiminh.vn',
    description: 'Khám phá thông tin di sản tại Tân Trào.',
    cta: 'KHÁM PHÁ TÂN TRÀO',
    features: [
      'Khám phá không gian di tích Tân Trào',
      'Tra cứu tư liệu lịch sử liên quan',
      'Mở trang thông tin chính thức tại địa danh'
    ]
  },
  {
    url: 'https://so5chauvanliem.hochiminh.vn',
    image: 'assets/official-so-5-chau-van-liem.jpg',
    badge: 'KHÔNG GIAN DI SẢN',
    category: 'ĐỊA ĐIỂM LỊCH SỬ',
    title: 'Số 5 Châu Văn Liêm',
    domain: 'so5chauvanliem.hochiminh.vn',
    description: 'Kết nối thông tin di sản tại Số 5 Châu Văn Liêm.',
    cta: 'KHÁM PHÁ ĐỊA ĐIỂM',
    features: [
      'Tìm hiểu địa điểm lịch sử Số 5 Châu Văn Liêm',
      'Kết nối tư liệu về hành trình hoạt động cách mạng',
      'Mở cổng thông tin chính thức tại địa danh'
    ]
  },
  {
    url: 'https://48hangngang.hochiminh.vn',
    image: 'assets/official-48-hang-ngang.jpg',
    badge: 'KHÔNG GIAN DI SẢN',
    category: 'ĐỊA ĐIỂM LỊCH SỬ',
    title: '48 Hàng Ngang',
    domain: '48hangngang.hochiminh.vn',
    description: 'Khám phá thông tin di sản tại 48 Hàng Ngang.',
    cta: 'KHÁM PHÁ 48 HÀNG NGANG',
    features: [
      'Tìm hiểu không gian lịch sử 48 Hàng Ngang',
      'Kết nối tư liệu về Chủ tịch Hồ Chí Minh',
      'Mở cổng thông tin chính thức tại địa danh'
    ]
  },
  {
    url: 'https://vanphuc.hochiminh.vn',
    image: 'assets/official-van-phuc.jpg',
    badge: 'KHÔNG GIAN DI SẢN',
    category: 'DI TÍCH VẠN PHÚC',
    title: 'Vạn Phúc',
    domain: 'vanphuc.hochiminh.vn',
    description: 'Khám phá thông tin di sản tại Vạn Phúc.',
    cta: 'KHÁM PHÁ VẠN PHÚC',
    features: [
      'Tìm hiểu không gian di tích Vạn Phúc',
      'Tra cứu tư liệu lịch sử liên quan',
      'Mở trang thông tin chính thức tại địa danh'
    ]
  },
  {
    url: 'https://baotanghcmtthue.hochiminh.vn',
    image: 'assets/official-bao-tang-ho-chi-minh-hue.jpg',
    badge: 'CỔNG THÔNG TIN DI SẢN',
    category: 'BẢO TÀNG HỒ CHÍ MINH TẠI HUẾ',
    title: 'Bảo tàng Hồ Chí Minh tại Huế',
    domain: 'baotanghcmtthue.hochiminh.vn',
    description: 'Kết nối thông tin Bảo tàng Hồ Chí Minh tại Huế.',
    cta: 'MỞ CỔNG THÔNG TIN',
    features: [
      'Khám phá không gian văn hóa tại Huế',
      'Tra cứu tư liệu về Chủ tịch Hồ Chí Minh',
      'Mở trang thông tin chính thức của bảo tàng'
    ]
  },
  {
    url: 'https://cantho.hochiminh.vn',
    image: 'assets/official-can-tho.jpg',
    badge: 'KHÔNG GIAN DI SẢN',
    category: 'DI SẢN HỒ CHÍ MINH TẠI CẦN THƠ',
    title: 'Cần Thơ',
    domain: 'cantho.hochiminh.vn',
    description: 'Kết nối thông tin di sản Hồ Chí Minh tại Cần Thơ.',
    cta: 'KHÁM PHÁ CẦN THƠ',
    features: [
      'Khám phá không gian văn hóa tại Cần Thơ',
      'Kết nối tư liệu về Chủ tịch Hồ Chí Minh',
      'Mở cổng thông tin chính thức tại địa danh'
    ]
  },
  {
    url: 'https://khuuymiendong.hochiminh.vn',
    image: 'assets/official-khu-uy-mien-dong.jpg',
    badge: 'KHÔNG GIAN DI SẢN',
    category: 'DI TÍCH KHU ỦY MIỀN ĐÔNG',
    title: 'Khu ủy miền Đông',
    domain: 'khuuymiendong.hochiminh.vn',
    description: 'Khám phá thông tin di sản tại Khu ủy miền Đông.',
    cta: 'KHÁM PHÁ KHU ỦY MIỀN ĐÔNG',
    features: [
      'Tìm hiểu không gian di tích Khu ủy miền Đông',
      'Tra cứu tư liệu lịch sử liên quan',
      'Mở trang thông tin chính thức tại địa danh'
    ]
  },
  {
    url: 'https://bochihuymien.hochiminh.vn',
    image: 'assets/official-bo-chi-huy-mien.jpg',
    badge: 'KHÔNG GIAN DI SẢN',
    category: 'DI TÍCH BỘ CHỈ HUY MIỀN',
    title: 'Bộ Chỉ huy miền',
    domain: 'bochihuymien.hochiminh.vn',
    description: 'Khám phá thông tin di sản tại Bộ Chỉ huy miền.',
    cta: 'KHÁM PHÁ BỘ CHỈ HUY MIỀN',
    features: [
      'Tìm hiểu không gian di tích Bộ Chỉ huy miền',
      'Kết nối tư liệu lịch sử liên quan',
      'Mở cổng thông tin chính thức tại địa danh'
    ]
  }
];

document.addEventListener('DOMContentLoaded', () => {
  // 1. Nhạc nền tưởng niệm & bộ điều khiển cho màn hình chào
  const musicController = initBackgroundMusic();

  // 2. Quản lý Màn hình chào mừng (Splash Screen Bác Hồ & Hoa Sen)
  initSplashScreen(musicController);

  // 3. Map các liên kết chính thức vào đúng component thẻ di tích hiện có
  renderOfficialLinks();

  // 4. Hiệu ứng cánh sen bay nhẹ nhàng
  createLotusPetals();

  // 5. Đồng hồ thời gian thực
  initLiveClock();

  // 6. Tìm kiếm & Lọc các địa danh di tích 3D
  initSearchAndFilter();

  // 7. Cửa sổ xem trước 3D trực tiếp (Modal 3D Preview)
  initModal3DPreview();

  // 8. Sao chép liên kết & Toast
  initCopyButtons();

  // 9. Nút cuộn lên đầu trang
  initBackToTop();
});

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderOfficialLinks() {
  const grid = document.getElementById('tourShowcaseGrid');
  if (!grid) return;

  const locationIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>';
  const arrowIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>';
  const eyeIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>';
  const copyIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>';
  const checkIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';

  const cardsMarkup = officialLinksData.map((link, index) => {
    const cardClass = link.featured
      ? 'tour-card-3d official-tour-card-featured'
      : 'tour-card-3d';
    const url = escapeHtml(link.url);
    const featuresMarkup = link.features.map((feature) => `
      <li>${checkIcon}<span>${escapeHtml(feature)}</span></li>
    `).join('');

    return `
      <article class="${cardClass}"
               data-category="official"
               data-title="${escapeHtml(link.title)}"
               data-desc="${escapeHtml(link.description)}"
               data-location="${escapeHtml(link.domain)}"
               data-tags="${escapeHtml([link.badge, link.category, link.title, link.domain].join(' '))}">
        <div class="tour-banner-wrapper">
          <img src="${escapeHtml(link.image)}" alt="${escapeHtml(link.title)}" class="tour-banner-img" loading="${index === 0 ? 'eager' : 'lazy'}">
          <div class="tour-banner-overlay"></div>

          <div class="vr-pulse-badge">
            <span class="vr-pulse-dot"></span>
            <span>${escapeHtml(link.badge)}</span>
          </div>

          <div class="location-tag">
            ${locationIcon}
            <span>${escapeHtml(link.domain)}</span>
          </div>
        </div>

        <div class="tour-body">
          <div class="tour-header">
            <span class="tour-subheading">${escapeHtml(link.category)}</span>
            <h4 class="tour-title">${escapeHtml(link.title)}</h4>
          </div>

          <p class="tour-desc">${escapeHtml(link.description)}</p>

          <ul class="tour-features-list">
            ${featuresMarkup}
          </ul>

          <div class="tour-actions-wrap">
            <a href="${url}" target="_blank" rel="noopener noreferrer" class="btn-primary-explore">
              <span>${escapeHtml(link.cta)}</span>
              ${arrowIcon}
            </a>

            <div class="tour-secondary-actions">
              <button class="btn-preview-modal" type="button" data-tour-url="${url}" data-tour-title="${escapeHtml(link.title)} — Không gian di sản">
                ${eyeIcon}
                <span>Xem trực tiếp tại đây</span>
              </button>

              <button class="btn-copy-tour-url" type="button" data-url="${url}" title="Sao chép liên kết">
                ${copyIcon}
                <span>Sao chép link</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  grid.insertAdjacentHTML('beforeend', cardsMarkup);
}

/* ==========================================================================
   1. MÀN HÌNH CHÀO MỪNG (SPLASH SCREEN)
   ========================================================================== */
function initSplashScreen(musicController = {}) {
  const splashOverlay = document.getElementById('splashOverlay');
  const enterBtn = document.getElementById('btnEnterPortal');
  const reopenBtn = document.getElementById('btnReopenSplash');
  const playBackgroundMusic = typeof musicController.play === 'function' ? musicController.play : () => Promise.resolve(false);
  const pauseBackgroundMusic = typeof musicController.pause === 'function' ? musicController.pause : () => {};

  if (!splashOverlay) return;

  const closeSplash = () => {
    pauseBackgroundMusic(true);
    splashOverlay.classList.add('hidden');
    document.body.style.overflow = 'auto';
  };

  const openSplash = () => {
    splashOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    playBackgroundMusic();
  };

  if (enterBtn) {
    enterBtn.addEventListener('click', () => {
      closeSplash();
    });
  }

  if (reopenBtn) {
    reopenBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openSplash();
    });
  }

  // Phím ESC đóng màn hình chào
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modal3D = document.getElementById('modal3DPreview');
      if (modal3D && modal3D.classList.contains('active')) {
        // Ưu tiên đóng modal 3D trước nếu đang mở
        return;
      }
      if (!splashOverlay.classList.contains('hidden')) {
        closeSplash();
      }
    }
  });

  // Giữ popup mở cho đến khi người dùng chủ động đóng
  document.body.style.overflow = 'hidden';
}

/* ==========================================================================
   2. NHẠC NỀN TƯỞNG NIỆM
   ========================================================================== */
function initBackgroundMusic() {
  const music = document.getElementById('backgroundMusic');
  const toggleButtons = [...document.querySelectorAll('[data-music-toggle]')];
  const splashOverlay = document.getElementById('splashOverlay');

  if (!music) {
    return {
      play: () => Promise.resolve(false),
      pause: () => {}
    };
  }

  let interactionListenersActive = true;
  let musicUnavailable = false;

  const updateControls = (isPlaying) => {
    toggleButtons.forEach((button) => {
      button.setAttribute('aria-pressed', String(isPlaying));
      button.setAttribute('aria-label', musicUnavailable ? 'Nhạc nền không khả dụng' : `${isPlaying ? 'Tắt' : 'Bật'} nhạc nền`);
      button.title = musicUnavailable ? 'Nhạc nền không khả dụng' : `${isPlaying ? 'Tắt' : 'Bật'} nhạc nền`;
      button.classList.toggle('is-playing', isPlaying);
      button.disabled = musicUnavailable;

      const label = button.querySelector('.music-toggle-label');
      if (label) {
        label.textContent = musicUnavailable ? 'Nhạc lỗi' : (isPlaying ? 'Tắt nhạc' : 'Bật nhạc');
      }
    });
  };

  const removeInteractionListeners = () => {
    if (!interactionListenersActive) return;
    window.removeEventListener('pointerdown', handleFirstInteraction);
    window.removeEventListener('keydown', handleFirstInteraction);
    interactionListenersActive = false;
  };

  const playMusic = () => {
    if (musicUnavailable || !music.paused) {
      updateControls(!music.paused);
      return Promise.resolve(!music.paused);
    }

    const playPromise = music.play();
    if (!playPromise || typeof playPromise.then !== 'function') {
      updateControls(true);
      removeInteractionListeners();
      return Promise.resolve(true);
    }

    return playPromise
      .then(() => {
        updateControls(true);
        removeInteractionListeners();
        return true;
      })
      .catch(() => {
        updateControls(false);
        return false;
      });
  };

  const pauseMusic = (reset = false) => {
    music.pause();
    if (reset) music.currentTime = 0;
    updateControls(false);
  };

  function handleFirstInteraction(event) {
    if (splashOverlay && splashOverlay.classList.contains('hidden')) return;
    if (event.target?.closest?.('[data-music-toggle]')) return;
    playMusic();
  }

  const toggleMusic = (event) => {
    event.preventDefault();
    if (musicUnavailable) return;

    if (music.paused) {
      playMusic();
    } else {
      pauseMusic();
      removeInteractionListeners();
    }
  };

  toggleButtons.forEach((button) => {
    button.addEventListener('click', toggleMusic);
  });

  music.addEventListener('play', () => updateControls(true));
  music.addEventListener('pause', () => updateControls(false));
  music.addEventListener('error', () => {
    musicUnavailable = true;
    removeInteractionListeners();
    updateControls(false);
  });

  window.addEventListener('pointerdown', handleFirstInteraction, { passive: true });
  window.addEventListener('keydown', handleFirstInteraction, { passive: true });

  updateControls(false);
  playMusic();

  return {
    play: playMusic,
    pause: pauseMusic
  };
}

/* ==========================================================================
   3. HIỆU ỨNG CÁNH SEN RƠI LƠ LỬNG
   ========================================================================== */
function createLotusPetals() {
  const container = document.getElementById('petalsContainer');
  if (!container) return;

  const petalCount = 16;
  for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement('div');
    petal.classList.add('petal');

    const size = Math.random() * 14 + 10;
    const leftPos = Math.random() * 100;
    const delay = Math.random() * 6;
    const duration = Math.random() * 5 + 6;

    petal.style.width = `${size}px`;
    petal.style.height = `${size * 1.35}px`;
    petal.style.left = `${leftPos}%`;
    petal.style.animationDelay = `${delay}s`;
    petal.style.animationDuration = `${duration}s`;

    container.appendChild(petal);
  }
}

/* ==========================================================================
   3. ĐỒNG HỒ THỜI GIAN THỰC
   ========================================================================== */
function initLiveClock() {
  const clockText = document.getElementById('liveClockText');
  if (!clockText) return;

  const daysOfWeek = [
    'Chủ Nhật',
    'Thứ Hai',
    'Thứ Ba',
    'Thứ Tư',
    'Thứ Năm',
    'Thứ Sáu',
    'Thứ Bảy'
  ];

  const updateClock = () => {
    const now = new Date();
    const dayName = daysOfWeek[now.getDay()];
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    clockText.textContent = `${dayName}, ${day}/${month}/${year} | ${hours}:${minutes}:${seconds}`;
  };

  updateClock();
  setInterval(updateClock, 1000);
}

/* ==========================================================================
   4. TÌM KIẾM TỨC THÌ & BỘ LỌC DANH MỤC
   ========================================================================== */
function initSearchAndFilter() {
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('searchClearBtn');
  const filterTabs = document.querySelectorAll('.filter-tab-btn');
  const cards = document.querySelectorAll('#tourShowcaseGrid .tour-card-3d');
  const noResults = document.getElementById('noResults');

  let currentCategory = 'all';
  let searchQuery = '';

  const normalizeStr = (str) => {
    if (!str) return '';
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  };

  const applyFilters = () => {
    let totalVisible = 0;
    const normQuery = normalizeStr(searchQuery);

    cards.forEach((card) => {
      const cardCategory = card.getAttribute('data-category');
      const title = normalizeStr(card.getAttribute('data-title') || '');
      const desc = normalizeStr(card.getAttribute('data-desc') || '');
      const location = normalizeStr(card.getAttribute('data-location') || '');
      const tags = normalizeStr(card.getAttribute('data-tags') || '');

      const matchesCat = (currentCategory === 'all' || cardCategory === currentCategory);
      const matchesSearch = !normQuery ||
        title.includes(normQuery) ||
        desc.includes(normQuery) ||
        location.includes(normQuery) ||
        tags.includes(normQuery);

      if (matchesCat && matchesSearch) {
        card.style.display = 'flex';
        totalVisible++;
      } else {
        card.style.display = 'none';
      }
    });

    if (totalVisible === 0) {
      if (noResults) noResults.classList.add('active');
    } else {
      if (noResults) noResults.classList.remove('active');
    }
  };

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (clearBtn) {
        if (searchQuery.length > 0) {
          clearBtn.classList.add('active');
        } else {
          clearBtn.classList.remove('active');
        }
      }
      applyFilters();
    });
  }

  if (clearBtn && searchInput) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      clearBtn.classList.remove('active');
      searchInput.focus();
      applyFilters();
    });
  }

  filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      filterTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.getAttribute('data-filter') || 'all';
      applyFilters();
    });
  });

  applyFilters();
}

/* ==========================================================================
   5. CỬA SỔ XEM TRƯỚC 3D TRỰC TIẾP (MODAL 3D PREVIEW)
   ========================================================================== */
function initModal3DPreview() {
  const modal = document.getElementById('modal3DPreview');
  const iframe = document.getElementById('modalIframe');
  const titleElem = document.getElementById('modalTitleText');
  const externalLinkBtn = document.getElementById('modalExternalBtn');
  const closeBtn = document.getElementById('btnCloseModal');
  const previewBtns = document.querySelectorAll('.btn-preview-modal');

  if (!modal || !iframe) return;

  const openModal = (url, title) => {
    if (titleElem) titleElem.textContent = title;
    if (externalLinkBtn) externalLinkBtn.href = url;
    iframe.src = url;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('active');
    iframe.src = 'about:blank'; // Giải phóng bộ nhớ và âm thanh 3D
    document.body.style.overflow = 'auto';
  };

  previewBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const url = btn.getAttribute('data-tour-url');
      const title = btn.getAttribute('data-tour-title') || 'Không gian thực tế ảo 3D';
      if (url) {
        openModal(url, title);
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   6. SAO CHÉP ĐƯỜNG DẪN LIÊN KẾT & TOAST NOTIFICATION
   ========================================================================== */
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('.btn-copy-tour-url');
  const toast = document.getElementById('toastNotice');
  const toastMsg = document.getElementById('toastMessage');
  let toastTimeout = null;

  const showToast = (message) => {
    if (!toast) return;
    if (toastMsg) toastMsg.textContent = message;
    toast.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  };

  copyButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const urlToCopy = btn.getAttribute('data-url');
      if (!urlToCopy) return;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(urlToCopy).then(() => {
          showToast('Đã sao chép liên kết 3D vào bộ nhớ tạm!');
        }).catch(() => {
          fallbackCopyText(urlToCopy, showToast);
        });
      } else {
        fallbackCopyText(urlToCopy, showToast);
      }
    });
  });
}

function fallbackCopyText(text, callback) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.opacity = '0';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand('copy');
    callback('Đã sao chép liên kết 3D vào bộ nhớ tạm!');
  } catch (err) {
    callback('Không thể tự động sao chép!');
  }
  document.body.removeChild(textArea);
}

/* ==========================================================================
   7. NÚT CUỘN LÊN ĐẦU TRANG (BACK TO TOP)
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('btnBackToTop');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
