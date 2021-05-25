export default function initiToggleThemes() {
    const light = document.querySelector('.switch'); 

    if (light) {
        light.addEventListener('click', switchToggle)
        
        function addClassLighModeElements(selector) {
            const classLightMode = 'light-mode';
            const elements = document.querySelectorAll(selector)
            elements.forEach( item => item.classList.toggle(classLightMode))
        }
        
        function switchToggle() {
            this.classList.toggle('active');
            addClassLighModeElements('body');
            addClassLighModeElements('section');
            addClassLighModeElements('.letters')
            addClassLighModeElements('input[type]');
            addClassLighModeElements('p');
            addClassLighModeElements('label');
            addClassLighModeElements('span');
        }
    }
}

