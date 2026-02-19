var checkbox = document.querySelector('input[name=mode]');
var moon = document.getElementById('moon');
var storageKey = 'theme-preference';
var mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

function setIcon(theme) {
    if (!moon || typeof feather === 'undefined') {
        return;
    }

    var iconName = theme === 'dark' ? 'sun' : 'moon';
    moon.innerHTML = feather.icons[iconName].toSvg({ fill: 'var(--fg-color-dark)' });
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (checkbox) {
        checkbox.checked = theme === 'dark';
    }
    setIcon(theme);
}

function getPreferredTheme() {
    var saved = localStorage.getItem(storageKey);
    if (saved === 'light' || saved === 'dark') {
        return saved;
    }
    return mediaQuery.matches ? 'dark' : 'light';
}

if (checkbox) {
    applyTheme(getPreferredTheme());

    checkbox.addEventListener('change', function() {
        var theme = this.checked ? 'dark' : 'light';
        localStorage.setItem(storageKey, theme);
        applyTheme(theme);
    });
}

function handleSystemThemeChange(event) {
    var saved = localStorage.getItem(storageKey);
    if (saved === 'light' || saved === 'dark') {
        return;
    }
    applyTheme(event.matches ? 'dark' : 'light');
}

if (typeof mediaQuery.addEventListener === 'function') {
    mediaQuery.addEventListener('change', handleSystemThemeChange);
} else if (typeof mediaQuery.addListener === 'function') {
    mediaQuery.addListener(handleSystemThemeChange);
}
