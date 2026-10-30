# 林于庭｜學習筆記與履歷

我的個人網站，收錄 AI 跨域前線部署工程師（FDE）培訓計畫的課程筆記、履歷與作品。網站為純靜態網頁，部署在 GitHub Pages。

**Live Demo：** https://linsolving85.github.io/portfolio/

## 網站內容

| 區塊 | 說明 |
| --- | --- |
| 首頁 | 自我介紹與定位 |
| 學習筆記 | Git、IoT、No-code、前端＋React、計概／Linux／資安，以視窗卡片呈現，可展開重點 |
| 履歷 | 工作經歷、學歷與獲獎、研習 |
| 技能與證照 | 專業證照與工具技能標籤 |
| 作品 | 資安日誌儀表板、內部資源整合門戶、LINE Bot 流程 |
| 聯絡 | Email 與 GitHub |

## 技術與特色

- HTML5 語意化標籤（header、nav、main、section、article、footer）
- CSS3：CSS 變數、12 欄 Grid、Flexbox
- 響應式切版（RWD）：以 `@media` 在 1050px、760px、480px 三個斷點調整版面
- JavaScript：由資料陣列產生筆記卡片，並提供展開與收合
- 無障礙：`aria-expanded`、`aria-controls`、鍵盤焦點樣式、`prefers-reduced-motion`
- 設計風格：90 年代桌面視窗風格（淺色），斜面邊框、深藍標題列、鍵帽按鈕，並尊重 `prefers-reduced-motion`

## 專案結構

```
.
├── index.html   # 頁面結構與內容
├── style.css    # 樣式、RWD、深色模式
├── script.js    # 筆記資料、卡片互動、主題切換
└── README.md
```

## 本機預覽

```bash
git clone git@github.com:linsolving85/portfolio.git
cd portfolio
```

用瀏覽器開啟 `index.html` 即可，不需要安裝任何套件。

## 部署

使用 GitHub Pages：Settings → Pages → Source 選 `main` 分支與 `/ (root)`。

## 如何更新學習筆記

筆記內容都放在 `script.js` 最上方的 `notes` 陣列，修改文字後存檔，網頁就會更新。

## 作者

林于庭｜[GitHub](https://github.com/linsolving85)｜lin.solving@gmail.com
