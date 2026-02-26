# QuickPad — Chrome Notepad Extension

A simple, persistent notepad that lives in your Chrome toolbar. Type or paste anything — your notes are saved automatically.

![QuickPad Icon](icons/icon128.png)

---

## Features

- 📝 **Notepad** — large text area for typing or pasting text freely
- 💾 **Auto-save** — text persists across browser restarts via `chrome.storage.local`
- 📋 **Copy All** — copies the entire note to your clipboard with one click
- 🗑️ **Clear** — wipe the note instantly (also `Ctrl/Cmd + Shift + X`)
- 🔢 **Character counter** — live count shown in the header
- ✅ **Toast notification** — visual feedback when text is copied

---

## Installation

> No build step required — this is a plain HTML/JS extension.

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions`
3. Enable **Developer mode** (toggle in the top-right corner)
4. Click **Load unpacked**
5. Select the `text-editor` folder
6. The **QuickPad** icon will appear in your Chrome toolbar

---

## File Structure

```
text-editor/
├── manifest.json     # Chrome Extension Manifest v3
├── popup.html        # Extension UI
├── popup.css         # Styles (dark theme, Inter font)
├── popup.js          # Logic: save, copy, clear, shortcuts
├── README.md
└── icons/
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl / Cmd + A` | Select all text |
| `Ctrl / Cmd + C` | Copy selected text |
| `Ctrl / Cmd + V` | Paste |
| `Ctrl / Cmd + Shift + X` | Clear the notepad |

---

## Permissions

| Permission | Reason |
|-----------|--------|
| `storage` | Save and restore your notes across browser sessions |

---

## Tech Stack

- **Manifest Version**: 3
- **Storage**: `chrome.storage.local`
- **Font**: [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts)
- No frameworks, no build tools — pure HTML, CSS, and JavaScript

---

## License

MIT — free to use, modify, and distribute.
