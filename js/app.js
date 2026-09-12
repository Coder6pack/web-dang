/**
 * CỔNG KHÔNG GIAN DI SẢN THỰC TẾ ẢO 3D - CHỦ TỊCH HỒ CHÍ MINH
 * Logic điều khiển giao diện, màn hình chào Bác Hồ & Hoa Sen, tìm kiếm, bộ lọc và cửa sổ xem 3D
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Quản lý Màn hình chào mừng (Splash Screen Bác Hồ & Hoa Sen)
  initSplashScreen();

  // 2. Nhạc nền tưởng niệm
  initBackgroundMusic();

  // 3. Hiệu ứng cánh sen bay nhẹ nhàng
  createLotusPetals();

  // 4. Đồng hồ thời gian thực
  initLiveClock();

  // 5. Tìm kiếm & Lọc 2 địa danh di tích 3D
  initSearchAndFilter();

  // 6. Cửa sổ xem trước 3D trực tiếp (Modal 3D Preview)
  initModal3DPreview();

  // 7. Sao chép liên kết & Toast
  initCopyButtons();

  // 8. Nút cuộn lên đầu trang
  initBackToTop();
});

/* ==========================================================================
   1. MÀN HÌNH CHÀO MỪNG (SPLASH SCREEN)
   ========================================================================== */
function initSplashScreen() {
  const splashOverlay = document.getElementById('splashOverlay');
  const enterBtn = document.getElementById('btnEnterPortal');
  const reopenBtn = document.getElementById('btnReopenSplash');

  if (!splashOverlay) return;

  const closeSplash = () => {
    splashOverlay.classList.add('hidden');
    document.body.style.overflow = 'auto';
  };

  const openSplash = () => {
    splashOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
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

  if (!music) return;

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

  function handleFirstInteraction(event) {
    if (event.target?.closest?.('[data-music-toggle]')) return;
    playMusic();
  }

  const toggleMusic = (event) => {
    event.preventDefault();
    if (musicUnavailable) return;

    if (music.paused) {
      playMusic();
    } else {
      music.pause();
      updateControls(false);
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
  const cards = document.querySelectorAll('.tour-card-3d');
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
