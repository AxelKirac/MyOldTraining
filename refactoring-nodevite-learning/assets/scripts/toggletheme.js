export function toggleTheme()
{
    let theme = document.getElementsByTagName('link')[1];
    let currentBtn = document.getElementById('dark__theme');
    if (theme.getAttribute('href') == './assets/css/style-light-theme.css')
    {
        theme.setAttribute('href', './assets/css/style-dark-theme.css');
        currentBtn.setAttribute('src', 'assets/img/moon.png');

    }
    else
    {
        theme.setAttribute('href', './assets/css/style-light-theme.css');
        currentBtn.setAttribute('src', 'assets/img/sun.png');
    }
}