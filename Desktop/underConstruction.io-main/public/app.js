
	document.querySelector('tracker').addEventListener('click', search);

	function search(){

	let AWBNumber = document.querySelector('input').value

		const options = {method: 'GET', headers: {'DHL-API-Key': 'APIKey'}};
// let AWBNumber = 6204282394
fetch(`https://api-test.dhl.com/track/shipments?trackingNumber=${AWBNumber}`, options)
	.then(res => res.json())
	.then(res => console.log(res))
	.catch(err => console.error(err));
	}