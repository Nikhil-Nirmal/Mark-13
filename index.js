const input = document.querySelector('.inp');
let y,d,m;
daysInMonth = {1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31};

const output = document.querySelector('.opt');
function generateFormat(d,m,y){
	let f1,f2,f3,f4,f5;
	f1 = d+m+y;
    f2 = m+d+y;
    f3 = y+m+d;
    f4 = d+m+y[2]+y[3];
    f5 = m+d+y[2]+y[3];
    return [f1,f2,f3,f4,f5];
}
function isLeap(year){
	if (year % 400 == 0)
		return true;

	if (year % 100 == 0)
		if (year % 4 == 0)
			return true;
	return false;

}
function isPalindrome(dateStr){
    let reversedDate = dateStr.split('').reverse().join('');
    if(dateStr == reversedDate){
        return true;
    }
    return false;
}

function prevPalindrome(d,m,y){
	im = Number(m);
	id = Number(d);
	let mm,dd,yy;
	let dayCounter = 0;
	let datestr = '';
	let run = true;
	let k = Number(y);
		
	while (run == true){
		let days = 0;
		yy = String(k);
		//console.log('YY'+yy);
		// Checking for Month
		for (let i = im;i>=1;i--){
			
			//console.log('MM'+i);
			// Checking for days			
			for(let j=id; j>=1;j--){
				dayCounter+=1;
				//console.log('DD'+j);
				
				if(i >=1 && i<=9){
					mm = '0'+String(i);	
					//console.log('0 added to mm'+mm);
				}
				else{
					mm = String(i);
				}
				
				if (j >=1 && j<=9){
					dd = '0'+String(j);
					//console.log('0 added to dd'+dd);
				}
				else{
					dd = String(j); 
				}
				
				datestr = generateFormat(dd,mm,yy);
				//console.log(datestr);
				
				for(let date=0; date<datestr.length;date++){
					//console.log('Format '+date+" "+datestr[date]);
					
					if(isPalindrome(datestr[date]) == true){
						console.log(datestr[date]);
						console.log(dayCounter);
						run = false;
                        return [datestr[date],dayCounter];
					}
				}
			}
			days = daysInMonth[i-1];
			if (isLeap(k) == true){
				if(i == 2){
					days = 28;
				}
			}
			id=days;

		}
		k-=1;
		im = 12;
		id = 31;
		
	}
	
}


function nextPalindromeDate(d,m,y){
	im = Number(m);
	id = Number(d);
	let mm,dd,yy;
	let dayCounter = 0;
	let datestr = '';
	let run = true;
	let k = Number(y);
		
	while (run == true){
		yy = String(k);
		//console.log('YY'+yy);
		// Checking for Month
		for (let i = im;i<=12;i++){
		//	console.log('MM'+i);
			let days = daysInMonth[i];
			if (isLeap(k) == true){
				if(i == 2){
					days = 28;
				}
			}
			// Checking for days			
			for(let j=id; j<=days;j++){
				dayCounter+=1;
		//		console.log('DD'+j);
				
				if(i >=1 && i<=9){
					mm = '0'+String(i);	
		//			console.log('0 added to mm'+mm);
				}
				else{
					mm = String(i);
				}
				
				if (j >=1 && j<=9){
					dd = '0'+String(j);
		//			console.log('0 added to dd'+dd);
				}
				else{
					dd = String(j); 
				}
				
				datestr = generateFormat(dd,mm,yy);
		//		console.log(datestr);
				
				for(let date=0; date<datestr.length;date++){
		//			console.log('Format '+date+" "+datestr[date]);
					
					if(isPalindrome(datestr[date]) == true){
						console.log(datestr[date]);
						console.log(dayCounter);
						run = false;
                        return [datestr[date],dayCounter];
					}
				}
			}
			id=1;

		}
		k+=1;
		id = 1;
		im = 1;
	}
}

function btn_onclick() {
	y='',d='',m='';
	
    let flag = false;
    if (input.value ==""){
        console.log('1');
        //output.innerHTML = 'Please enter a date first!!!!';
    }
    else{
        let date1 = input.value.split("-");  
        y = date1[0];
        m = date1[1];
        d = date1[2];
        
        let allDates = generateFormat(d,m,y);
		console.log(allDates)
        for(let i=0; i<allDates.length; i++){
			console.log(allDates[i]);
            if(isPalindrome(allDates[i]) == true){
                flag = true
                break;
            }
        }

        if (flag == true){
            console.log('IS palindrome')
			output.innerHTML = 'Date is palindrome'
        }
        else {
            // find nextPalindromedate(m,d,y)
            //output.innerHTML = 'Oops not a Palindrome';
			console.log('Finding next date....................');
            let next= nextPalindromeDate(d,m,y);
			let prev= prevPalindrome(d,m,y);
			let msg = '';
			if(next[1] < prev[1]){
				msg = 'Next palindrome date is in future '+next[0]+' you got missed by '+next[1]+' days' 
			}
			else if (next[1] > prev[1]){
				msg = 'Next palindrome date is in past '+prev[0]+' you got missed by '+prev[1]+' days'
			}
			else{
				msg = 'Both palindrome dates are far at equal no of days : '+next[0];
			}
            output.innerHTML = msg 
        }
    }
}

