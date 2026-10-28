// ===== 學習筆記資料：之後只要改這裡，網頁就會更新 =====
const notes = [
  {
    callno: "10月初 ／ 物聯網",
    title: "IoT",
    summary: "認識物聯網硬體架構，透過 ESP-01S 實現手機遠端操控開關。",
    tags: ["ESP-01S", "Arduino IDE", "Wi-Fi 控制"],
    points: [
      "認識 ESP-01S 晶片規格、腳位配置（GPIO0/GPIO2）與 3.3V 電壓限制。",
      "使用 Arduino IDE 設定 esp8266 開發板環境並安裝 CH340 序列埠驅動程式。",
      "實作 AP 模式（Access Point），撰寫網頁伺服器程式碼讓手機直連控制 110V 智慧插座與繼電器（Relay）。"
    ]
  },
  {
    callno: "10月初 ／ 低代碼",
    title: "No-code",
    summary: "無需複雜程式碼，運用工具與自動化串接快速達成資料蒐集。",
    tags: ["Google 試算表", "IMPORTFEED", "Apps Script", "IFTTT"],
    points: [
      "熟練 Google 試算表進階函數（如 IMPORTDATA、IMPORTHTML、IMPORTFEED、IMPORTXML）抓取網路公開資料。",
      "運用 Google Apps Script (GAS) 撰寫自動化腳本，實現定時抓取 RSS 並自動新增歷史備份分頁。",
      "結合 IFTTT 與 Google Alerts 建立自動化工作流，實現市場趨勢與關鍵字輿情監控。"
    ]
  },
  {
    callno: "10月中 ／ 網頁開發",
    title: "前端＋React",
    summary: "從 HTML、CSS、JavaScript 基礎到靜態網頁與系統筆記實作。",
    tags: ["HTML", "CSS", "JavaScript", "響應式排版"],
    points: [
      "運用 HTML 標籤（header、section、footer）與 CSS Flexbox／Grid 建構響應式單頁網頁。",
      "利用 JavaScript 動態渲染筆記卡片資料與實現深色模式（Dark Mode）切換。",
      "結合圖書館目錄卡風格與 104 履歷，打造兼具設計感與專業說服力的個人前端作品集。"
    ]
  },
  {
    callno: "10月中 ／ 資訊安全",
    title: "計算機概論、Linux 與資安",
    summary: "建立電腦網路基礎、Linux 系統管理與資訊安全防護觀念。",
    tags: ["Linux 指令", "網路概論", "資訊安全"],
    points: [
      "掌握計算機概論與網路基礎（OSI 模型、IPv4、子網路遮罩、DNS、常見 Port 號）。",
      "熟練 Ubuntu Linux 終端機操作、檔案權限管理（chmod/chown）、硬碟掛載（Mount）與 Vim 編輯器。",
      "結合自身 SOC 分析師經驗，落實資安全面防護（CIA 鐵三角與防火牆設定），並透過 Apache 部署網頁服務。"
    ]
  },
  {
    callno: "10月底 ／ 自動化與測試",
    title: "Git 協作、Pytest 與 CI/CD",
    summary: "透過 Pytest 單元測試、測試覆蓋率與 GitHub Actions 實現自動化持續整合。",
    tags: ["Pytest", "Coverage", "GitHub Actions", "CI/CD"],
    points: [
      "撰寫 Pytest 單元測試並執行紅綠燈循環（Red-Green Refactor），確保程式碼品質。",
      "設定測試覆蓋率（Test Coverage）門檻，利用 --cov-fail-under 攔截未達標準的程式碼。",
      "建立 GitHub Actions (ci.yml) 自動化流程，在每次 push 與 PR 時自動執行雲端測試與多版本矩陣測試。"
    ]
  },
  {
    callno: " 10月底／ 版本控制",
    title: "Git",
    summary: "用 Git 記錄每次修改，並透過分支與 PR 進行團隊協作。",
    tags: ["commit", "branch", "PR", "GitHub Actions"],
    points: [
      "掌握 Git 核心指令：init、add、commit、branch 與 push、pull、restore。",
      "熟悉 Git 協作四部曲：開分支、推送到遠端、發起 Pull Request (PR) 與 Code Review。",
      "處理合併衝突（Merge Conflict），手動解開程式碼衝突並順利合併回 main 主線。"
    ]
  }
];

const grid = document.getElementById("notes-grid");
notes.forEach((n, i) => {
  const card = document.createElement("article");
  card.className = "catalog note";
  const id = "note-" + i;
  card.innerHTML =
    '<p class="callno">' + n.callno + "</p>" +
    "<h3>" + n.title + "</h3>" +
    '<p class="summary">' + n.summary + "</p>" +
    '<ul class="tags small">' + n.tags.map(t => "<li>" + t + "</li>").join("") + "</ul>" +
    '<p><button type="button" aria-expanded="false" aria-controls="' + id + '">展開筆記</button></p>' +
    '<div class="detail" id="' + id + '" hidden><ul>' +
    n.points.map(p => "<li>" + p + "</li>").join("") + "</ul></div>";
  const btn = card.querySelector("button");
  const detail = card.querySelector(".detail");
  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!open));
    btn.textContent = open ? "展開筆記" : "收合筆記";
    detail.hidden = open;
  });
  grid.appendChild(card);
});

// ===== 深色模式切換 =====
const root = document.documentElement;
const themeBtn = document.getElementById("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
let saved = null;
try { saved = localStorage.getItem("theme"); } catch (e) {}
function applyTheme(t) {
  root.setAttribute("data-theme", t);
  themeBtn.textContent = t === "dark" ? "淺色" : "深色";
}
applyTheme(saved || (prefersDark ? "dark" : "light"));
themeBtn.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  try { localStorage.setItem("theme", next); } catch (e) {}
});

document.getElementById("year").textContent = new Date().getFullYear();