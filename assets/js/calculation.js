export default function initiCalutation() {
    const calc = document.querySelector('.btn');

    calc.addEventListener('click', calculate)

    function calculate(event) {
        event.preventDefault();
 
        const nb = +document.querySelector('#number1').value;
        const nib = +document.querySelector('input[name="nib"]:checked').value;
        const nba = +document.querySelector('#number2').value;
        const niba = +document.querySelector('input[name="niba"]:checked').value;
        const nis = +document.querySelector('input[name="nis"]:checked').value;
        const km = +document.querySelector('#number3').value;
        const day = +document.querySelector('input[name="d"]:checked').value;
        const others = document.querySelectorAll('input[name="other"]');
        
        function expensesBars() {
            return nb * nib * nis * 5 * 9
        }

        function expensesBallad() {
            return nba * niba * nis * 5 * 9
        }

        function expensesUber() {
            return km * day * 4
        }

        function expensesOthers() {
            let otherValue = 0;
            others.forEach( item => {
                let currentItem = +item.value.trim().replace(',','.');
                otherValue += currentItem;
            });
            return otherValue;
        }

        const total = expensesBars() + expensesBallad() + expensesUber() + expensesOthers();
        const result = total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
        console.log(result)

    }
}