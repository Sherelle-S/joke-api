Thank you for using our template!

For more awesome templates please visit https://colorlib.com/wp/templates/

Copyright information for the template can't be altered/removed unless you purchase a license.
More information about the license is available here: https://colorlib.com/wp/licence/

Removing copyright information without the license will result in suspension of your hosting and/or domain name(s).

 Deutsche Post DHL locations api
"url": "/locations/8007-453113145",
"location": {
  "ids": [
    {
      "locationId": "8003-453113145",
      "provider": "parcel"
    }
  ],
  "keyword": "**DHL Packstation**",
  "keywordId": "**145**",
  "type": "locker"
},
"name": "DHL Packstation 145",
"distance": 52,
"place": {
"address": {
    "countryCode": "**DE**",
    "postalCode": "**53113**",
    "addressLocality": "**Bonn**",
    "streetAddress": "Charles-de-Gaulle-Str. 20"
  },
}
...

Credential
 
API Key
ycxCJSQSXp6J7TrmOiEVF8WmznTnqOn3
Hide key
API Secret
kCzWXIRnMjaruK6Q
Hide key

curl -X GET 'https://api-eu.dhl.com/track/shipments?trackingNumber=7777777770' -H 'DHL-API-Key:PasteHere_ConsumerKey'
const options = {method: 'GET', headers: {'DHL-API-Key': 'REPLACE_KEY_VALUE'}};

fetch('https://api-test.dhl.com/track/shipments?trackingNumber=SOME_STRING_VALUE', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


    