export default function initiToggleThemes() {
    const light = document.querySelector('.switch');
    const elementsList = ['body', 'section', '.letters','input[type]', 'p', 'label', 'span']; 

    if (light) {
        light.addEventListener('click', switchToggle);
        
        function switchToggle() {
            this.classList.toggle('active');
            elementsList.forEach (element => addClassDarkModeElements(element));
        }

        function addClassDarkModeElements(selector) {
            const elements = document.querySelectorAll(selector);
            elements.forEach( item => item.classList.toggle('dark-mode'));
        }
    }
}