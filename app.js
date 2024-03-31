// Premium Seats
let M = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];


// Exclusive Seats
let K = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];


// Normal Seats 
let E = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];



function addSeat(getClassName, indexValue, arr) {
    if(arr == 'M') {
        if(M[indexValue] != 0) {
            M[indexValue] = 0;
            document.getElementsByClassName(getClassName)[indexValue].style.backgroundColor = 'rgb(102, 0, 128)';
            document.getElementsByClassName(getClassName)[indexValue].style.color = 'hsl(0, 0%, 94%)';
            let seatNum = document.getElementById("premiumSeat").innerText;
            seatNum = parseInt(seatNum);
            seatNum++;
            document.getElementById("premiumSeat").innerText = seatNum;
            generateAmount();
        }
        else {
            M[indexValue] = indexValue + 1;
            document.getElementsByClassName(getClassName)[indexValue].style.backgroundColor = 'hsl(0, 0%, 94%)';
            document.getElementsByClassName(getClassName)[indexValue].style.color = 'rgb(102, 0, 128)';
            let seatNum = document.getElementById("premiumSeat").innerText;
            seatNum = parseInt(seatNum);
            seatNum--;
            document.getElementById("premiumSeat").innerText = seatNum;
            generateAmount();
        }
    }
    else if(arr == 'K') {
        if(K[indexValue] != 0) {
            K[indexValue] = 0;
            document.getElementsByClassName(getClassName)[indexValue].style.backgroundColor = 'rgb(102, 0, 128)';
            document.getElementsByClassName(getClassName)[indexValue].style.color = 'hsl(0, 0%, 94%)';
            let seatNum = document.getElementById("exclusiveSeat").innerText;
            seatNum = parseInt(seatNum);
            seatNum++;
            document.getElementById("exclusiveSeat").innerText = seatNum;
            generateAmount();
        }
        else {
            K[indexValue] = indexValue + 1;
            document.getElementsByClassName(getClassName)[indexValue].style.backgroundColor = 'hsl(0, 0%, 94%)';
            document.getElementsByClassName(getClassName)[indexValue].style.color = 'rgb(102, 0, 128)';
            let seatNum = document.getElementById("exclusiveSeat").innerText;
            seatNum = parseInt(seatNum);
            seatNum--;
            document.getElementById("exclusiveSeat").innerText = seatNum;
            generateAmount();
        }
    }
    else if(arr == 'E') {
        if(E[indexValue] != 0) {
            E[indexValue] = 0;
            document.getElementsByClassName(getClassName)[indexValue].style.backgroundColor = 'rgb(102, 0, 128)';
            document.getElementsByClassName(getClassName)[indexValue].style.color = 'hsl(0, 0%, 94%)';
            let seatNum = document.getElementById("normalSeat").innerText;
            seatNum = parseInt(seatNum);
            seatNum++;
            document.getElementById("normalSeat").innerText = seatNum;
            generateAmount();
        }
        else {
            E[indexValue] = indexValue + 1;
            document.getElementsByClassName(getClassName)[indexValue].style.backgroundColor = 'hsl(0, 0%, 94%)';
            document.getElementsByClassName(getClassName)[indexValue].style.color = 'rgb(102, 0, 128)';
            let seatNum = document.getElementById("normalSeat").innerText;
            seatNum = parseInt(seatNum);
            seatNum--;
            document.getElementById("normalSeat").innerText = seatNum;
            generateAmount();
        }
    }
}



function generateAmount() {
    let premiumAmount = document.getElementById("premiumSeat").innerText;
    console.log(premiumAmount);
    premiumAmount = parseInt(premiumAmount);
    premiumAmount = 270 * premiumAmount;

    let exclusiveAmount = document.getElementById("exclusiveSeat").innerText;
    exclusiveAmount = parseInt(exclusiveAmount);
    exclusiveAmount = 250 * exclusiveAmount;

    let normalAmount = document.getElementById("normalSeat").innerText;
    normalAmount = parseInt(normalAmount);
    normalAmount = 230 * normalAmount;

    let total = premiumAmount + exclusiveAmount + normalAmount;
    document.getElementById("totalAmt").innerText = `Rs. ${total}`;
}