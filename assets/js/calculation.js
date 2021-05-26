export default function initiCalutation() {
    const calc = document.querySelector('.calc');

    calc.addEventListener('click', calculate)

    function calculate(event) {
        event.preventDefault();
        const nb = +document.querySelector('#number1').value;
        const nib = +document.querySelector('input[name="nib"]:checked').value;
        const nba = +document.querySelector('#number2').value;
        const niba = +document.querySelector('input[name="niba"]:checked').value;
        const nis = +document.querySelector('input[name="nis"]:checked').value;
        const km = +document.querySelector('#number3').value;
        const d = +document.querySelector('input[name="d"]:checked').value;
        console.log(nb)
    }
}