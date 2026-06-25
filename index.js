// 10종 EAP 프로그램 상세 데이터
const EAP_PROGRAMS = {
  p1: {
    title: "피지컬케어 1:1 맞춤 관리",
    tag: "체형 분석 + 통증 케어",
    icon: "fa-hands-holding-child",
    desc: "3D AI 체형 측정을 거쳐 물리치료사 출신 전문가가 통증 부위의 근막 조직을 1:1 수기 마사지 및 패시브 스트레칭 기법으로 밀착 완화합니다."
  },
  p2: {
    title: "오피스 기능성 운동 처방",
    tag: "1:1 재활 및 체형 교정 운동",
    icon: "fa-person-running",
    desc: "사내 현장 및 1:1 기구실에서 개개인의 척추 정렬 상태에 적합한 스트레칭과 맞춤형 소도구 기능 운동을 지도하여 올바른 교정 효과를 도출합니다."
  },
  p3: {
    title: "VDT 증후군 예방 스트레칭 클래스",
    tag: "오피스 현장 단체 강의",
    icon: "fa-desktop",
    desc: "사무직 근로자들에게 빈번한 거북목, 손목 터널 증후군 등을 방지하기 위해 개인 데스크 환경에서 즉석 실행이 가능한 스트레칭법을 실습합니다."
  },
  p4: {
    title: "코어 강화 및 바른 자세 운동 클래스",
    tag: "허리 통증 예방 매트 필라테스",
    icon: "fa-chair",
    desc: "허리 디스크 및 요추 부근 통증 예방을 위해 의자와 요가 매트를 이용한 복합 코어 훈련 및 바른 골반 중립 자세 확보 가이드를 전달합니다."
  },
  p5: {
    title: "직무 스트레스 완화 마인드 케어",
    tag: "1:1 심리 상담 및 명상 테라피",
    icon: "fa-heart",
    desc: "번아웃 및 직무 긴장을 해소하기 위해 임상전문 상담원과 1:1 비밀 보장 심리 멘토링을 진행하며, 마인드풀니스 호흡법을 교육합니다."
  },
  p6: {
    title: "오피스 수기 힐링 테라피",
    tag: "어깨, 목 피로 회복을 위한 부분 수기 케어",
    icon: "fa-spa",
    desc: "바쁜 일정 속 피로 회복을 위해 사내 회의실 등에 휴식 공간을 가설하고, 어깨/목/등 중심의 15~20분 신속 집중 수기 힐링 서비스를 제공합니다."
  },
  p7: {
    title: "근골격계 질환 예방 소도구 운동",
    tag: "폼롤러 및 마사지볼 자가 관리법 강의",
    icon: "fa-dumbbell",
    desc: "폼롤러, 마사지 듀오볼, 라크로스 볼의 정확한 사용 기법을 익혀 강사 없이도 가정이나 사무실에서 스스로 뭉친 근육을 풀 수 있는 실습 클래스입니다."
  },
  p8: {
    title: "리프레시 아로마 향기 테라피",
    tag: "스트레스 해소를 위한 아로마 테라피 클래스",
    icon: "fa-wand-magic-sparkles",
    desc: "천연 에센셜 오일의 힐링 작용을 이해하고, 스트레스 지수를 낮추는 오피스용 롤온 향수나 천연 필로우 미스트를 직접 조합하여 제작하는 세션입니다."
  },
  p9: {
    title: "대사증후군 예방 영양 및 식습관 컨설팅",
    tag: "1:1 맞춤 영양 상담",
    icon: "fa-apple-whole",
    desc: "야근과 불규칙한 식생활로 만성 피로에 처한 직원을 위해 체성분 측정 결과를 보고 1:1 맞춤 영양 설계 및 대사성 질환 방지 가이드를 제시합니다."
  },
  p10: {
    title: "조직 활성화 웰니스 워크숍",
    tag: "팀 빌딩 및 신체 소통 워크숍",
    icon: "fa-people-group",
    desc: "팀 단위로 가볍게 모여 2인 1조 짝 스트레칭 및 신체 긴장 이완 액티비티를 통해 부서 장벽을 해소하고 조직 내 웰니스 힐링 분위기를 다집니다."
  }
};

