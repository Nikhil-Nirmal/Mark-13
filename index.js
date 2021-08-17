const input = document.querySelector('.inp');
const output = document.querySelector('.opt');
let y,d,m;
let f1,f2,f3,f4,f5;
function btn_onclick() {
    if (input.value ==""){
        console.log('1');
        output.innerHTML = 'Please enter a date first!!!!';
    }
    else{
    let date1 = input.value.split("-");  
    y = date1[0];
    m = date1[1];
    d = date1[2];
    
    f1 = d+m+y;
    f2 = m+d+y;
    f3 = y+m+d;
    f4 = d+m+y[2]+y[3];
    f5 = m+d+y[2]+y[3];
    
   if (check(f1) == f1 || check(f2) == f2 || check(f3) == f3 || check(f4) == f4 || check(f5) == f5) {
       output.innerHTML = 'The Date is Palindrome';
   }
   else {
       output.innerHTML = 'Oops not a Palindrome';
   }
}
}

function check (str) {
   return str.split('').reverse().join('');
}


