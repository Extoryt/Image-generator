const collection1 = ["photos/dog.jpg", "photos/dog2.jpg"];
const collection2 = ["photos/dog3.jpg", "photos/dog4.jpg"];
const collection3 = ["photos/dog5.jpg", "photos/dog6.jpg"];

function changeImages() {
	document.querySelector("#image1").src = collection1[Math.floor(Math.random() * collection1.length)];
	document.querySelector("#image2").src = collection2[Math.floor(Math.random() * collection2.length)];
	document.querySelector("#image3").src = collection3[Math.floor(Math.random() * collection3.length)];
}
