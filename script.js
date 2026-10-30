// ===== 學習筆記資料：之後只要改這裡，網頁就會更新 =====
const notes = [
  {
    callno: "005.1 ／ 版本控制",
    title: "Git",
    summary: "用 Git 記錄每次修改，透過 GitHub 備份、協作並發布網站。",
    tags: ["Git", "GitHub", "SSH 金鑰", "Branch", "PR"],
    points: [
      "設定身分（git config user.name、user.email），用 ssh-keygen 產生 ed25519 金鑰，把公鑰加到 GitHub，再以 ssh -T 測試連線並 clone 專案。",
      "日常四步驟：git status 看狀態、git diff 看差異、git add 加入暫存、git commit 與 git push 送上雲端。",
      ".gitignore 可排除 .venv/、*.log 這類不需要版控的檔案；git restore 能在 add 之前還原改壞的檔案。",
      "手滑補救：尚未 push 時，用 git commit --amend -m 修正上一則 commit 訊息。",
      "git log --oneline -- 檔名 可查單一檔案的修改歷史，git show 能看某次 commit 的詳細內容。",
      "本地專案連上遠端：git init、git remote add origin、git pull --allow-unrelated-histories、git push -u origin main。",
      "協作流程：開 Branch 做修改，再用 Pull Request 請人 Code Review 後合併。"
    ]
  },
  {
    callno: "004.6 ／ 物聯網",
    title: "IoT",
    summary: "用 ESP-01S Wi-Fi 模組與 Arduino IDE，做出能用手機遠端控制的智慧開關。",
    tags: ["ESP-01S", "ESP8266", "Arduino IDE", "Wi-Fi"],
    points: [
      "ESP-01S 是 ESP8266 系列 Wi-Fi 模組，可用於控制門、窗簾、冷氣，或蒐集整棟大樓的數據。",
      "可用的接腳只有 GPIO0 與 GPIO2，適合入門；工作電壓 3.0 到 3.6V，接 5V 會過熱燒毀。",
      "用 CH340 這類 USB 轉序列晶片燒錄程式，要先在裝置管理員確認 COM 埠並安裝驅動。",
      "Arduino IDE 設定：在 Preferences 加入 ESP8266 開發板網址，Boards Manager 安裝 esp8266，選 Generic ESP8266 Module 與對應的 COM 埠。",
      "程式結構：setup() 只執行一次，loop() 不斷重複；Verify 檢查語法，Upload 燒錄到晶片。",
      "實作：讓模組當 Wi-Fi 熱點並架設網頁伺服器，手機連上後開 192.168.4.1 控制開關；序列埠監控的鮑率設 115200，否則會出現亂碼。",
      "安全：智慧插座使用 110V，要加 1 到 6A 保險絲；1A 保險絲的最大負載約 110W，嚴禁超載。"
    ]
  },
  {
    callno: "005.1 ／ 低代碼",
    title: "No-code",
    summary: "不寫程式，用視覺化工具蒐集資料並串接自動化流程。",
    tags: ["Octoparse", "Apify", "Make", "Google 試算表"],
    points: [
      "資料蒐集工具：Octoparse（點擊式爬蟲）、Apify（雲端爬蟲與現成模組）、Web Scraper（Chrome 擴充功能）。",
      "自動化串接：Make.com、Zapier、n8n，可把抓到的資料自動寫進 Google 試算表或發送通知。",
      "常見應用：競品價格分析、在地商家名單、社群輿情監控、表單彙整。",
      "蒐集前先定義目標：目的是什麼、需要哪些欄位，避免什麼都抓。",
      "試算表技能：XLOOKUP、IF、SUMIFS、樞紐分析表、條件式格式與 IMPORTRANGE。",
      "靜態網頁只有 HTML、CSS、JavaScript，載入快、成本低、安全，適合作品集；動態網頁需要後端與資料庫。這個網站就是靜態網頁。"
    ]
  },
  {
    callno: "006.7 ／ 網頁開發",
    title: "前端＋React",
    summary: "從 HTML、CSS、JavaScript 打好網頁基礎，並練習操作 DOM。",
    tags: ["HTML", "CSS", "JavaScript", "DOM", "RWD"],
    points: [
      "HTML：語意化標籤讓搜尋引擎與螢幕閱讀器看懂結構；標準文件要有 DOCTYPE、lang、字元編碼與 viewport。",
      "表單：button 預設 type 是 submit；radio 靠相同 name 互斥；另有 fieldset、legend、select、datalist、textarea。",
      "CSS：選擇器、權重、繼承、盒模型與正常排版流，用 Flexbox 排版，並以 RWD 的 media query 做手機版。",
      "JavaScript 基礎：原始型別與 typeof、=== 與 == 的差別、const、let、var 與 TDZ、truthy 與 falsy。",
      "作用域與閉包：詞法作用域、閉包保留外層變數；函式是一等值，能搭配 map、filter、reduce 處理陣列。",
      "DOM：用 querySelector 取得元素，以 textContent、classList 改內容與樣式，用 createElement 動態建立元素，並處理事件與表單資料。",
      "React 與框架概念：（請補上你的心得）"
    ]
  },
  {
    callno: "005.8 ／ 資訊安全",
    title: "計算機概論、Linux 與資安",
    summary: "電腦與網路基礎、Linux 指令與伺服器管理、日誌監控與資安觀念。",
    tags: ["OSI", "Linux", "SSH", "Apache", "syslog"],
    points: [
      "電腦五大單元：輸入、輸出、控制、算術邏輯與主記憶體；CPU 處理的資料都來自主記憶體。指令集分 RISC（ARM）與 CISC（x86）。",
      "網路：網卡、交換器、防火牆與網路拓樸，以及 OSI 模型；內網由 DHCP（DORA 流程）發放 IP，對外經 NAT 與防火牆，遠端用 VPN 加密隧道連回內網。",
      "雲端服務三層：SaaS（如 Gmail）、PaaS、IaaS（如 AWS EC2）。",
      "Linux 基礎：絕對與相對路徑、檔案管理、權限 rwx（r=4、w=2、x=1）與 chmod、chown，並用 apt 安裝套件、Vim 編輯檔案。",
      "SSH 遠端連線與金鑰；SFTP 走 port 22，可用 FileZilla 把檔案傳進 Ubuntu 主機。",
      "伺服器管理：安裝 Apache 並用 systemctl status 確認運作，用 ps、pgrep 查行程，kill -9 強制終止。",
      "日誌監控：系統日誌在 /var/log/syslog；tail -f 即時追蹤、grep -i error 篩出錯誤。這和我在 SOC 日誌監控的實務經驗直接相關。",
      "情境練習：從 port 判斷服務，例如 HTTP 80 與 HTTPS 443（SSL/TLS）、POP3 110 與 IMAP 143（信件下載與同步）、SQL Server 1433、遠端桌面 RDP 3389。"
    ]
  }
];

const grid = document.getElementById("notes-grid");
notes.forEach((n, i) => {
  const card = document.createElement("article");
  card.className = "win note";
  const id = "note-" + i;
  card.innerHTML =
    '<div class="titlebar"><span>' + n.title + '</span><span class="tb" aria-hidden="true"><i></i><i></i><i></i></span></div>' +
    '<div class="pane white">' +
    '<p class="callno">' + n.callno + "</p>" +
    '<p class="summary">' + n.summary + "</p>" +
    '<ul class="tags small">' + n.tags.map(t => "<li>" + t + "</li>").join("") + "</ul>" +
    '<p class="actions"><button class="btn" type="button" aria-expanded="false" aria-controls="' + id + '">展開筆記</button></p>' +
    '<div class="detail" id="' + id + '" hidden><ul>' +
    n.points.map(p => "<li>" + p + "</li>").join("") + "</ul></div></div>";
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

document.getElementById("year").textContent = new Date().getFullYear();
