// const encodedParams = new URLSearchParams();
// encodedParams.append("language", "en_US");
// encodedParams.append("limit", "30");
// encodedParams.append("location_id", "297704");
// encodedParams.append("currency", "USD");

// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/x-www-form-urlencoded',
// 		'X-RapidAPI-Key': 'fb896adc91mshc9c4a546e6d250dp112778jsn2c0f8f724fbd',
// 		'X-RapidAPI-Host': 'worldwide-restaurants.p.rapidapi.com'
// 	},
// 	body: encodedParams
// };

// fetch('https://worldwide-restaurants.p.rapidapi.com/search', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
const encodedParams = new URLSearchParams();
encodedParams.append("pollingCallbackUrl", "<REQUIRED>");
encodedParams.append("apiKey", "<REQUIRED>");
encodedParams.append("cartId", "<REQUIRED>");
encodedParams.append("deliveries[0]", "<REQUIRED>");

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': 'fb896adc91mshc9c4a546e6d250dp112778jsn2c0f8f724fbd',
		'X-RapidAPI-Host': 'Ticketmasterstefan-skliarovV1.p.rapidapi.com'
	},
	body: encodedParams
};

fetch('https://ticketmasterstefan-skliarovv1.p.rapidapi.com/addDeliveriesToCart', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));