export default function initInativeBegin() {
    const btnNewRole = document.querySelector('.btn-new-role');
    const begin = document.querySelector('.begin');

    btnNewRole.addEventListener('click', inativeBegin);

    function inativeBegin() {
        begin.classList.add('inative')
    }
}