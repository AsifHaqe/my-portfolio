document.addEventListener('DOMContentLoaded', function () {
    const loanAmountEl = document.getElementById("loan-amount");
    const interestRateEl = document.getElementById("interest-rate");
    const monthsToPayEl = document.getElementById("months-to-pay");
    const paymentEl = document.getElementById("payment");

    function calculateLoan() {
        const loanAmount = parseFloat(loanAmountEl.value) || 0;
        const interestRate = parseFloat(interestRateEl.value) || 0;
        const monthsToPay = parseInt(monthsToPayEl.value) || 0;

        if (monthsToPay <= 0) {
            paymentEl.innerText = "Monthly Payment: $0.00";
            return;
        }
        const monthlyInterest = (loanAmount * (interestRate / 100)) / monthsToPay;
        const monthlyPayment = (loanAmount / monthsToPay + monthlyInterest).toFixed(2);

        paymentEl.innerText = `Monthly Payment: $${monthlyPayment}`;
    }

    loanAmountEl.addEventListener("input", calculateLoan);
    interestRateEl.addEventListener("input", calculateLoan);
    monthsToPayEl.addEventListener("input", calculateLoan);
    calculateLoan();
});