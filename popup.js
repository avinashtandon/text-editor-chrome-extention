const notepad   = document.getElementById('notepad');
const copyBtn   = document.getElementById('copy-btn');
const clearBtn  = document.getElementById('clear-btn');
const charCount = document.getElementById('char-count');
const toast     = document.getElementById('toast');

let toastTimer = null;

// ── Load saved text on open ──────────────────────────────────────────────────
chrome.storage.local.get(['noteText'], ({ noteText }) => {
  if (noteText) {
    notepad.value = noteText;
    updateCount();
  }
  notepad.focus();
});

// ── Save on every keystroke (debounced) ──────────────────────────────────────
let saveTimer = null;
notepad.addEventListener('input', () => {
  updateCount();
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    chrome.storage.local.set({ noteText: notepad.value });
  }, 400);
});

// ── Copy all ─────────────────────────────────────────────────────────────────
copyBtn.addEventListener('click', async () => {
  if (!notepad.value) return;
  try {
    await navigator.clipboard.writeText(notepad.value);
    showToast('✓ Copied to clipboard!');
  } catch {
    // Fallback for older environments
    notepad.select();
    document.execCommand('copy');
    showToast('✓ Copied to clipboard!');
  }
});

// ── Clear all ────────────────────────────────────────────────────────────────
clearBtn.addEventListener('click', () => {
  if (!notepad.value) return;
  notepad.value = '';
  updateCount();
  chrome.storage.local.set({ noteText: '' });
  notepad.focus();
});

// ── Helpers ──────────────────────────────────────────────────────────────────
function updateCount() {
  const len = notepad.value.length;
  charCount.textContent = len === 0 ? '0 chars' : `${len.toLocaleString()} char${len !== 1 ? 's' : ''}`;
}

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2000);
}

// ── Keyboard shortcuts ────────────────────────────────────────────────────────
// Ctrl/Cmd + Shift + X → clear
notepad.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'X') {
    clearBtn.click();
  }
});
