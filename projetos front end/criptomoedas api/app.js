const currencySelector = document.getElementById('currency');
const priceDisplay = document.getElementById('price-display');

function fetchPrice(currency) {
	fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${currency}&vs_currencies=usd`)
		.then(response => response.json())
		.then(data => {
			const usdPrice = data[currency].usd;
			fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL')
				.then(response => response.json())
				.then(data => {
					const usdBrlRate = data['USDBRL'].ask;
					const price = (usdPrice * usdBrlRate).toFixed(2);
					priceDisplay.textContent = `R$ ${price}`;
				})
				.catch(error => console.error(error));
		})
		.catch(error => console.error(error));
}

function handleSubmit(event) {
	event.preventDefault();
	const selectedCurrency = currencySelector.value;
	fetchPrice(selectedCurrency);
}

document.querySelector('form').addEventListener('submit', handleSubmit);



// const currencySelector = document.getElementById('currency');
// const priceDisplay = document.getElementById('price-display');

// function fetchPrice(currency) {
// 	fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${currency}&vs_currencies=usd`)
// 		.then(response => response.json())
// 		.then(data => {
// 			const price = data[currency].usd;
// 			priceDisplay.textContent = `$${price}`;
// 		})
// 		.catch(error => console.error(error));
// }

// function handleSubmit(event) {
// 	event.preventDefault();
// 	const selectedCurrency = currencySelector.value;
// 	fetchPrice(selectedCurrency);
// }

// document.querySelector('form').addEventListener('submit', handleSubmit);