const btnEl = document.querySelector("#calculate");
const billInput = document.querySelector("#bill");
const tipInput = document.querySelector("#tip");
const totalSpan = document.querySelector("#total");

function calculateTotal(){
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const totalValue = billValue *(1 + tipValue / 100);
    totalSpan.innerHTML = totalValue.toFixed(2);
}

btnEl.addEventListener("click",calculateTotal);