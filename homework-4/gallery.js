const Gallery = [
    "https://fastly.picsum.photos/id/804/300/400.jpg?hmac=Y6cx9oentnw75-Q7gYdlaJBBAnSAlUHRYXbvFMIrZNI",
    "https://fastly.picsum.photos/id/185/300/400.jpg?hmac=7jvc9SGhArOCJhgLoOfYSTezJsc1xrIXhDOXkiZSrbs",
    "https://fastly.picsum.photos/id/229/300/400.jpg?hmac=CZOWn8sQ8oa9EfbMZw5tYqPMNKK0mNOYUsEgz81K8io",
    "https://fastly.picsum.photos/id/211/300/400.jpg?hmac=l0zi1AkBxaPoAMnWav0iWH8TsWfblHXdm_IGSNDMFWQ",

];

const photoGallerySectionRef = document.getElementById("photo-gallery");

for (let i = 0; i < Gallery.length; i++){
    console.log("For Loop:", Gallery[i]);
   photoGallerySectionRef.innerHTML += "<li>" + Gallery[i] + "</li>";

const photoThumbnail = document.createElement("img");

photoThumbnail.src = Gallery[i]; 

photoThumbnail.alt = "img" + (i); 

photoThumbnail.height = 300; 

photoGallerySectionRef.appendChild(photoThumbnail);
}