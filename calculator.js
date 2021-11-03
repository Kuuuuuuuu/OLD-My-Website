function calculator() {
    const btns = document.querySelectorAll('#calculator span');
    const operators = ['+', '-', 'x', '÷'];
    const inputScreen = document.querySelector('#screen');
    let btnValue;
    let input;
    for(var i=0; i< btns.length; i++) {
        var decimalAdded = false;
        btns[i].addEventListener('click', function () {
            btnValue = this.innerHTML;
            input = inputScreen.innerHTML;
            switch (btnValue) {
                case 'C':
                inputScreen.innerHTML = '';
                decimalAdded = false;
                break;
                case '=':
                let lastChar = input[input.length - 1];
                input = input.replace(/x/g, '*').replace(/÷/g, '/');
                if(operators.indexOf(lastChar) > -1 || lastChar == '.')
                input = input.replace(/.$/, '');
                if(input) {
                    inputScreen.innerHTML = eval(input);
                }
               decimalAdded = false;
               break;
               case '.':
               if(!decimalAdded) {
                  inputScreen.innerHTML += btnValue;
                  decimalAdded = true;
               }
                break;
                case '+':
                case '-':
                case 'x':
                case '÷':
                 let lastChar = input[input.length - 1];
                 if(input != '' && operators.indexOf(lastChar) == -1)
                     inputScreen.innerHTML += btnValue;
                 else if(input == '' && btnValue == '-')
                     inputScreen.innerHTML += btnValue;
                 if(operators.indexOf(lastChar) > -1 && input.length > 1) {
                     inputScreen.innerHTML = input.replace(/.$/, btnValue);
                 }
                 decimalAdded = false;
                 break;
              default:
              inputScreen.innerHTML += btnValue;
              decimalAdded = false;
              break;
            }
        });
    }
}
