let inp = document.getElementById('inputBox');
let digits = document.querySelectorAll('button');

let s = "";
let array = Array.from(digits);
array.forEach(digits => {
    digits.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            s = eval(s);
            inp.value = s;
        }

        else if(e.target.innerHTML == 'AC'){
            s = "";
            inp.value = s;
        }
        else if(e.target.innerHTML == 'DEL'){
            s = s.substring(0, s.length-1);
            inp.value = s;
        }
        else{
            s += e.target.innerHTML;
            inp.value = s;
        }
        
    })
})