const c_p = document.querySelector('.cp');
const stock = document.querySelector('.stocks');
const s_p = document.querySelector('.sp');
const output = document.querySelector('.output');

function btn_onclick() {
    let cost = Number(c_p.value);
    let price = Number(s_p.value)

    if (price > cost ){
        let profit = (price - cost);
        let profitPercentage = (profit * 100) / cost; 
        output.innerHTML = 'The Profit is '+profit+'rs.'+' <br> The Profit Percentage  is  '+profitPercentage+'%';
         document.getElementById("body").style.background = "url('gift.gif') center right no-repeat";
            document.getElementById("body").style.backgroundSize = "cover";
            document.getElementById("container").style.background = "url('cat.gif') center  no-repeat";
            document.getElementById("container").style.backgroundSize = "50%";
            document.getElementById("header").style.color = "black";
            document.getElementById("main").style.background = "none";
            document.getElementById("tex").style.color = "black";
            document.getElementById("footer").style.display = "none";
    }
    else if (price < cost ) {
        let loss = (cost - price);
        let lossPercentage = (loss * 100) / cost;
        console.log(lossPercentage);
        document.getElementById("body").style.background = "url('sad.webp') center right no-repeat";
        document.getElementById("body").style.backgroundSize = "cover";
        document.getElementById("main").style.color = "white";
        document.getElementById("main").style.background = "none";
        document.getElementById("container").style.background = "none"; 
        document.getElementById("footer").style.display = "none";  
        output.innerHTML = 'The Loss is '+loss+'rs.'+'<br> The Loss Percentage  is  '+lossPercentage+'%';
        if(lossPercentage > 50) {
            document.getElementById("body").style.background = "url('sad.webp') center right no-repeat";
            document.getElementById("body").style.backgroundSize = "cover";
            document.getElementById("container").style.background = "url('sorry.gif') center  no-repeat";
            document.getElementById("container").style.backgroundSize = "50%";
            document.getElementById("header").style.color = "white";
            document.getElementById("main").style.color = "white";
            document.getElementById("main").style.background = "none";
            document.getElementById("footer").style.display = "none";
        }
    }
    else {
        output.innerHTML = "No Pain No Gain "
    }
}
