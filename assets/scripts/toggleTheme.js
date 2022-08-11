const switchTheme = document.querySelector('.theme_switch');
switchTheme.addEventListener('click', () => {
    dark = !dark;
    const elemsDark = document.querySelectorAll(dark ? '.light' : '.dark');
    for(const e of elemsDark)
    {
        e.classList.add(dark ? 'dark' : 'light');
        e.classList.remove(dark ? 'light' : 'dark');
    }
});