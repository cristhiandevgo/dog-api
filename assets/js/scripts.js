const imageUrl = "https://random.dog/woof.json";

let btn = document.querySelector(".btn");
let imageDiv = document.querySelector(".random-image");

let generateDogImage = () => {
    btn.innerHTML = "Ver outro Doguinho";

    fetch(imageUrl)
        .then(result => result.json())
        .then(result => {
            imageDiv.innerHTML = `<img src="${result.url}" class="rotate-scale-up"/>`;
        });
}
btn.addEventListener("click", generateDogImage);