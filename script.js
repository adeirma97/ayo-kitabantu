
const form = document.getElementById('donationForm');
const donorList = document.getElementById('donorList');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');

let totalDonations = 0;
const targetAmount = 10000000;

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const amount = parseInt(document.getElementById('amount').value);

    if (name && amount > 0) {
        totalDonations += amount;

        const listItem = document.createElement('li');
        listItem.textContent = `${name} menyumbang Rp ${amount.toLocaleString()}`;
        donorList.appendChild(listItem);

        const progressPercent = Math.min((totalDonations / targetAmount) * 100, 100);
        progressBar.style.width = progressPercent + '%';
        progressText.textContent = `Rp ${totalDonations.toLocaleString()} dari Rp ${targetAmount.toLocaleString()}`;

        form.reset();
    }
});
