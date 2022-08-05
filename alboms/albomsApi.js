function showAlbom(albomId,artistName){
console.log(albomId, artistName);

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fb896adc91mshc9c4a546e6d250dp112778jsn2c0f8f724fbd',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};
const button = document.getElementById(artistName)
button.innerHTML += '<i class="fa fa-refresh fa-spin"></i>'
fetch(`https://spotify23.p.rapidapi.com/album_tracks/?id=${albomId}&offset=0&limit=300`, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		button.innerHTML = artistName	
		
	})
	.catch(err => {
		console.log(err)
		button.innerHTML = artistName
	});
}