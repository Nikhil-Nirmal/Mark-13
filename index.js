const input = document.querySelector('.inp');
const output = document.querySelector('.opt');
let y,d,m;
let daysInMonth = {1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31};
let dayCounter = 0;
let prevdayCounter = 0;

function btn_onclick() {
	let timerImg = document.getElementById("output");
		timerImg.style.width = '6rem';     
		timerImg.style.height = '6rem';     
		timerImg.src = 'loading.gif';     
		setTimeout(function(){ 
			timerImg.style.width = '0rem';     
			timerImg.style.height = '0rem';     
		calc(); 
		}, 3000);
	}
	
function isLeap(year){
	if (year % 400 == 0)
		return true;

	if (year % 100 == 0)
		if (year % 4 == 0)
			return true;
	return false;

}
function generateFormat(d,m,y){
	let f1,f2,f3,f4,f5;
	f1 = d+m+y;
    f2 = m+d+y;
    f3 = y+m+d;
    f4 = d+m+y[2]+y[3];
    f5 = m+d+y[2]+y[3];
    return [f1,f2,f3,f4,f5];
}

function isPalindrome(dateStr){
	let reversedDate = dateStr.split("").reverse().join("");
	if (dateStr == reversedDate){
		return true;
	}
	else{
		return false;
	}
}
/*
(5) ["22022022", "02222022", "20220222", "220222", "022222"]
main.js:72 22022022
main.js:74 22022022 is Palindrome
main.js:38 in nextday
main.js:40 counter : 3
main.js:68 
*/

function nextDate(year,month,day){
	//console.log('in nextday');
	let dd = null;
	let mm = null;
	let yy = null;
	let newDaysFormat;
	let days = daysInMonth[month];
	if(isLeap(year) == true){
		if(month == 2){
			days = 29;
		}
	}
	
	for(let j = day; j<=days;j++){
		dayCounter++;
		//console.log('counter : '+dayCounter)
		dd = String(j);
		mm= String(month);
		yy = String(year);
		//console.log(String(j),String(month),String(year));
		

		if(j>=1 && j<=9){
			dd = '0'+ String(j);
		}
		if(month>=1 && month<=9){
			mm = '0'+ String(month);
		}
		
		newDaysFormat = generateFormat(dd,mm,yy);
		//console.log(newDaysFormat);
		
		for(let k = 0; k < newDaysFormat.length; k++){
			
			//console.log(newDaysFormat[k]);
			if (isPalindrome(newDaysFormat[k])){
				//console.log( newDaysFormat[k] + " is Palindrome")
				//console.log("back 1")
				return  newDaysFormat[k];
			}
		}
		
	}
}


function nextMonth(year,month,day){
	//console.log('in nextmonth');
	let returnVal = '';
	for(let i = month; i<=12; i++){
		if ( i > month){
			day = 1;
		}
		returnVal = nextDate(year,i,day);
		//console.log('back 2')
		if(returnVal != null){
			return returnVal;
		} 
	}
	
}

function nextPalindromeDate(d,m,y){
	//console.log('in nextpalidnrome');
	let returnVal = '';
	let run = true;
	let year = Number(y);
	let month = Number(m);
	let day = Number(d);
	while(run == true){
		returnVal = nextMonth(year,month,day);
		//console.log(returnVal);
		//console.log("back 3")
		year++;
		month = 1;
		day = 1;
		if(returnVal != null){
			return returnVal;
		}
	}
}




function prevdate(year,month,day){
	console.log('in prevday');
	let dd = null;
	let mm = null;
	let yy = null;
	let newDaysFormat;
	let days = daysInMonth[month];
	
	for(let j = day; j>=1;j--){
		prevdayCounter++;
		//console.log('prev counter : '+prevdayCounter)
		dd = String(j);
		mm= String(month);
		yy = String(year);
		//console.log(String(j),String(month),String(year));
		

		if(j>=1 && j<=9){
			dd = '0'+ String(j);
		}
		if(month>=1 && month<=9){
			mm = '0'+ String(month);
		}
		
		newDaysFormat = generateFormat(dd,mm,yy);
		//console.log(newDaysFormat);
		for(let k = 0; k < newDaysFormat.length; k++){
				
			//console.log(newDaysFormat[k]);
			if (isPalindrome(newDaysFormat[k])){
				//console.log( newDaysFormat[k] + " is Palindrome")
				//console.log("back 1")
				return  newDaysFormat[k];
			}
		}
	}
}	


function prevMonth(year,month,day){
	//console.log('in prevmonth');
	let returnVal = '';
	for(let i = month; i>=1; i--){
		if ( i < month){
			day = daysInMonth[i];
			if(isLeap(year) == true){
				if(month == 2){
					day = 29;
				}
			}
		}
		returnVal = prevdate(year,i,day);
	//	console.log('back 2')
		if(returnVal != null){
			return returnVal;
		} 
	}
	
}


function prevPalindromeDate(d,m,y){
	//console.log('in prevpalidnrome');
	let returnVal = '';
	let run = true;
	let year = Number(y);
	let month = Number(m);
	let day = Number(d);
	while(run == true){
		returnVal = prevMonth(year,month,day);
		//console.log(returnVal);
		//console.log("back 3")
		year--;
		month = 12;
		day = 31;
		if(returnVal != null){
			return returnVal;
		}
	}
}


function calc(){
	let datearr = input.value.split('-');
	let palindormedate = '';
	dayCounter = 0;
	prevdayCounter = 0;
	console.log(datearr)
	let flag = false;
	y = datearr[0];
	m = datearr[1];
	d = datearr[2];
	
	let allDateFormat = generateFormat(d,m,y);
	console.log(allDateFormat);
	
	for(let i = 0; i<allDateFormat.length; i++){
		if (isPalindrome(allDateFormat[i])){
			palindormedate = allDateFormat[i];
			flag = true;
			break;
		}
	}
	
	if(flag == true){
		output.innerHTML = 'Date is palindrome ' + palindormedate;		
		console.log('Date is palindrome');	
	}
	else{
		console.log('Not a palindrome');
		let msg = '';



		let next = nextPalindromeDate(d,m,y);
		let prev = prevPalindromeDate(d,m,y);
		console.log(dayCounter, prevdayCounter);		
		if(dayCounter < prevdayCounter){
			msg = 'Next palindorme is : '+next+ '\nYou missed '+ Number(dayCounter-1)+' days'; 
		}
		else{
			msg = 'Previous palindrome is : '+prev+'\nYou missed '+Number(prevdayCounter-1)+' days';
		}
		output.innerHTML = msg;
		console.log(msg);
	}
}
