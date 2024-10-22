const switchTheme = document.querySelector('.theme_switch');
switchTheme.addEventListener('click', () => {
    dark = !dark;
    updateTheme();
    saveDatas();
});
function updateTheme()
{
    const getLanguage = LANGUAGE_DB[document.querySelector('#languages').value]['THEME_INPUT'];
    switchTheme.innerHTML = !dark ? getLanguage.category : getLanguage.opposite;
    const elemsDark = document.querySelectorAll(dark ? '.light' : '.dark');
    for(const e of elemsDark)
    {
        e.classList.add(dark ? 'dark' : 'light');
        e.classList.remove(dark ? 'light' : 'dark');
    }
    const checkboxesMode = [
        '.dropdown-content-todo > .dropdown-content-checkbox',
        '.dropdown-content-doing > .dropdown-content-checkbox',
        '.dropdown-content-done > .dropdown-content-checkbox'
    ];
    let darkAppend = dark ? '-dark' : '';
    for(const md of checkboxesMode)
    {
        let img = document.querySelector(md);
        let imgPath = `assets/img/${img.getAttribute('value') === 'true' ? 'eye-icon' : 'closed-eye-icon'}${darkAppend}.png`;
        img.setAttribute('src', imgPath);
    }
}