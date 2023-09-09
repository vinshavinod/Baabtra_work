const contentContainer = document.getElementById("content-container");
const loadMoreButton = document.getElementById("load-more-button");

let page = 1; // Initial page number
const perPage = 5; // Number of items to load per page
let isLoading = false;

function fetchMoreContent() {
    if (isLoading) {
        return;
    }

    isLoading = true;

    // Simulate an API call (replace with your actual API endpoint)
    setTimeout(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${perPage}`)
            .then((response) => response.json())
            .then((data) => {
                isLoading = false;

                if (data.length === 0) {
                    loadMoreButton.disabled = true;
                    loadMoreButton.textContent = "No more items";
                    return;
                }

                data.forEach((item) => {
                    const itemElement = document.createElement("div");
                    itemElement.classList.add("content-item");
                    itemElement.textContent = item.title;
                    contentContainer.appendChild(itemElement);
                });

                page++;
            })
            .catch((error) => {
                isLoading = false;
                console.error("Error fetching data:", error);
            });
    }, 1000); // Simulated delay for loading data
}

loadMoreButton.addEventListener("click", fetchMoreContent);

// Initial load
fetchMoreContent();
