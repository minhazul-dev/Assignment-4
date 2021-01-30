function handleTicketChange(ticket, isIncreasing) {
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);

    let ticketNewCount = ticketCount;
    if (isIncreasing == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncreasing == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
 
    let ticketTotal = 0;
    if (ticket == 'firstClass') {
        ticketTotal = ticketNewCount * 150;
    }
    if (ticket == 'economyClass') {

        ticketTotal = ticketNewCount * 100;
    }
    document.getElementById(ticket + '-total').innerText = "$" + ticketTotal;

    calculateTotal();

}

function calculateTotal() {
    const firstClassInput = document.getElementById('firstClass-count');
    const firstClassCount = parseInt(firstClassInput.value);

    const economyClassCount = getInputValue('economyClass');

    const totalPrice = firstClassCount * 150 + economyClassCount * 100;

    document.getElementById('total-price').innerText = "$" + totalPrice;
   
      const tax = Math.round(totalPrice * 0.1) ;
      document.getElementById('taxAmount').innerText = "$" + tax;
      const grandTotal = totalPrice + tax ;
      document.getElementById('grand-total').innerText = '$' + grandTotal;
}

function getInputValue(ticket) {

    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}



hide(document.querySelectorAll('.total-hidden'));
function hide (elements) {
  elements = elements.length ? elements : [elements];
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = 'none';
  }
}




















// function handleTicketfsChange(isIncreasing) {

//     const firstClassInput = document.getElementById('firstClass-count');
//     const firstClassCount = parseInt(firstClassInput.value);
//     let firstClassNewCount = firstClassCount;

//     if (isIncreasing == true) {
//         firstClassNewCount = firstClassCount + 1;
//     }
//     if (isIncreasing == false && firstClassCount > 0) {
//         firstClassNewCount = firstClassCount - 1;
//     }
//     firstClassInput.value = firstClassNewCount;
//     const firstClassTotal = firstClassNewCount * 150;
//     document.getElementById('firstClass-total').innerText = "$" + firstClassTotal;

// }

// function handleTicketChange(isIncreasing) {
//     const economyInput = document.getElementById('economy-count');
//     const economyCount = parseInt(economyInput.value);
//     let economyNewCount = economyCount;
//     if (isIncreasing == true) {
//         economyNewCount = economyCount + 1;
//     }
//     if (isIncreasing == false && economyCount > 0) {
//         economyNewCount = economyCount - 1;
//     }
//     economyInput.value = economyNewCount;
//     const economyTotal = economyNewCount * 100;
//     document.getElementById('economy-total').innerText = "$" + economyTotal;

// }
