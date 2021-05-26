export default function initAddOther() {
    const add = document.querySelector('.add-other');
        
    add.addEventListener('click', addOther);
    
    function addOther() {
        const itemOthers = document.querySelector('.item-others:nth-last-child(2)');
        const feedback = document.querySelector('.item-others:nth-last-child(2) > p');
        
        if (itemOthers.children[0].value && +itemOthers.children[2].value)  {
            const others = document.querySelector('.others');
            
            itemOthers.classList.remove('error');
            feedback.classList.remove('error');
            
            const cloneOther = itemOthers.cloneNode(true);
            cloneOther.children[0].value = '';
            cloneOther.children[2].value = '';
            
            others.insertBefore(cloneOther, add);
        } else {
            itemOthers.classList.add('error');
            feedback.classList.add('error');
        }
        
        const remove = document.querySelectorAll('.trash');
        remove.forEach(trash => trash.addEventListener('click', removeOther))
        
        function removeOther() {
            const itemsList = document.querySelectorAll('.others div')
            if (itemsList.length === 1) return;
            this.parentElement.remove() 
        }
    }



}