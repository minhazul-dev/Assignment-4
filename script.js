// <<buttons increase and decrease>>
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

// <<calculation for both>>
function calculateTotal() {
    const firstClassInput = document.getElementById('firstClass-count');
    const firstClassCount = parseInt(firstClassInput.value);
    const economyClassCount = getInputValue('economyClass');
    const totalPrice = firstClassCount * 150 + economyClassCount * 100;

    document.getElementById('total-price').innerText = "$" + totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('taxAmount').innerText = "$" + tax;
    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}

function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}


// <<book now Button>>

function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
}

hide(document.querySelectorAll('.total-hidden'));  //checking the total amount is calculation or not
function hide(elements) {
    elements = elements.length ? elements : [elements];
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
    }
}
