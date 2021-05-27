export default function initComeBack() {
    const modal = document.querySelector('.modal');
    const body = document.querySelector('body');
    const arrow = document.querySelector('.arrow');

    arrow.addEventListener('click', removeModal)

    function removeModal() {
        body.classList.remove('active-modal');
        modal.classList.remove('active-modal');
    }
}