export default function initiCalutation() {
    const calc = document.querySelector('.btn');
    const modal = document.querySelector('.modal');
    const body = document.querySelector('body');
    const finalResult = document.querySelector('.final-result');

    calc.addEventListener('click', calculate)

    function generatesNumbers(selector) {
        const element = +document.querySelector(selector).value;
        return element
    }

    function calculate(event) {
        event.preventDefault();

        const nb = generatesNumbers('#number1');
        const nib = generatesNumbers('input[name="nib"]:checked');
        const nba = generatesNumbers('#number2');
        const niba = generatesNumbers('input[name="niba"]:checked');
        const nis = generatesNumbers('input[name="nis"]:checked');
        const km = generatesNumbers('#number3');
        const day = generatesNumbers('input[name="d"]:checked');
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
        const result = total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

        body.classList.add('active-modal');
        modal.classList.add('active-modal');
        finalResult.innerText = result;

    }
}