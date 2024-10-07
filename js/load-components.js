// Loads the header and footer boilerplate codes for the webpages

function loadHTML(selector, file) {
    fetch(file)
    .then(response => {
        if (response.ok) {
            return response.text();
        }
        throw new Error(`Error loading file: ${file}`)
    })
    .then(data => {
        document.querySelector(selector).innerHTML = data;
    })
    .catch(error => {
        console.error(error);
    })
}

// Load the header and footer
document.addEventListener("DOMContentLoaded", function() {
    loadHTML("#header", "../components/header.html");
    loadHTML("#header-landing", "../components/header-landing.html");
    loadHTML("#footer", "../components/footer.html");
});