// Load the content of the datas
loadDatas();
const generateMaketaskInput = (name, postName, content) => {
    const mTask = document.querySelector(`.${name}_newTask > .maketask`);
    mTask.innerHTML = `
    <label for="name">${content.name}</label>
    <input class="name" type="text" name="name" maxlength="20" size="10">
    <p class="name_error" style="display: none;"></p>
    <label for="priority">${content.priority}</label>
    <select name="priority" class="priority">
        <option value="high">${content.pHigh}</option>
        <option value="medium">${content.pMed}</option>
        <option value="low" selected>${content.pLow}</option>
    </select>
    <label for="description">${content.description}</label>
    <textarea name="description" class="description" cols="30" rows="10"></textarea>
    <p class="description_error" style="display: none;"></p>
    <label for="dueTo">${content.dueTo}</label>
    <input type="date" name="dueTo" class="dueTo" value="${inputActualDateFormat()}">
    <input type="submit" value="${content.post}" class="post${postName}Task">
    `;
};
const fetchMenuNames = (sortMenu, filterMenu, darkBtn) => {
    let menuTitles = document.querySelectorAll('.menu_btn > .dropbtn');
    let menuBtns = document.querySelectorAll('.menu_btn');
    // Sort
    menuTitles[0].innerHTML = sortMenu.category;
    document.querySelector('.sorting_name').innerHTML = sortMenu.prop0;
    document.querySelector('.sorting_priority').innerHTML = sortMenu.prop1;
    document.querySelector('.sorting_timeline').innerHTML = sortMenu.prop2;
    // Filter
    menuTitles[1].innerHTML = filterMenu.category;
    let innerP = menuBtns[1].querySelectorAll('div > p');
    innerP[0].innerHTML = filterMenu.prop0;
    innerP[1].innerHTML = filterMenu.prop1;
    innerP[2].innerHTML = filterMenu.prop2;
    // Dark BTN
    menuBtns[2].innerHTML = !dark ? darkBtn.category : darkBtn.opposite;
};
const fetchFlexTab = (datas) => {
    document.querySelector('.toDo_header_title').innerHTML = datas.prop0;
    document.querySelector('.doing_header_title').innerHTML = datas.prop1;
    document.querySelector('.done_header_title').innerHTML = datas.prop2;
    const dd = [
        'toDo',
        'doing'
    ];
    for(let d of dd)
    {
        document.querySelector(`.${d}_newTask > .${d}_newTask_title > .${d}_newTask_title`).innerHTML = datas.nTask;
    }
};
const languageGenerate = (datas) => {
    document.querySelector('.footer_languages_label').innerHTML = datas.name;
    let c = '';
    for(const l of datas.list)
    {
        if(l.default)
        {
            c = `${c}<option class="footer_languages_language" value="${l.value}" selected>${l.key}</option>`
        }
        else
        {
            c = `${c}<option class="footer_languages_language" value="${l.value}">${l.key}</option>`;
        }
    }
    document.querySelector('#languages').innerHTML = c;
};
const rewriteDatas = () => {
    const allTasks = document.querySelectorAll('.toDo_tasks, .doing_tasks, .done_tasks');
    for(const t of allTasks)
    {
        t.innerHTML = '';
    }
    for(let uTask of userTasks)
    {
        pushNewElement(uTask);
    }
};
const translator = (language) => {
    generateMaketaskInput('toDo', 'ToDo', language['NEW_TASK_INPUT']);
    generateMaketaskInput('doing', 'Doing', language['NEW_TASK_INPUT']);
    fetchMenuNames(language['SORT_INPUT'], language['FILTER_INPUT'], language['THEME_INPUT']);
    fetchFlexTab(language['FILTER_INPUT']);
    languageGenerate(language['LANGUAGE_INPUT']);
};
translator(LANGUAGE_DB['en']);
const switchLanguage = document.querySelector('#languages');
switchLanguage.addEventListener('change', (e) => {
    translator(LANGUAGE_DB[e.target.value]);
    rewriteDatas();
});
