const listItem = document.querySelector(".listItem");

const balance = document.querySelector(".balance");
const expense = document.querySelector(".expense");
const transactionRecord = document.querySelector(".transaction_record");
const submitBtn = document.querySelector(".submit-btn");
const ulListItem = document.querySelector(".transactonList");
const transactionStatus = document.querySelector("#status");
const form = document.querySelector("#form")
console.log(form)

const transaction = [
  {
    id: 1,
    name: "salary",
    amount: 4000,
    date: new Date(),
    type: "income",
  },
  {
    id: 2,
    name: "junks shoping",
    amount: 500,
    date: new Date(),
    type: "expense",
  },
  {
    id: 3,
    name: "haircut",
    amount: 100,
    date: new Date(),
    type: "expense",
  },
];

// Formats
// Currency format
const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  signDisplay: "always",
});

// Date format
const dateFormat = new Intl.DateTimeFormat('en-GB',{
  year: "numeric",
  month: "2-digit",
  day:"2-digit"
})

const renderList = () => {
  if (transaction.length === 0) {
    transactionStatus.textContent = "No transactions";
    return;
  }
 

  transaction.forEach(({ id, name, amount, date, type }) => {
    listItem.innerHTML += `
    <div class="name">
    <h2 class="name-h2">${name}</h2>
    <p class='date'>${dateFormat.format(date)}</p>
    </div>
      <div class="amount">
     <h2>${currencyFormatter.format(amount)}</h2>
    //  <span class></span>
    //  <span></span>
    </div>
`;
  });
};

const addTransactions = () => {
 const formData = new FormData(this)

  transaction.push[{
    id: transaction.length + 1,
    name: formData.get('name'),
    amount: parseFloat(formData.get('amount')),
    date: new date(formData.get('date')),
    type:"on"=== formData.get('type') ? "income":"expense"
 }]
  this.reset()
  renderList()
}

form.addEventListener("submit", function (e) {
  e.preventDefault()
  addTransactions()
})
submitBtn.addEventListener("click", renderList());

