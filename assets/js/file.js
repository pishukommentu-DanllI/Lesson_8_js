'use strict';

let option = new Option('Классика', 'classic', true, true);
document.querySelector('#genes').append(option);


// задание 2
let html_div;
function task_2_focus(elem) {
    html_div = elem.outerHTML;
    elem.insertAdjacentHTML("beforeBegin", "<textarea onblur='task_2_blur(this)' id='task_2'>Текст</textarea>");
    let array = document.querySelector('#task_2')

    array.addEventListener('keydown', event => {
        if (event.code == 'Enter') {
            array.blur();
        }
    })
    array.value = elem.innerHTML  
    elem.remove();

}

function task_2_blur(elem) {
    let html = elem.value;
    elem.insertAdjacentHTML("beforeBegin", html_div);
    elem.remove();
    document.querySelector('#view').insertAdjacentHTML('beforeEnd', html);
}

// Задание 3
let div_block_bnt = '<div style="z-index: 1;position: absolute;bottom:-22px;left:33px"><button id="btn_ok">OK</button> <button id="btn_canecl">CANECL</button></div>'
let blokc;
document.querySelector('#bagua-table').addEventListener('click', event => {
        if (blokc) {
            if (blokc.firstChild.tagName == 'TEXTAREA') {
                return;
            }
        }
        if (event.target.tagName != 'TD'){
            return;
        }

        blokc = event.target
        let html = event.target.innerHTML
        let textarea = document.createElement('textarea')
        textarea.value = html;
        textarea.className = 'textarea'
        event.target.innerHTML = null;
        event.target.appendChild(textarea);
        event.target.insertAdjacentHTML('beforeEnd', div_block_bnt);
        
        document.querySelector('#btn_ok').onclick = function() {
            event.target.innerHTML = textarea.value;

        }

        document.querySelector('#btn_canecl').onclick = function() {
            event.target.innerHTML = html;

        }

    }
)

// Задание 4

document.querySelector('#task_4').onclick = function(elem) {
    let summ = +document.getElementById('one').value;
    let contribution = +document.getElementById('two').value;
    let bid = +document.getElementById('three').value / 12 / 100 
    for (let i = 0; i < contribution; i++) {
        summ += summ * bid;
    }

    elem.target.insertAdjacentHTML('afterend', `<p>${Math.round(summ)}</p>`);
    
    
}