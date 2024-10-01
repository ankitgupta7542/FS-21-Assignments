let key = "nOSsayOHqkC7U1xcLas77Y39uAmmRS4Cuf5z_FXFyYQ"; 
let box = document.querySelector(".box");
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${key}&count=30`;

function updateUI(data) {
    console.log("Updating UI with new images...");
    data.forEach(photo => {
        let img = document.createElement("img");
        img.src = photo.urls.small;
        img.style.height = "300px";
        img.style.width = "250px";
        box.appendChild(img);
    });
}

async function fetchData() {
    console.log("Fetching data from API...");
    let response = await fetch(apiUrl);
    if (response.ok) {
        let data = await response.json();
        console.log("Data fetched:", data);
        updateUI(data);
    } else {
        console.error("Error fetching data:", response.statusText);
    }
}

fetchData();

window.addEventListener("scroll", function() {
    console.log("Scroll event detected...");
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
        console.log("Bottom of the page reached, fetching more data...");
        fetchData();
    }
});