// 오프라인 지점 정보 (5개 지점)
const BRANCH_CENTERS = [
  {
    id: "c1",
    label: "1호점",
    name: "피지컬케어 강남본점",
    addr: "서울 강남구 테헤란로 123",
    desc: "1:1 재활도수 및 체형교정 필라테스"
  },
  {
    id: "c2",
    label: "2호점",
    name: "피지컬케어 여의도점",
    addr: "서울 영등포구 여의대로 45",
    desc: "금융업 임직원 맞춤 척추 디스크 전문 케어"
  },
  {
    id: "c3",
    label: "3호점",
    name: "피지컬케어 판교IT점",
    addr: "경기 성남시 분당구 판교역로 230",
    desc: "IT 종사자 VDT증후군 맞춤 집중 센터"
  },
  {
    id: "c4",
    label: "4호점",
    name: "피지컬케어 마포공덕점",
    addr: "서울 마포구 백범로 199",
    desc: "복합 근골격계 스트레스 완화 운동실"
  },
  {
    id: "c5",
    label: "5호점",
    name: "피지컬케어 가산디지털점",
    addr: "서울 금천구 가산디지털1로 168",
    desc: "거북목 및 1:1 수기 근막 힐링 교정 전문"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements - Input
  const clientNameInput = document.getElementById("input-client-name");
  const clientLogoInput = document.getElementById("input-client-logo");
  const themeColorInput = document.getElementById("input-theme-color");
  const themeColorHexInput = document.getElementById("input-theme-color-hex");
  const proposalTitleInput = document.getElementById("input-proposal-title");
  const proposalSubtitleInput = document.getElementById("input-proposal-subtitle");
  const proposalDateInput = document.getElementById("input-proposal-date");
  
  const expertCountInput = document.getElementById("input-expert-count");
  const totalCareInput = document.getElementById("input-total-care");
  const careTimeInput = document.getElementById("input-care-time");
  const operatingTimeInput = document.getElementById("input-operating-time");
  const benefitsInput = document.getElementById("input-benefits");
  
  const contactPhoneInput = document.getElementById("input-contact-phone");
  const contactEmailInput = document.getElementById("input-contact-email");
  const contactWebInput = document.getElementById("input-contact-web");
  
  const toggleCenterCheckbox = document.getElementById("toggle-center");
  const printBtn = document.getElementById("btn-print");
  
  const logoSizeInput = document.getElementById("input-logo-size");
  const logoSizeVal = document.getElementById("logo-size-val");
  const btnToggleDrag = document.getElementById("btn-toggle-drag");

  // 브랜드 로고 크기 조절 슬라이더 엘리먼트
  const brandLogoSizeInput = document.getElementById("input-brand-logo-size");
  const brandLogoSizeVal = document.getElementById("brand-logo-size-val");

  // DOM Elements - Image AI Editor Modal
  const imageEditorModal = document.getElementById("image-editor-modal");
  const editorCanvas = document.getElementById("image-editor-canvas");
  const editorCtx = editorCanvas.getContext("2d");
  const btnCloseImageEditor = document.getElementById("btn-close-image-editor");
  const btnCancelImageEdit = document.getElementById("btn-cancel-image-edit");
  const btnApplyImageEdit = document.getElementById("btn-apply-image-edit");
  const btnAiBgRemove = document.getElementById("btn-ai-bg-remove");
  const btnAiEnhance = document.getElementById("btn-ai-enhance");
  const toggleEraserMode = document.getElementById("toggle-eraser-mode");
  const eraserBrushGroup = document.getElementById("eraser-brush-group");
  const inputEraserBrushSize = document.getElementById("input-eraser-brush-size");
  const eraserBrushSizeVal = document.getElementById("eraser-brush-size-val");
  const editorScanLine = document.getElementById("editor-scan-line");
  const editorLoader = document.getElementById("editor-loader");
  const editorLoaderText = document.getElementById("editor-loader-text");
  
  let activeEditingImage = null; // 현재 편집 중인 이미지 요소 레퍼런스
  
  // Undo (되돌리기) 상태 저장소 변수
  const undoStack = [];
  const MAX_UNDO_LIMIT = 35;
  let isUndoing = false;
  
  // DOM Elements - Customizer & Accordions
  const toggleProgramEdit = document.getElementById("toggle-program-edit");
  const arrowProgramEdit = document.getElementById("arrow-program-edit");
  const programEditList = document.getElementById("program-edit-list");
  
  const toggleBranchEdit = document.getElementById("toggle-branch-edit");
  const arrowBranchEdit = document.getElementById("arrow-branch-edit");
  const branchEditList = document.getElementById("branch-edit-list");
  
  const selectedBranchesContainer = document.getElementById("selected-branches-container");
  
  // DOM Elements - Presentation Mode
  const btnViewScroll = document.getElementById("btn-view-scroll");
  const btnViewSlide = document.getElementById("btn-view-slide");
  const slideNavControls = document.getElementById("slide-nav-controls");
  const btnPrevSlide = document.getElementById("btn-prev-slide");
  const btnNextSlide = document.getElementById("btn-next-slide");
  const slideIndicatorText = document.getElementById("slide-indicator-text");
  
  // DOM Elements - Preview Output
  const previewArea = document.getElementById("preview-area");
  const viewClientLogoText = document.getElementById("view-client-logo-text");
  const viewClientLogoImg = document.getElementById("view-client-logo-img");
  const viewProposalTitle = document.getElementById("view-proposal-title");
  const viewProposalSubtitle = document.getElementById("view-proposal-subtitle");
  const viewProposalDate = document.getElementById("view-proposal-date");
  
  const viewExpertCount = document.getElementById("view-expert-count");
  const viewTotalCare = document.getElementById("view-total-care");
  const viewCareTime = document.getElementById("view-care-time");
  const viewOperatingTime = document.getElementById("view-operating-time");
  const viewBenefits = document.getElementById("view-benefits");
  
  const viewClientNameClosing = document.getElementById("view-client-name-closing");
  
  const viewContactPhone = document.getElementById("view-contact-phone");
  const viewContactEmail = document.getElementById("view-contact-email");
  const viewContactWeb = document.getElementById("view-contact-web");
  
  const slideCenters = document.getElementById("slide-centers");
  const selectedProgramsGrid = document.getElementById("selected-programs-grid");

  // --- Functions ---

  // 우리 회사 / 브랜드 로고 크기 일괄 적용 기능
  function applyBrandLogoSize(heightVal) {
    // 1. 슬라이드 상단의 FaWW 로고 크기 조절
    const topLogos = document.querySelectorAll(".faww-logo-top");
    topLogos.forEach(logo => {
      logo.style.height = heightVal + "px";
      logo.style.maxHeight = heightVal + "px";
    });

    // 2. 마지막 슬라이드 푸터의 브랜드 로고들 크기 조절
    const footerLogos = document.querySelectorAll(".footer-logo img");
    footerLogos.forEach(logo => {
      logo.style.height = heightVal + "px";
      logo.style.maxHeight = heightVal + "px";
    });
  }

  // 이미지 에디터 모달 열기 및 초기 이미지 로드
  function openImageEditor(imgEl) {
    activeEditingImage = imgEl;

    // 브러시 서클 가이드 엘리먼트 자동 생성 (없을 경우)
    let brushCircle = document.querySelector(".brush-visual-circle");
    if (!brushCircle) {
      brushCircle = document.createElement("div");
      brushCircle.className = "brush-visual-circle no-print";
      editorCanvas.parentElement.appendChild(brushCircle);
    }
    brushCircle.style.display = "none";

    // 캔버스 초기 크기를 원본 이미지 실제 크기로 지정
    const originalWidth = imgEl.naturalWidth || imgEl.width || 400;
    const originalHeight = imgEl.naturalHeight || imgEl.height || 300;
    editorCanvas.width = originalWidth;
    editorCanvas.height = originalHeight;

    // 지우개 모드 초기화 (기본 비활성화)
    toggleEraserMode.checked = false;
    eraserBrushGroup.style.display = "none";
    editorCanvas.classList.remove("eraser-active");

    // 이미지 그리기
    const tempImg = new Image();
    // CORS 보안 오염 방지 (DataURL은 무관하나 일반 로컬 파일 대응용)
    if (imgEl.src.startsWith("data:") || imgEl.src.includes(window.location.host) || !imgEl.src.startsWith("http")) {
      // safe
    } else {
      tempImg.crossOrigin = "anonymous";
    }
    
    tempImg.onload = () => {
      editorCtx.clearRect(0, 0, originalWidth, originalHeight);
      editorCtx.drawImage(tempImg, 0, 0);
      imageEditorModal.classList.remove("hidden");
    };
    tempImg.src = imgEl.src;
  }

  // --- Undo (되돌리기) 스냅샷 상태 저장 ---
  function saveState() {
    if (isUndoing) return;

    // 히스토리 복사 시 정렬 가이드 및 선택 핸들 같은 임시 렌더링 요소를 제외하기 위해 clone 생성 후 청소
    const clone = previewArea.cloneNode(true);
    clone.querySelectorAll(".el-drag-handle, .el-resize-handle, .delete-el-btn, .alignment-guide-line").forEach(el => el.remove());
    clone.querySelectorAll(".selected-el").forEach(el => el.classList.remove("selected-el"));
    
    const cleanHTML = clone.innerHTML;

    // 직전 상태와 동일하면 중복 저장 스킵
    if (undoStack.length > 0 && undoStack[undoStack.length - 1] === cleanHTML) {
      return;
    }

    undoStack.push(cleanHTML);
    if (undoStack.length > MAX_UNDO_LIMIT) {
      undoStack.shift(); // 스택 한계 초과 시 오래된 내역 제거
    }
  }

  // --- Undo (되돌리기) 복구 실행 ---
  function undo() {
    if (undoStack.length === 0) {
      return;
    }

    isUndoing = true;

    // 현재 상태 구하기 (임시 UI 제거된 것 기준)
    const clone = previewArea.cloneNode(true);
    clone.querySelectorAll(".el-drag-handle, .el-resize-handle, .delete-el-btn, .alignment-guide-line").forEach(el => el.remove());
    clone.querySelectorAll(".selected-el").forEach(el => el.classList.remove("selected-el"));
    const currentHTML = clone.innerHTML;

    // 스택 가장 위의 내역이 현재 상태와 똑같다면 버림 (이미 그 상태이므로)
    if (undoStack.length > 0 && undoStack[undoStack.length - 1] === currentHTML) {
      undoStack.pop();
    }

    if (undoStack.length === 0) {
      isUndoing = false;
      return;
    }

    const previousState = undoStack.pop();
    previewArea.innerHTML = previousState;

    // 돔 교체에 따른 상호작용 기능 재연결
    // 1. 드래그 가능한 시스템 다시 빌드
    initDraggableSystem();
    
    // 2. 위치 이동 모드가 켜진 경우에 따른 absolute 조절 상태 복원
    if (isDragActive) {
      const elements = document.querySelectorAll(".draggable-el");
      elements.forEach(el => {
        el.classList.add("drag-mode-ready");
        el.style.position = "absolute";
      });
    }

    // 3. WYSIWYG 텍스트 직접 편집 바인딩 재설정
    initInlineTextEditing();

    // 4. 슬라이드 포커스 지정 이벤트 재연결
    rebindSlideFocusEvents();

    // 5. 페이지 번호 재연산
    updatePageNumbers();

    isUndoing = false;
  }

  // 슬라이드 포커스 지정 이벤트 재설정 함수
  function rebindSlideFocusEvents() {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide) => {
      // 이벤트 중복 바인딩 방지 플래그 활용
      if (!slide.dataset.boundFocus) {
        slide.dataset.boundFocus = "true";
        slide.addEventListener("click", () => {
          document.querySelectorAll(".slide").forEach(s => s.classList.remove("active-slide-focus"));
          slide.classList.add("active-slide-focus");
          activeSlide = slide;
        });
      }
    });

    // 활성 포커스 포인터 재설정
    const focused = document.querySelector(".slide.active-slide-focus");
    if (!focused && slides.length > 0) {
      slides[0].classList.add("active-slide-focus");
      activeSlide = slides[0];
    } else if (focused) {
      activeSlide = focused;
    }
  }

  // Hex 색상을 변환하여 보조 변수 설정 (Light & Dark 톤 계산)
  function updateThemeColors(hexColor) {
    // hex 파싱
    let hex = hexColor.replace("#", "");
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    // 1. Light Color (5% 투명한 배경용)
    const lightColor = `rgba(${r}, ${g}, ${b}, 0.05)`;
    
    // 2. Dark Color (30% 명도 하강)
    const darkR = Math.max(0, Math.floor(r * 0.7));
    const darkG = Math.max(0, Math.floor(g * 0.7));
    const darkB = Math.max(0, Math.floor(b * 0.7));
    const darkColor = `rgb(${darkR}, ${darkG}, ${darkB})`;

    // CSS Custom variables 적용
    previewArea.style.setProperty("--primary-color", hexColor);
    previewArea.style.setProperty("--primary-light", lightColor);
    previewArea.style.setProperty("--primary-dark", darkColor);
  }

  // 기업 로고 파일 업로드 처리
  function handleLogoUpload(file) {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        viewClientLogoImg.src = e.target.result;
        viewClientLogoImg.classList.remove("hidden");
        viewClientLogoText.classList.add("hidden");
      };
      reader.readAsDataURL(file);
    } else {
      // 이미지 미설정 시 기업명을 텍스트 로고로
      viewClientLogoImg.src = "";
      viewClientLogoImg.classList.add("hidden");
      viewClientLogoText.classList.remove("hidden");
    }
  }

  // 선택된 EAP 프로그램 카드를 슬라이드에 동적 렌더링
  function renderSelectedPrograms() {
    selectedProgramsGrid.innerHTML = "";
    
    const checkedCheckboxes = document.querySelectorAll(".program-checkbox:checked");
    
    checkedCheckboxes.forEach((checkbox) => {
      const progId = checkbox.value;
      const progInfo = EAP_PROGRAMS[progId];
      
      if (progInfo) {
        const card = document.createElement("div");
        card.className = "program-card-grid";
        
        card.innerHTML = `
          <div class="prog-tag font-outfit">${progInfo.tag}</div>
          <h4><i class="fa-solid ${progInfo.icon}" style="color: var(--primary-color); margin-right: 6px;"></i> ${progInfo.title}</h4>
          <p>${progInfo.desc}</p>
        `;
        
        selectedProgramsGrid.appendChild(card);
      }
    });

    // 선택 개수에 따라 그리드 레이아웃 조절
    const count = checkedCheckboxes.length;
    if (count <= 3) {
      selectedProgramsGrid.style.gridTemplateColumns = "repeat(auto-fit, minmax(250px, 1fr))";
    } else if (count <= 6) {
      selectedProgramsGrid.style.gridTemplateColumns = "repeat(3, 1fr)";
    } else {
      selectedProgramsGrid.style.gridTemplateColumns = "repeat(4, 1fr)";
    }

    // WYSIWYG 바인딩 및 드래그 바인딩 재설정
    if (typeof initInlineTextEditing === "function") initInlineTextEditing();
    if (typeof initDraggableSystem === "function") initDraggableSystem();
    if (typeof isDragActive !== "undefined" && isDragActive && typeof toggleDragMode === "function") toggleDragMode(true);
  }

  // 슬라이드 표시 여부에 따른 동적 페이지 번호 갱신
  function updatePageNumbers() {
    const slides = document.querySelectorAll("#preview-area > .slide");
    let pageCounter = 1;
    
    slides.forEach((slide) => {
      if (slide.style.display !== "none" && !slide.classList.contains("slide-cover")) {
        const pageNumEl = slide.querySelector(".page-number");
        if (pageNumEl) {
          pageNumEl.textContent = pageCounter;
        }
        pageCounter++;
      } else if (slide.classList.contains("slide-cover")) {
        // 커버는 카운트하지 않음
      }
    });
  }

  // 지점 소개 렌더링
  function renderBranches() {
    selectedBranchesContainer.innerHTML = "";
    BRANCH_CENTERS.forEach((center) => {
      const div = document.createElement("div");
      div.className = "branch-item";
      div.innerHTML = `
        <div class="branch-badge">${center.label}</div>
        <div class="branch-info">
          <strong>${center.name}</strong>
          <p>${center.addr} | ${center.desc}</p>
        </div>
      `;
      selectedBranchesContainer.appendChild(div);
    });

    // WYSIWYG 바인딩 및 드래그 바인딩 재설정
    if (typeof initInlineTextEditing === "function") initInlineTextEditing();
    if (typeof initDraggableSystem === "function") initDraggableSystem();
    if (typeof isDragActive !== "undefined" && isDragActive && typeof toggleDragMode === "function") toggleDragMode(true);
  }

  // 지점 정보 실시간 편집기 생성
  function renderBranchEditors() {
    branchEditList.innerHTML = "";
    BRANCH_CENTERS.forEach((center, idx) => {
      const formGroup = document.createElement("div");
      formGroup.className = "branch-edit-item";
      formGroup.style.borderBottom = "1px solid #374151";
      formGroup.style.paddingBottom = "10px";
      formGroup.style.marginBottom = "10px";
      
      formGroup.innerHTML = `
        <div style="font-size: 11px; font-weight: 700; color: var(--primary-color); margin-bottom: 6px;">${center.label} 편집</div>
        <div class="form-group" style="margin-bottom: 8px;">
          <label style="font-size: 10px;">지점명</label>
          <input type="text" class="branch-name-input" data-idx="${idx}" value="${center.name}" style="width: 100%; padding: 6px 8px; font-size: 12px; background-color: #111827; border: 1px solid #374151; color: white; border-radius: 4px;">
        </div>
        <div class="form-group" style="margin-bottom: 8px;">
          <label style="font-size: 10px;">주소</label>
          <input type="text" class="branch-addr-input" data-idx="${idx}" value="${center.addr}" style="width: 100%; padding: 6px 8px; font-size: 12px; background-color: #111827; border: 1px solid #374151; color: white; border-radius: 4px;">
        </div>
        <div class="form-group" style="margin-bottom: 0;">
          <label style="font-size: 10px;">설명</label>
          <input type="text" class="branch-desc-input" data-idx="${idx}" value="${center.desc}" style="width: 100%; padding: 6px 8px; font-size: 12px; background-color: #111827; border: 1px solid #374151; color: white; border-radius: 4px;">
        </div>
      `;
      branchEditList.appendChild(formGroup);
    });
    
    // 지점명 수정 이벤트 바인딩
    branchEditList.querySelectorAll(".branch-name-input").forEach(input => {
      input.addEventListener("input", (e) => {
        const index = e.target.dataset.idx;
        BRANCH_CENTERS[index].name = e.target.value;
        renderBranches();
      });
    });
    // 주소 수정 이벤트 바인딩
    branchEditList.querySelectorAll(".branch-addr-input").forEach(input => {
      input.addEventListener("input", (e) => {
        const index = e.target.dataset.idx;
        BRANCH_CENTERS[index].addr = e.target.value;
        renderBranches();
      });
    });
    // 설명 수정 이벤트 바인딩
    branchEditList.querySelectorAll(".branch-desc-input").forEach(input => {
      input.addEventListener("input", (e) => {
        const index = e.target.dataset.idx;
        BRANCH_CENTERS[index].desc = e.target.value;
        renderBranches();
      });
    });
  }

  // 선택된 EAP 프로그램 편집기 동적 생성
  function renderEapProgramEditors() {
    programEditList.innerHTML = "";
    const checkedCheckboxes = document.querySelectorAll(".program-checkbox:checked");
    
    if (checkedCheckboxes.length === 0) {
      programEditList.innerHTML = `<div style="font-size: 11px; color: #9ca3af; text-align: center;">선택된 프로그램이 없습니다.</div>`;
      return;
    }
    
    checkedCheckboxes.forEach((checkbox) => {
      const progId = checkbox.value;
      const progInfo = EAP_PROGRAMS[progId];
      if (progInfo) {
        const div = document.createElement("div");
        div.className = "program-edit-item";
        div.style.borderBottom = "1px solid #374151";
        div.style.paddingBottom = "10px";
        div.style.marginBottom = "10px";
        
        div.innerHTML = `
          <div style="font-size: 11px; font-weight: 700; color: var(--primary-color); margin-bottom: 6px;">[${progId.toUpperCase()}] ${progInfo.title}</div>
          <div class="form-group" style="margin-bottom: 8px;">
            <label style="font-size: 10px;">프로그램명</label>
            <input type="text" class="prog-title-input" data-id="${progId}" value="${progInfo.title}" style="width: 100%; padding: 6px 8px; font-size: 12px; background-color: #111827; border: 1px solid #374151; color: white; border-radius: 4px;">
          </div>
          <div class="form-group" style="margin-bottom: 8px;">
            <label style="font-size: 10px;">태그</label>
            <input type="text" class="prog-tag-input" data-id="${progId}" value="${progInfo.tag}" style="width: 100%; padding: 6px 8px; font-size: 12px; background-color: #111827; border: 1px solid #374151; color: white; border-radius: 4px;">
          </div>
          <div class="form-group" style="margin-bottom: 0;">
            <label style="font-size: 10px;">상세 설명</label>
            <textarea class="prog-desc-input" data-id="${progId}" style="width: 100%; height: 50px; padding: 6px 8px; font-size: 11.5px; background-color: #111827; border: 1px solid #374151; color: white; border-radius: 4px; resize: vertical; font-family: inherit;">${progInfo.desc}</textarea>
          </div>
        `;
        programEditList.appendChild(div);
      }
    });
    
    // 프로그램명 수정 이벤트 바인딩
    programEditList.querySelectorAll(".prog-title-input").forEach(input => {
      input.addEventListener("input", (e) => {
        const id = e.target.dataset.id;
        EAP_PROGRAMS[id].title = e.target.value;
        renderSelectedPrograms();
      });
    });
    // 태그 수정 이벤트 바인딩
    programEditList.querySelectorAll(".prog-tag-input").forEach(input => {
      input.addEventListener("input", (e) => {
        const id = e.target.dataset.id;
        EAP_PROGRAMS[id].tag = e.target.value;
        renderSelectedPrograms();
      });
    });
    // 상세 설명 수정 이벤트 바인딩
    programEditList.querySelectorAll(".prog-desc-input").forEach(input => {
      input.addEventListener("input", (e) => {
        const id = e.target.dataset.id;
        EAP_PROGRAMS[id].desc = e.target.value;
        renderSelectedPrograms();
      });
    });
  }

  // --- Event Listeners (양방향 바인딩) ---

  // 1. 기업명
  clientNameInput.addEventListener("input", (e) => {
    const val = e.target.value || "Client Name";
    viewClientLogoText.textContent = val;
    viewClientNameClosing.textContent = val;
  });

  // 2. 로고 파일 업로드
  clientLogoInput.addEventListener("change", (e) => {
    handleLogoUpload(e.target.files[0]);
  });

  // 3. 테마 컬러
  themeColorInput.addEventListener("input", (e) => {
    const val = e.target.value;
    themeColorHexInput.value = val.toUpperCase();
    updateThemeColors(val);
  });
  
  themeColorHexInput.addEventListener("input", (e) => {
    let val = e.target.value;
    if (!val.startsWith("#")) val = "#" + val;
    if (/^#[0-9A-F]{6}$/i.test(val)) {
      themeColorInput.value = val;
      updateThemeColors(val);
    }
  });

  // 4. 제안 타이틀 / 소제목 / 날짜
  proposalTitleInput.addEventListener("input", (e) => {
    viewProposalTitle.textContent = e.target.value;
  });
  
  proposalSubtitleInput.addEventListener("input", (e) => {
    viewProposalSubtitle.textContent = e.target.value;
  });
  
  proposalDateInput.addEventListener("input", (e) => {
    viewProposalDate.textContent = e.target.value;
  });

  // 5. 제안 요약 데이터
  expertCountInput.addEventListener("input", (e) => {
    viewExpertCount.textContent = e.target.value;
  });
  
  totalCareInput.addEventListener("input", (e) => {
    viewTotalCare.textContent = e.target.value;
  });
  
  careTimeInput.addEventListener("input", (e) => {
    viewCareTime.textContent = e.target.value;
  });
  
  operatingTimeInput.addEventListener("input", (e) => {
    viewOperatingTime.textContent = e.target.value;
  });
  
  benefitsInput.addEventListener("input", (e) => {
    viewBenefits.textContent = e.target.value;
  });

  // 6. 주식회사 파우 담당자 연락처
  contactPhoneInput.addEventListener("input", (e) => {
    viewContactPhone.textContent = e.target.value;
  });
  
  contactEmailInput.addEventListener("input", (e) => {
    viewContactEmail.textContent = e.target.value;
  });
  
  contactWebInput.addEventListener("input", (e) => {
    viewContactWeb.textContent = e.target.value;
  });

  // 7. EAP 프로그램 선택 체크박스 변경 및 에디터 동적 갱신
  document.querySelectorAll(".program-checkbox").forEach((cb) => {
    cb.addEventListener("change", () => {
      renderSelectedPrograms();
      renderEapProgramEditors();
      if (currentViewMode === "slide") {
        applyViewMode();
      }
    });
  });

  // 8. 오프라인 운동센터 지점 소개 토글
  toggleCenterCheckbox.addEventListener("change", (e) => {
    if (e.target.checked) {
      slideCenters.style.display = "flex";
    } else {
      slideCenters.style.display = "none";
    }
    updatePageNumbers();
    if (currentViewMode === "slide") {
      updateActiveSlides();
      if (currentSlideIndex >= activeSlides.length) {
        currentSlideIndex = Math.max(0, activeSlides.length - 1);
      }
      applyViewMode();
    }
  });

  // 9. PDF 인쇄 버튼
  printBtn.addEventListener("click", () => {
    const prevMode = currentViewMode;
    if (prevMode === "slide") {
      currentViewMode = "scroll";
      applyViewMode();
    }
    window.print();
    if (prevMode === "slide") {
      setTimeout(() => {
        currentViewMode = "slide";
        applyViewMode();
      }, 500);
    }
  });

  // 10. 아코디언 토글 이벤트 바인딩
  toggleProgramEdit.addEventListener("click", () => {
    const isHidden = programEditList.style.display === "none" || programEditList.style.display === "";
    if (isHidden) {
      programEditList.style.display = "flex";
      arrowProgramEdit.className = "fa-solid fa-chevron-down";
    } else {
      programEditList.style.display = "none";
      arrowProgramEdit.className = "fa-solid fa-chevron-right";
    }
  });
  
  toggleBranchEdit.addEventListener("click", () => {
    const isHidden = branchEditList.style.display === "none" || branchEditList.style.display === "";
    if (isHidden) {
      branchEditList.style.display = "flex";
      arrowBranchEdit.className = "fa-solid fa-chevron-down";
    } else {
      branchEditList.style.display = "none";
      arrowBranchEdit.className = "fa-solid fa-chevron-right";
    }
  });

  // --- 슬라이드 쇼 및 조작 모드 로직 ---
  let currentViewMode = "scroll"; // "scroll" 또는 "slide"
  let currentSlideIndex = 0;
  let activeSlides = [];

  function updateActiveSlides() {
    const allSlides = document.querySelectorAll("#preview-area > .slide");
    activeSlides = [];
    allSlides.forEach((slide) => {
      if (slide.style.display !== "none") {
        activeSlides.push(slide);
      }
    });
  }

  function updateSlideIndicator() {
    slideIndicatorText.textContent = `${currentSlideIndex + 1} / ${activeSlides.length}`;
  }

  function applyViewMode() {
    updateActiveSlides();
    if (currentViewMode === "slide") {
      activeSlides.forEach((slide, idx) => {
        if (idx === currentSlideIndex) {
          slide.classList.add("active-slide-mode");
          slide.style.setProperty("display", "flex", "important");
        } else {
          slide.classList.remove("active-slide-mode");
          slide.style.setProperty("display", "none", "important");
        }
      });
      slideNavControls.style.display = "flex";
      updateSlideIndicator();
    } else {
      const allSlides = document.querySelectorAll("#preview-area > .slide");
      allSlides.forEach((slide) => {
        slide.classList.remove("active-slide-mode");
        if (slide === slideCenters) {
          slide.style.display = toggleCenterCheckbox.checked ? "flex" : "none";
        } else {
          slide.style.display = "flex";
        }
      });
      slideNavControls.style.display = "none";
    }
  }

  function prevSlide() {
    if (currentSlideIndex > 0) {
      currentSlideIndex--;
      applyViewMode();
    }
  }

  function nextSlide() {
    if (currentSlideIndex < activeSlides.length - 1) {
      currentSlideIndex++;
      applyViewMode();
    }
  }

  btnViewScroll.addEventListener("click", () => {
    currentViewMode = "scroll";
    btnViewScroll.classList.add("active");
    btnViewSlide.classList.remove("active");
    applyViewMode();
  });

  btnViewSlide.addEventListener("click", () => {
    currentViewMode = "slide";
    btnViewSlide.classList.add("active");
    btnViewScroll.classList.remove("active");
    currentSlideIndex = 0;
    applyViewMode();
  });

  btnPrevSlide.addEventListener("click", prevSlide);
  btnNextSlide.addEventListener("click", nextSlide);

  document.addEventListener("keydown", (e) => {
    // 1. 단축키 Ctrl + Z 감지 (되돌리기)
    if (e.ctrlKey && e.key.toLowerCase() === "z") {
      // contenteditable 활성화 포커스 시 브라우저 기본 Undo와 혼선 방지하기 위해 강제 전역 Undo 작동
      e.preventDefault();
      undo();
      return;
    }

    if (currentViewMode === "slide") {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    }
  });

  // 사이드바 설정 값 변경 위임 이벤트 리스너 (Undo 상태 저장용)
  const sidebarEl = document.querySelector(".sidebar");
  if (sidebarEl) {
    sidebarEl.addEventListener("change", (e) => {
      // 텍스트 파일 로드 및 이미지 업로드 파일 엘리먼트 등 특수 용도는 저장 스킵
      if (e.target.id === "ai-ref-file" || e.target.id === "input-client-logo") return;
      saveState();
    });
  }

  // --- 11. 기업 로고 크기(높이) 조절 슬라이더 리스너 ---
  logoSizeInput.addEventListener("input", (e) => {
    const val = e.target.value;
    logoSizeVal.textContent = val;
    
    // 로고 이미지 높이 조절
    viewClientLogoImg.style.height = val + "px";
    viewClientLogoImg.style.maxHeight = val + "px";
    
    // 로고 텍스트 크기 조절
    viewClientLogoText.style.fontSize = Math.floor(val * 0.58) + "px";
  });

  // 브랜드 로고 크기 조절 슬라이더 리스너
  brandLogoSizeInput.addEventListener("input", (e) => {
    const val = e.target.value;
    brandLogoSizeVal.textContent = val;
    applyBrandLogoSize(val);
  });

  // 이미지 더블클릭 이벤트 위임 (편집기 모달 열기)
  previewArea.addEventListener("dblclick", (e) => {
    if (e.target.tagName === "IMG") {
      e.stopPropagation();
      openImageEditor(e.target);
    }
  });

  // 이미지 에디터 모달 닫기
  btnCloseImageEditor.addEventListener("click", () => {
    imageEditorModal.classList.add("hidden");
  });
  btnCancelImageEdit.addEventListener("click", () => {
    imageEditorModal.classList.add("hidden");
  });

  // 이미지 에디터 적용 완료
  btnApplyImageEdit.addEventListener("click", () => {
    if (activeEditingImage) {
      saveState(); // 변경 전 상태 저장
      activeEditingImage.src = editorCanvas.toDataURL();
      // WYSIWYG에 데이터 변경 통지
      activeEditingImage.dispatchEvent(new Event("change"));
      saveState(); // 변경 후 상태 저장
    }
    imageEditorModal.classList.add("hidden");
  });

  // AI 1:1 기능 - 배경 제거 (누끼)
  btnAiBgRemove.addEventListener("click", () => {
    editorLoaderText.textContent = "AI 배경 분석 및 누끼 처리 중...";
    editorLoader.classList.remove("hidden");
    editorScanLine.classList.remove("hidden");

    setTimeout(() => {
      try {
        const imgData = editorCtx.getImageData(0, 0, editorCanvas.width, editorCanvas.height);
        const data = imgData.data;

        // 흰색/유사 흰색 배경을 투명하게 (R,G,B 모두 230 이상)
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i+1];
          const b = data[i+2];

          // 흰색 영역 투명도 0
          if (r >= 230 && g >= 230 && b >= 230) {
            data[i+3] = 0;
          }
        }

        editorCtx.putImageData(imgData, 0, 0);
      } catch (err) {
        console.error("배경 제거 에러:", err);
      } finally {
        editorLoader.classList.add("hidden");
        editorScanLine.classList.add("hidden");
      }
    }, 1500); // 1.5초 시뮬레이션 연출
  });

  // AI 1:1 기능 - 화질 개선 (Enhance)
  btnAiEnhance.addEventListener("click", () => {
    editorLoaderText.textContent = "화질 복원 및 해상도 최적화 중...";
    editorLoader.classList.remove("hidden");
    editorScanLine.classList.remove("hidden");

    setTimeout(() => {
      try {
        const tempCanvas = document.createElement("canvas");
        tempCanvas.width = editorCanvas.width;
        tempCanvas.height = editorCanvas.height;
        const tempCtx = tempCanvas.getContext("2d");
        tempCtx.drawImage(editorCanvas, 0, 0);

        editorCtx.clearRect(0, 0, editorCanvas.width, editorCanvas.height);
        // Canvas Filter API를 활용한 대비, 채도, 밝기 최적화 및 쨍한 선명도 유도
        editorCtx.filter = "contrast(1.18) saturate(1.08) brightness(1.01)";
        editorCtx.drawImage(tempCanvas, 0, 0);
        editorCtx.filter = "none";
      } catch (err) {
        console.error("화질 개선 에러:", err);
      } finally {
        editorLoader.classList.add("hidden");
        editorScanLine.classList.add("hidden");
      }
    }, 1000);
  });

  // 지우개 모드 토글 제어
  toggleEraserMode.addEventListener("change", (e) => {
    const active = e.target.checked;
    if (active) {
      eraserBrushGroup.style.display = "block";
      editorCanvas.classList.add("eraser-active");
    } else {
      eraserBrushGroup.style.display = "none";
      editorCanvas.classList.remove("eraser-active");
      const brushCircle = document.querySelector(".brush-visual-circle");
      if (brushCircle) brushCircle.style.display = "none";
    }
  });

  // 지우개 브러시 크기 변경
  inputEraserBrushSize.addEventListener("input", (e) => {
    eraserBrushSizeVal.textContent = e.target.value;
  });

  // 캔버스 지우개(Object Eraser) 마우스/터치 드로잉 기능 구현
  let isErasing = false;
  
  // 마우스 좌표를 캔버스의 실제 논리적 픽셀 좌표로 변환
  function getCanvasCoords(e) {
    const rect = editorCanvas.getBoundingClientRect();
    const scaleX = editorCanvas.width / rect.width;
    const scaleY = editorCanvas.height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
      clientX: e.clientX,
      clientY: e.clientY
    };
  }

  // 브러시 서클 가이드 위치 및 크기 동기화
  function updateBrushGuide(clientX, clientY, size) {
    const brushCircle = document.querySelector(".brush-visual-circle");
    if (!brushCircle || !toggleEraserMode.checked) return;

    const canvasRect = editorCanvas.getBoundingClientRect();
    const parentRect = editorCanvas.parentElement.getBoundingClientRect();

    // 마우스 커서가 캔버스 영역 내에 있을 때만 표시
    if (
      clientX >= canvasRect.left && clientX <= canvasRect.right &&
      clientY >= canvasRect.top && clientY <= canvasRect.bottom
    ) {
      // 캔버스 물리적 크기에 맞춰 가이드 크기도 스케일 변환
      const scaleFactor = canvasRect.width / editorCanvas.width;
      const visualSize = size * scaleFactor;

      brushCircle.style.width = visualSize + "px";
      brushCircle.style.height = visualSize + "px";
      brushCircle.style.left = (clientX - parentRect.left) + "px";
      brushCircle.style.top = (clientY - parentRect.top) + "px";
      brushCircle.style.display = "block";
    } else {
      brushCircle.style.display = "none";
    }
  }

  editorCanvas.addEventListener("mousedown", (e) => {
    if (!toggleEraserMode.checked) return;
    isErasing = true;

    const coords = getCanvasCoords(e);
    const brushSize = parseInt(inputEraserBrushSize.value);

    editorCtx.beginPath();
    editorCtx.globalCompositeOperation = "destination-out"; // 지우개 합성 모드
    editorCtx.arc(coords.x, coords.y, brushSize / 2, 0, Math.PI * 2);
    editorCtx.fill();

    editorCtx.beginPath();
    editorCtx.moveTo(coords.x, coords.y);
  });

  editorCanvas.addEventListener("mousemove", (e) => {
    const brushSize = parseInt(inputEraserBrushSize.value);
    const coords = getCanvasCoords(e);

    // 가이드 원형 동기화
    updateBrushGuide(coords.clientX, coords.clientY, brushSize);

    if (!isErasing || !toggleEraserMode.checked) return;

    editorCtx.lineWidth = brushSize;
    editorCtx.lineCap = "round";
    editorCtx.lineJoin = "round";
    editorCtx.lineTo(coords.x, coords.y);
    editorCtx.stroke();
  });

  const stopErasing = () => {
    isErasing = false;
    editorCtx.globalCompositeOperation = "source-over"; // 기본 드로잉 복원
  };

  editorCanvas.addEventListener("mouseup", stopErasing);
  editorCanvas.addEventListener("mouseleave", () => {
    stopErasing();
    const brushCircle = document.querySelector(".brush-visual-circle");
    if (brushCircle) brushCircle.style.display = "none";
  });

  // --- 12. WYSIWYG 텍스트 직접 편집 및 양방향 동기화 ---
  function initInlineTextEditing() {
    const editables = document.querySelectorAll(
      ".slide h1, .slide h2, .slide h3, .slide h4, .slide p, .slide li, .slide td, .slide th, .slide strong, .slide .quote-card, .slide .bubble, .slide .client-logo-fallback"
    );
    
    editables.forEach(el => {
      if (el.id === "selected-programs-grid" || el.id === "selected-branches-container") return;
      
      // 위치 이동 모드가 켜진 경우(isDragActive가 true) 편집 입력을 비활성화하여 드래그 앤 드롭 간섭 방지
      el.contentEditable = isDragActive ? "false" : "true";
      
      // 이미 이벤트가 추가되었는지 검사 (중복 방지)
      if (!el.dataset.boundInput) {
        el.dataset.boundInput = "true";

        // 수정 시작 전 상태 저장 백업
        el.addEventListener("focus", () => {
          saveState();
        });

        // 수정 종료 시 상태 저장
        el.addEventListener("blur", () => {
          saveState();
        });

        el.addEventListener("input", (e) => {
          const id = el.id;
          const text = el.innerText;
          
          if (id === "view-proposal-title") {
            proposalTitleInput.value = text;
          } else if (id === "view-proposal-subtitle") {
            proposalSubtitleInput.value = text;
          } else if (id === "view-proposal-date") {
            proposalDateInput.value = text;
          } else if (id === "view-expert-count") {
            expertCountInput.value = text;
          } else if (id === "view-total-care") {
            totalCareInput.value = text;
          } else if (id === "view-care-time") {
            careTimeInput.value = text;
          } else if (id === "view-operating-time") {
            operatingTimeInput.value = text;
          } else if (id === "view-benefits") {
            benefitsInput.value = text;
          } else if (id === "view-contact-phone") {
            contactPhoneInput.value = text;
          } else if (id === "view-contact-email") {
            contactEmailInput.value = text;
          } else if (id === "view-contact-web") {
            contactWebInput.value = text;
          } else if (id === "view-client-name-closing") {
            clientNameInput.value = text;
            viewClientLogoText.textContent = text;
          } else if (id === "view-client-logo-text") {
            clientNameInput.value = text;
            viewClientNameClosing.textContent = text;
          }
        });
      }
    });
  }

  // --- 13. 위치 이동 모드 토글 및 드래그 엔진 ---
  let isDragActive = false;
  let selectedElement = null;

  btnToggleDrag.addEventListener("click", () => {
    isDragActive = !isDragActive;
    if (isDragActive) {
      btnToggleDrag.classList.add("active");
      btnToggleDrag.style.backgroundColor = "var(--primary-color)";
      btnToggleDrag.style.borderColor = "var(--primary-color)";
      toggleDragMode(true);
    } else {
      btnToggleDrag.classList.remove("active");
      btnToggleDrag.style.backgroundColor = "#1f2937";
      btnToggleDrag.style.borderColor = "#4b5563";
      toggleDragMode(false);
    }
    // 위치 이동 모드 전환에 따라 텍스트 요소의 contentEditable 플래그 동적 업데이트
    initInlineTextEditing();
  });

  // --- 선택(Selection) 관리 라이프사이클 ---
  function selectElement(el) {
    if (selectedElement === el) return;
    deselectAll();
    
    selectedElement = el;
    el.classList.add("selected-el");
    
    // 1. 드래그 핸들 추가 (상단 중앙 원형 버튼)
    if (!el.querySelector(".el-drag-handle")) {
      const handle = document.createElement("div");
      handle.className = "el-drag-handle no-print";
      handle.innerHTML = `<i class="fa-solid fa-up-down-left-right"></i>`;
      el.appendChild(handle);
      
      handle.addEventListener("mousedown", (e) => {
        e.preventDefault();
        e.stopPropagation();
        startDrag(e, el);
      });
    }

    // 2. 크기 조절 핸들 추가 (우측 하단 원형 조절점)
    if (!el.querySelector(".el-resize-handle")) {
      const resizeHandle = document.createElement("div");
      resizeHandle.className = "el-resize-handle no-print";
      resizeHandle.innerHTML = `<i class="fa-solid fa-arrows-up-down-left-right" style="transform: rotate(45deg); font-size: 8px;"></i>`;
      el.appendChild(resizeHandle);
      
      resizeHandle.addEventListener("mousedown", (e) => {
        e.preventDefault();
        e.stopPropagation();
        startResize(e, el);
      });
    }

    // 3. 삭제 버튼 추가 (우측 상단 원형 휴지통 버튼)
    if (!el.querySelector(".delete-el-btn")) {
      const delBtn = document.createElement("div");
      delBtn.className = "delete-el-btn no-print";
      delBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
      el.appendChild(delBtn);
      
      delBtn.addEventListener("mousedown", (e) => {
        e.preventDefault();
        e.stopPropagation();
        el.remove();
        deselectAll();
      });
    }
  }

  function deselectAll() {
    if (selectedElement) {
      selectedElement.classList.remove("selected-el");
      const handle = selectedElement.querySelector(".el-drag-handle");
      if (handle) handle.remove();
      const resizeHandle = selectedElement.querySelector(".el-resize-handle");
      if (resizeHandle) resizeHandle.remove();
      const delBtn = selectedElement.querySelector(".delete-el-btn");
      if (delBtn) delBtn.remove();
      selectedElement = null;
    }
  }

  // 미리보기 영역 마우스 다운 시 선택 및 해제 제어
  previewArea.addEventListener("mousedown", (e) => {
    if (!isDragActive) return;
    
    // 클릭된 타겟이 드래그 가능한 요소 또는 그 하위 요소인지 확인
    const clickedDraggable = e.target.closest(".draggable-el");
    
    // 핸들이나 크기 조절점을 누른 게 아닐 경우에만 선택 전환
    if (e.target.closest(".el-drag-handle") || e.target.closest(".el-resize-handle")) {
      return;
    }
    
    if (clickedDraggable) {
      e.stopPropagation();
      selectElement(clickedDraggable);
      // 미리캔버스/Canva 스타일: 요소를 클릭하면 핸들 외에 본체 영역을 통해서도 바로 드래그가 시작됨
      startDrag(e, clickedDraggable);
    } else {
      deselectAll();
    }
  });

  function initDraggableSystem() {
    // 1. 기존 draggable-el 클래스 제거 (재구성 시 초기화)
    const oldDraggables = document.querySelectorAll(".draggable-el");
    oldDraggables.forEach(el => el.classList.remove("draggable-el"));

    // 2. 최상위 레이아웃 블록 단위 대상 선정 (슬라이드 내부 비중첩 구조로 레이아웃 꼬임 해결)
    const selector = ".slide .slide-body > *, .slide .slide-header, .slide .slide-footer, .slide .cover-header, .slide .cover-body, .slide .cover-footer, .slide .closing-container > *, .slide .custom-element";
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((el) => {
      // 배경 강조선이나 비인쇄 영역 등 특수 목적 컴포넌트 제외
      if (el.classList.contains("accent-bar-bottom") || el.classList.contains("no-print")) return;
      el.classList.add("draggable-el");
    });
  }

  function toggleDragMode(active) {
    const elements = document.querySelectorAll(".draggable-el");
    const slides = document.querySelectorAll(".slide");
    
    if (active) {
      // 1단계: 숨겨진 슬라이드(슬라이드 쇼 모드 등)의 clientWidth/clientHeight가 0이 되어 NaN이 발생하는 현상 방지
      const originalDisplays = [];
      slides.forEach((slide) => {
        originalDisplays.push({
          slide: slide,
          display: slide.style.display,
          priority: slide.style.getPropertyPriority("display")
        });
        slide.style.setProperty("display", "flex", "important");
      });

      // 2단계: 모든 요소의 좌표를 먼저 일괄적으로 측정 (측정 도중 레이아웃 붕괴 방지!)
      const cachedCoords = [];
      elements.forEach((el) => {
        if (el.style.position !== "absolute") {
          const rect = el.getBoundingClientRect();
          const slide = el.closest(".slide");
          const slideRect = slide.getBoundingClientRect();
          const slideWidth = slide.clientWidth;
          const slideHeight = slide.clientHeight;
          
          if (slideWidth > 0 && slideHeight > 0) {
            const scaleX = slideRect.width / slideWidth;
            const scaleY = slideRect.height / slideHeight;
            
            const leftVal = (rect.left - slideRect.left) / scaleX;
            const topVal = (rect.top - slideRect.top) / scaleY;
            const widthVal = rect.width / scaleX;
            const heightVal = rect.height / scaleY;
            
            const widthPercent = (widthVal / slideWidth) * 100;
            const heightPercent = (heightVal / slideHeight) * 100;
            const leftPercent = (leftVal / slideWidth) * 100;
            const topPercent = (topVal / slideHeight) * 100;
            
            cachedCoords.push({
              el: el,
              width: widthPercent + "%",
              height: heightPercent + "%",
              left: leftPercent + "%",
              top: topPercent + "%"
            });
          }
        }
      });

      // 3단계: 임시 표시 해제 및 원래 슬라이드 상태(보임/숨김) 복원
      originalDisplays.forEach((item) => {
        if (item.display) {
          item.slide.style.setProperty("display", item.display, item.priority);
        } else {
          item.slide.style.removeProperty("display");
        }
      });

      // 4단계: 수집이 완료된 후에만 absolute 일괄 전환 및 클래스 추가 적용 (정렬 흔들림 0%)
      elements.forEach((el) => {
        el.classList.add("drag-mode-ready");
      });

      cachedCoords.forEach((item) => {
        const el = item.el;
        el.style.width = item.width;
        el.style.height = item.height;
        el.style.position = "absolute";
        el.style.left = item.left;
        el.style.top = item.top;
        el.style.margin = "0";
      });
    } else {
      deselectAll();
      elements.forEach((el) => {
        el.classList.remove("drag-mode-ready");
      });
    }
  }

  let activeDragElement = null;
  let dragStartX = 0;
  let dragStartY = 0;
  let elementStartX = 0;
  let elementStartY = 0;

  function startDrag(e, el) {
    activeDragElement = el;
    
    const rect = el.getBoundingClientRect();
    const slide = el.closest(".slide");
    const slideRect = slide.getBoundingClientRect();
    const slideWidth = slide.clientWidth;
    const slideHeight = slide.clientHeight;
    
    // 현재 CSS 배율 (Scale Factor) 계산
    const scaleX = slideRect.width / slideWidth;
    const scaleY = slideRect.height / slideHeight;
    
    // 배율 보정된 로컬 픽셀 좌표 구하기
    const leftVal = (rect.left - slideRect.left) / scaleX;
    const topVal = (rect.top - slideRect.top) / scaleY;
    
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    elementStartX = leftVal;
    elementStartY = topVal;
    
    document.addEventListener("mousemove", dragMove);
    document.addEventListener("mouseup", dragEnd);
  }

  function dragMove(e) {
    if (!activeDragElement) return;
    
    const dx = e.clientX - dragStartX;
    const dy = e.clientY - dragStartY;
    
    const slide = activeDragElement.closest(".slide");
    const slideRect = slide.getBoundingClientRect();
    const slideWidth = slide.clientWidth;
    const slideHeight = slide.clientHeight;
    
    const scaleX = slideRect.width / slideWidth;
    const scaleY = slideRect.height / slideHeight;
    
    // 배율을 나누어 마우스 이동 픽셀을 논리 좌표에 맞춤 보정
    let newLeftPx = elementStartX + (dx / scaleX);
    let newTopPx = elementStartY + (dy / scaleY);
    
    // --- 오와열 자석 스냅 & 가이드라인 점선 엔진 ---
    const snapThreshold = 8; // 스냅 임계값 (8픽셀)
    const otherElements = Array.from(slide.querySelectorAll(".draggable-el")).filter(el => el !== activeDragElement);
    
    // 현재 드래그하는 요소의 크기 계산
    const elemRect = activeDragElement.getBoundingClientRect();
    const elemWidth = elemRect.width / scaleX;
    const elemHeight = elemRect.height / scaleY;
    
    // 가이드선 요소 자동 생성 및 탐색
    let guideH = slide.querySelector(".alignment-guide-line.horizontal");
    let guideV = slide.querySelector(".alignment-guide-line.vertical");
    if (!guideH) {
      guideH = document.createElement("div");
      guideH.className = "alignment-guide-line horizontal no-print";
      slide.appendChild(guideH);
    }
    if (!guideV) {
      guideV = document.createElement("div");
      guideV.className = "alignment-guide-line vertical no-print";
      slide.appendChild(guideV);
    }
    
    let snappedX = false;
    let snappedY = false;
    let guideXVal = 0;
    let guideYVal = 0;
    
    // 수평 정렬 스냅 및 세로 가이드라인 분석 (X축 좌표 보정)
    for (let i = 0; i < otherElements.length; i++) {
      const other = otherElements[i];
      const otherRect = other.getBoundingClientRect();
      const oLeft = (otherRect.left - slideRect.left) / scaleX;
      const oWidth = otherRect.width / scaleX;
      const oRight = oLeft + oWidth;
      const oCenterX = oLeft + oWidth / 2;
      
      const left = newLeftPx;
      const right = newLeftPx + elemWidth;
      const centerX = newLeftPx + elemWidth / 2;
      
      // 1. 좌-좌 정렬
      if (Math.abs(left - oLeft) < snapThreshold) {
        newLeftPx = oLeft;
        snappedX = true;
        guideXVal = oLeft;
        break;
      }
      // 2. 우-우 정렬
      if (Math.abs(right - oRight) < snapThreshold) {
        newLeftPx = oRight - elemWidth;
        snappedX = true;
        guideXVal = oRight;
        break;
      }
      // 3. 좌-우 정렬
      if (Math.abs(left - oRight) < snapThreshold) {
        newLeftPx = oRight;
        snappedX = true;
        guideXVal = oRight;
        break;
      }
      // 4. 우-좌 정렬
      if (Math.abs(right - oLeft) < snapThreshold) {
        newLeftPx = oLeft - elemWidth;
        snappedX = true;
        guideXVal = oLeft;
        break;
      }
      // 5. 중앙 정렬
      if (Math.abs(centerX - oCenterX) < snapThreshold) {
        newLeftPx = oCenterX - elemWidth / 2;
        snappedX = true;
        guideXVal = oCenterX;
        break;
      }
    }
    
    // 수직 정렬 스냅 및 가로 가이드라인 분석 (Y축 좌표 보정)
    for (let i = 0; i < otherElements.length; i++) {
      const other = otherElements[i];
      const otherRect = other.getBoundingClientRect();
      const oTop = (otherRect.top - slideRect.top) / scaleY;
      const oHeight = otherRect.height / scaleY;
      const oBottom = oTop + oHeight;
      const oCenterY = oTop + oHeight / 2;
      
      const top = newTopPx;
      const bottom = newTopPx + elemHeight;
      const centerY = newTopPx + elemHeight / 2;
      
      // 1. 상-상 정렬
      if (Math.abs(top - oTop) < snapThreshold) {
        newTopPx = oTop;
        snappedY = true;
        guideYVal = oTop;
        break;
      }
      // 2. 하-하 정렬
      if (Math.abs(bottom - oBottom) < snapThreshold) {
        newTopPx = oBottom - elemHeight;
        snappedY = true;
        guideYVal = oBottom;
        break;
      }
      // 3. 상-하 정렬
      if (Math.abs(top - oBottom) < snapThreshold) {
        newTopPx = oBottom;
        snappedY = true;
        guideYVal = oBottom;
        break;
      }
      // 4. 하-상 정렬
      if (Math.abs(bottom - oTop) < snapThreshold) {
        newTopPx = oTop - elemHeight;
        snappedY = true;
        guideYVal = oTop;
        break;
      }
      // 5. 중앙 정렬
      if (Math.abs(centerY - oCenterY) < snapThreshold) {
        newTopPx = oCenterY - elemHeight / 2;
        snappedY = true;
        guideYVal = oCenterY;
        break;
      }
    }
    
    // 가이드선 가설 활성화 및 렌더링
    if (snappedX) {
      guideV.style.left = (guideXVal / slideWidth) * 100 + "%";
      guideV.style.display = "block";
    } else {
      if (guideV) guideV.style.display = "none";
    }
    
    if (snappedY) {
      guideH.style.top = (guideYVal / slideHeight) * 100 + "%";
      guideH.style.display = "block";
    } else {
      if (guideH) guideH.style.display = "none";
    }
    
    // 보정된 최종 비율 구하기
    const leftPercent = (newLeftPx / slideWidth) * 100;
    const topPercent = (newTopPx / slideHeight) * 100;
    
    activeDragElement.style.left = leftPercent + "%";
    activeDragElement.style.top = topPercent + "%";
  }

  function dragEnd() {
    document.removeEventListener("mousemove", dragMove);
    document.removeEventListener("mouseup", dragEnd);
    
    if (activeDragElement) {
      const slide = activeDragElement.closest(".slide");
      const guideH = slide.querySelector(".alignment-guide-line.horizontal");
      const guideV = slide.querySelector(".alignment-guide-line.vertical");
      if (guideH) guideH.style.display = "none";
      if (guideV) guideV.style.display = "none";
      
      // 드래그 종료 시 상태 저장
      saveState();
    }
    
    activeDragElement = null;
  }

  // --- 14. 크기 조절(Resize) 엔진 ---
  let activeResizeElement = null;
  let resizeStartX = 0;
  let resizeStartY = 0;
  let elementStartWidth = 0;
  let elementStartHeight = 0;

  function startResize(e, el) {
    activeResizeElement = el;
    
    const rect = el.getBoundingClientRect();
    const slide = el.closest(".slide");
    const slideRect = slide.getBoundingClientRect();
    const slideWidth = slide.clientWidth;
    const slideHeight = slide.clientHeight;
    
    const scaleX = slideRect.width / slideWidth;
    const scaleY = slideRect.height / slideHeight;
    
    elementStartWidth = rect.width / scaleX;
    elementStartHeight = rect.height / scaleY;
    
    resizeStartX = e.clientX;
    resizeStartY = e.clientY;
    
    document.addEventListener("mousemove", resizeMove);
    document.addEventListener("mouseup", resizeEnd);
  }

  function resizeMove(e) {
    if (!activeResizeElement) return;
    
    const dx = e.clientX - resizeStartX;
    const dy = e.clientY - resizeStartY;
    
    const slide = activeResizeElement.closest(".slide");
    const slideRect = slide.getBoundingClientRect();
    const slideWidth = slide.clientWidth;
    const slideHeight = slide.clientHeight;
    
    const scaleX = slideRect.width / slideWidth;
    const scaleY = slideRect.height / slideHeight;
    
    const newWidthPx = Math.max(30, elementStartWidth + (dx / scaleX));
    const newHeightPx = Math.max(20, elementStartHeight + (dy / scaleY));
    
    const widthPercent = (newWidthPx / slideWidth) * 100;
    const heightPercent = (newHeightPx / slideHeight) * 100;
    
    activeResizeElement.style.width = widthPercent + "%";
    activeResizeElement.style.height = heightPercent + "%";
  }

  function resizeEnd() {
    document.removeEventListener("mousemove", resizeMove);
    document.removeEventListener("mouseup", resizeEnd);
    if (activeResizeElement) {
      saveState(); // 크기 조절 종료 시 상태 저장
    }
    activeResizeElement = null;
  }

  // --- 탭 메뉴 활성화 토글 로직 ---
  const tabBtns = document.querySelectorAll(".sidebar-tabs-nav .tab-btn");
  const tabPanels = document.querySelectorAll(".sidebar-content .tab-panel");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      tabPanels.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      const targetTab = btn.dataset.tab;
      const targetPanel = document.getElementById(`panel-${targetTab}`);
      if (targetPanel) {
        targetPanel.classList.add("active");
      }
    });
  });

  // --- 원클릭 테마 템플릿 변경 ---
  const templateCards = document.querySelectorAll(".template-card");
  templateCards.forEach(card => {
    card.addEventListener("click", () => {
      templateCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");

      const styleName = card.dataset.template;
      let colorVal = "#E05349";
      if (styleName === "classic-navy") colorVal = "#1E3A8A";
      else if (styleName === "wellness-green") colorVal = "#10B981";
      else if (styleName === "luxury-purple") colorVal = "#8B5CF6";
      else if (styleName === "energy-orange") colorVal = "#F97316";

      themeColorInput.value = colorVal;
      themeColorHexInput.value = colorVal.toUpperCase();
      updateThemeColors(colorVal);
    });
  });

  // --- 폰트 타입 셀렉터 제어 ---
  const selectFontFamily = document.getElementById("select-font-family");
  selectFontFamily.addEventListener("change", (e) => {
    const fontClass = e.target.value;
    previewArea.classList.remove("font-noto", "font-outfit", "font-inter");
    previewArea.classList.add(fontClass);
  });

  // --- 디자인 요소 추가 엔진 ---
  let activeSlide = null;
  rebindSlideFocusEvents();

  // 텍스트/도형 요소 추가 이벤트 처리
  document.querySelectorAll(".btn-element-add").forEach((btn) => {
    btn.addEventListener("click", () => {
      const type = btn.dataset.element;
      const newEl = document.createElement("div");
      newEl.className = "draggable-el custom-element";
      newEl.style.position = "absolute";
      newEl.style.left = "40%";
      newEl.style.top = "40%";
      newEl.style.width = "240px";
      newEl.style.height = "auto";
      newEl.style.zIndex = "10";

      if (type === "text-title") {
        newEl.innerHTML = `<h3 class="custom-text-title" contenteditable="true">더블클릭하여 제목 입력</h3>`;
      } else if (type === "text-body") {
        newEl.innerHTML = `<p class="custom-text-body" contenteditable="true">더블클릭하여 본문 내용을 입력하세요.</p>`;
      } else if (type === "shape-rect") {
        newEl.classList.add("custom-shape-rect");
        newEl.style.height = "120px";
      } else if (type === "shape-round-card") {
        newEl.classList.add("custom-shape-round-card");
        newEl.style.height = "140px";
      } else if (type === "shape-divider") {
        newEl.classList.add("custom-shape-divider");
        newEl.style.height = "4px";
      }

      activeSlide.appendChild(newEl);

      // 드래그&드롭 모드 자동 기동
      if (!isDragActive) {
        btnToggleDrag.click();
      } else {
        initDraggableSystem();
        newEl.classList.add("drag-mode-ready");
      }

      // 요소 선택 활성화 및 상태 저장
      setTimeout(() => {
        selectElement(newEl);
        saveState();
      }, 50);
    });
  });

  // 웰니스 아이콘 추가 이벤트 처리
  document.querySelectorAll(".icon-add-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const iconClass = btn.dataset.icon;
      const newEl = document.createElement("div");
      newEl.className = "draggable-el custom-element";
      newEl.style.position = "absolute";
      newEl.style.left = "45%";
      newEl.style.top = "45%";
      newEl.style.width = "60px";
      newEl.style.height = "60px";
      newEl.style.zIndex = "10";
      
      newEl.innerHTML = `<div class="custom-icon-element" style="font-size: 48px;"><i class="fa-solid ${iconClass}"></i></div>`;
      
      activeSlide.appendChild(newEl);

      if (!isDragActive) {
        btnToggleDrag.click();
      } else {
        initDraggableSystem();
        newEl.classList.add("drag-mode-ready");
      }

      setTimeout(() => {
        selectElement(newEl);
        saveState();
      }, 50);
    });
  });

  // 브랜드 및 마스코트 스티커 추가 이벤트 처리
  document.querySelectorAll(".sticker-add-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const stickerType = btn.dataset.sticker;
      const newEl = document.createElement("div");
      newEl.className = "draggable-el custom-element";
      newEl.style.position = "absolute";
      newEl.style.left = "40%";
      newEl.style.top = "40%";
      newEl.style.width = "100px";
      newEl.style.height = "100px";
      newEl.style.zIndex = "10";
      
      let imgSrc = "";
      if (stickerType === "pawmi-smile") {
        imgSrc = "이미지/파우미.png";
      } else if (stickerType === "faww-logo") {
        imgSrc = "이미지/파우 로고.png";
        newEl.style.width = "120px";
        newEl.style.height = "40px";
      } else if (stickerType === "physical-logo") {
        imgSrc = "이미지/피지컬케어 로고.jpg";
      }

      newEl.innerHTML = `<img src="${imgSrc}" class="custom-sticker-element" alt="Sticker">`;
      activeSlide.appendChild(newEl);

      if (!isDragActive) {
        btnToggleDrag.click();
      } else {
        initDraggableSystem();
        newEl.classList.add("drag-mode-ready");
      }

      setTimeout(() => {
        selectElement(newEl);
        saveState();
      }, 50);
    });
  });

  // 키보드로 요소 삭제 기능 추가
  document.addEventListener("keydown", (e) => {
    if (selectedElement && (e.key === "Delete" || e.key === "Backspace")) {
      // contenteditable이 포커싱된 입력 상태이면 삭제 동작 생략
      if (document.activeElement && document.activeElement.contentEditable === "true") {
        return;
      }
      saveState(); // 삭제 전 상태 저장
      selectedElement.remove();
      deselectAll();
      e.preventDefault();
      saveState(); // 삭제 후 상태 저장
    }
  });

  // --- 로컬 AI 제안서 생성 비서 ---
  const COMPANY_COLORS = {
    "sk": "#FF6B00",
    "skstoa": "#E05349",
    "samsung": "#0A54A8",
    "삼성": "#0A54A8",
    "kakao": "#FFE812",
    "카카오": "#FFE812",
    "naver": "#03C75A",
    "네이버": "#03C75A",
    "toss": "#0064FF",
    "토스": "#0064FF",
    "hyundai": "#002C5F",
    "현대": "#002C5F",
    "lg": "#C60C30",
    "coupang": "#E52521",
    "쿠팡": "#E52521",
    "daangn": "#FF7E36",
    "당근": "#FF7E36",
    "baemin": "#2AC1BC",
    "배달의민족": "#2AC1BC"
  };

  const btnAiGenerate = document.getElementById("btn-ai-generate");
  const aiRawTextarea = document.getElementById("ai-raw-text");
  const aiProcessingStatus = document.getElementById("ai-processing-status");
  const aiProgressFill = document.getElementById("ai-progress-fill");
  const aiStatusLog = document.getElementById("ai-status-log");
  const aiLogList = document.getElementById("ai-log-list");
  const aiRefFileInput = document.getElementById("ai-ref-file");

  // 레퍼런스 파일 파일 업로드 및 텍스트 자동 삽입
  aiRefFileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        aiRawTextarea.value = event.target.result;
        aiRawTextarea.focus();
        
        // 업로드 성공 깜빡임 피드백 연출
        aiRawTextarea.style.outline = "3px solid var(--primary-color)";
        aiRawTextarea.style.boxShadow = "0 0 15px var(--primary-color)";
        aiRawTextarea.style.transition = "outline 0.3s ease, box-shadow 0.3s ease";
        setTimeout(() => {
          aiRawTextarea.style.outline = "none";
          aiRawTextarea.style.boxShadow = "none";
        }, 1200);
      };
      reader.readAsText(file);
    }
  });

  btnAiGenerate.addEventListener("click", () => {
    const rawText = aiRawTextarea.value.trim();
    if (!rawText) {
      alert("고객사 제안 요구사항 텍스트를 기입해 주세요.");
      return;
    }

    // AI 진행 상태 시각화 초기화
    aiProcessingStatus.classList.remove("hidden");
    aiProgressFill.style.width = "0%";
    aiStatusLog.textContent = "요청 텍스트 구문 분석 중...";
    aiLogList.innerHTML = "";

    // 1단계: 분석 시작 (1.2초)
    setTimeout(() => {
      aiProgressFill.style.width = "25%";
      aiStatusLog.textContent = "1단계: 기업명 식별 및 연계 브랜드 색상 탐색 중...";
      
      // 기업명 추출
      let clientName = "";
      const companies = ["SK STOA", "SK스토아", "SK하이닉스", "SK", "카카오", "네이버", "삼성전자", "삼성", "LG전자", "LG", "현대자동차", "현대", "토스", "쿠팡", "배달의민족", "우아한형제들", "당근마켓", "당근", "넷마블", "엔씨소프트"];
      for (const c of companies) {
        if (rawText.toLowerCase().includes(c.toLowerCase())) {
          clientName = c;
          break;
        }
      }
      
      if (!clientName) {
        const clientMatch = rawText.match(/([가-힣a-zA-Z0-9_\-]+)\s*(?:을|를)\s+대상으로|([가-힣a-zA-Z0-9_\-]+)\s*(?:을|를)\s+위한|([가-힣a-zA-Z0-9_\-]+)의\s+임직원|([가-힣a-zA-Z0-9_\-]+)에\s+제안/i);
        if (clientMatch) {
          clientName = clientMatch[1] || clientMatch[2] || clientMatch[3] || clientMatch[4];
        }
      }
      if (!clientName) clientName = "SK STOA";
      
      // 색상 추출
      let themeColor = "#E05349";
      let matchedColorName = "기본 레드 (#E05349)";
      const lowercaseText = rawText.toLowerCase();
      const matchedKey = Object.keys(COMPANY_COLORS).find(key => lowercaseText.includes(key));
      
      if (matchedKey) {
        themeColor = COMPANY_COLORS[matchedKey];
        matchedColorName = `기업 매칭 대표 컬러 (${themeColor})`;
      } else {
        const colorNames = {
          "파란": "#0064FF", "블루": "#0064FF", "네이비": "#1E3A8A",
          "초록": "#10B981", "그린": "#10B981",
          "주황": "#FF6B00", "오렌지": "#FF6B00",
          "노란": "#FFE812", "옐로우": "#FFE812",
          "보라": "#8B5CF6", "퍼플": "#8B5CF6",
          "빨간": "#E05349", "레드": "#E05349"
        };
        for (const [name, hex] of Object.entries(colorNames)) {
          if (rawText.includes(name)) {
            themeColor = hex;
            matchedColorName = `${name}색 계열 컬러 (${hex})`;
            break;
          }
        }
      }

      // UI 및 로깅
      addAiLog(`제안 대상사 식별 완료: <strong>${clientName}</strong>`);
      addAiLog(`최적 포인트 색상 매칭 완료: <strong>${matchedColorName}</strong>`);
      
      clientNameInput.value = clientName;
      themeColorInput.value = themeColor;
      themeColorHexInput.value = themeColor.toUpperCase();
      updateThemeColors(themeColor);
      clientNameInput.dispatchEvent(new Event("input"));

      // 2단계: 일정 및 기본 제안 요건 매칭 (2.4초)
      setTimeout(() => {
        aiProgressFill.style.width = "55%";
        aiStatusLog.textContent = "2단계: 일정 기한 및 제안 운영 조건 해독 중...";

        // 날짜 추출
        let proposalDate = "";
        const dateMatch = rawText.match(/(\d{4})[\.\-\s년]\s*(\d{1,2})[\.\-\s월]\s*(\d{1,2})/);
        if (dateMatch) {
          const yy = dateMatch[1];
          const mm = String(dateMatch[2]).padStart(2, '0');
          const dd = String(dateMatch[3]).padStart(2, '0');
          proposalDate = `${yy}.${mm}.${dd}`;
        } else {
          const now = new Date();
          proposalDate = `${now.getFullYear()}.${String(now.getMonth()+1).padStart(2,'0')}.${String(now.getDate()).padStart(2,'0')}`;
        }

        // 강사 수 추출
        let expertCount = "강사 8명";
        const expertMatch = rawText.match(/(?:강사|전문가|인원)\s*(\d+)\s*명/);
        if (expertMatch) {
          expertCount = `강사 ${expertMatch[1]}명`;
        }

        // 케어 시간 추출
        let careTime = "30분 (측정+케어+피드백)";
        const timeMatch = rawText.match(/(?:1인당|케어\s*시간|인당|시간은)\s*(\d+)\s*분/);
        if (timeMatch) {
          careTime = `${timeMatch[1]}분 (케어 + 피드백)`;
        }

        // 일일 케어 가능 인원 산정
        let totalCare = "제안1안 : 64명 / 제안2안 : 80명";
        if (expertMatch && timeMatch) {
          const instructors = parseInt(expertMatch[1]);
          const mins = parseInt(timeMatch[1]);
          const dailyCapacity = Math.floor((6 * 60) / mins) * instructors; // 6시간 기준
          totalCare = `총 ${dailyCapacity}명 (1인당 ${mins}분 케어)`;
        }

        // UI 및 로깅
        addAiLog(`제안 기입 날짜 분석 완료: <strong>${proposalDate}</strong>`);
        addAiLog(`파견 인원 및 1인 시간 산정: <strong>${expertCount} (${careTime})</strong>`);

        proposalDateInput.value = proposalDate;
        expertCountInput.value = expertCount;
        careTimeInput.value = careTime;
        totalCareInput.value = totalCare;
        
        proposalDateInput.dispatchEvent(new Event("input"));
        expertCountInput.dispatchEvent(new Event("input"));
        careTimeInput.dispatchEvent(new Event("input"));
        totalCareInput.dispatchEvent(new Event("input"));

        // 3단계: EAP 맞춤 프로그램 매칭 (3.6초)
        setTimeout(() => {
          aiProgressFill.style.width = "85%";
          aiStatusLog.textContent = "3단계: 핵심 요건별 임직원 EAP 프로그램 매칭 추천 중...";

          const programKeywords = {
            p1: ["피지컬케어", "맞춤 관리", "도수", "거북목", "통증", "어깨", "목", "체형"],
            p2: ["운동 처방", "재활", "체형 교정", "자세 교정"],
            p3: ["vdt", "증후군", "스트레칭", "단체"],
            p4: ["코어", "자세", "필라테스", "허리"],
            p5: ["스트레스", "마인드", "심리", "상담", "번아웃", "명상"],
            p6: ["수기", "힐링", "테라피", "마사지"],
            p7: ["소도구", "폼롤러", "마사지볼"],
            p8: ["아로마", "향기", "롤온"],
            p9: ["대사증후군", "영양", "식습관", "식사"],
            p10: ["워크숍", "팀 빌딩", "소통", "팀단위"]
          };

          let matchedPrograms = [];
          Object.entries(programKeywords).forEach(([pId, keywords]) => {
            const hasKeyword = keywords.some(k => lowercaseText.includes(k));
            if (hasKeyword) matchedPrograms.push(pId);
          });

          if (matchedPrograms.length === 0) {
            matchedPrograms = ["p1", "p2", "p3", "p4"];
          }

          // UI 체크박스 제어
          document.querySelectorAll(".program-checkbox").forEach(cb => {
            cb.checked = matchedPrograms.includes(cb.value);
          });

          addAiLog(`EAP 매칭 리스트 구성 완료: <strong>총 ${matchedPrograms.length}개 프로그램 선정</strong>`);
          
          renderSelectedPrograms();
          renderEapProgramEditors();

          // 4단계: 컴파일 완료 및 UI 렌더링 (4.2초)
          setTimeout(() => {
            aiProgressFill.style.width = "100%";
            aiStatusLog.textContent = "제안서 컴파일 완료!";
            addAiLog(`<span style="color: #10B981; font-weight: bold;">🎉 AI 맞춤 제안서 자동 생성이 성공적으로 완료되었습니다!</span>`);
            
            // 프리뷰 영역 반짝이는 모션 연출
            previewArea.style.animation = "none";
            setTimeout(() => {
              previewArea.style.outline = "4px solid var(--primary-color)";
              previewArea.style.transition = "outline 0.5s ease-out";
              setTimeout(() => {
                previewArea.style.outline = "none";
              }, 1200);
            }, 50);

            // 생성 완료 시점 상태 저장
            saveState();
          }, 600);

        }, 1200);

      }, 1200);

    }, 1200);
  });

  function addAiLog(message) {
    const li = document.createElement("li");
    li.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
    aiLogList.appendChild(li);
  }

  // --- Initial Setup ---
  updateThemeColors(themeColorInput.value);
  applyBrandLogoSize(brandLogoSizeInput.value);
  renderSelectedPrograms();
  renderEapProgramEditors();
  renderBranches();
  renderBranchEditors();
  initInlineTextEditing();
  initDraggableSystem();
  updatePageNumbers();
  
  // 최초 로드 상태 저장
  saveState();
});
