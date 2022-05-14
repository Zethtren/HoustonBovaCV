async function buildTable(tableBody, response) {
    const data = await response.json();

    for (item of data) {
        const rowElement = document.createElement("tr");
        const cellTitle = document.createElement("td");
        cellTitle.textContent = item['title'];
        rowElement.appendChild(cellTitle);
        const cellDate = document.createElement("td");
        cellDate.textContent = item['date'];
        rowElement.appendChild(cellDate);
        const cellPost = document.createElement("td");
        cellPost.textContent = item['post'];
        rowElement.appendChild(cellPost);

        tableBody.appendChild(rowElement);
    }
}

async function loadIntoTable(url, table) {
    // Connect to HTML resources;
    const tableBody = table.querySelector("tbody");
    // Replace previous table data to prevent duplication and stacking.
    tableBody.innerHTML = "";
    // Set CORS header to allow for REST API connection on Lambda
    // NOTE: CORS must be set on REST API as well
    try {
        const response = await fetch(url, {
            method: 'GET',
            mode: 'cors'
        });
        try {
            buildTable(tableBody, response)
        } catch (error) {
            console.log("Error Reading Data");
        }
    } catch (error) {
        console.log("Error Fetching Data");
    }

}
// Grab Search Button Form
const form = document.forms[0];

// Add Listener (This will execute whenever the search button is pressed)
form.addEventListener("submit", function(event){
    // Prevent default behaviour. (TODO: Figure out why this is needed)
    event.preventDefault();
    // Create FormData from the event
    const formData = new FormData(this);

    // Generate a new query string (If done outside the variables will stack
    // after multiple uses).
    let query_string = "?search=";
    // There is probably a more elegant solution for this but this is what I was
    // able to find from StackOverflow
    for (const formElement of formData) {
        if (formElement[0] === "search") {
            // Encode Form Data so it is excepted by HTTP
            query_string += encodeURIComponent(formElement[1].trim());
        }
    };
    // Grab the Table, Build the Query and Load data into new Table
    let table = document.querySelector("table");
    let url = 'https://mhnnujmf14.execute-api.us-east-1.amazonaws.com/Prod/getblogs' + query_string;
    loadIntoTable(url, table)
})
// This will execute on the first read through and grab a pre-defined number of
// entries from the API. This will not run again so any following refreshes
// must be done using the Search tool or page refresh
let table = document.querySelector("table");
let url = 'https://mhnnujmf14.execute-api.us-east-1.amazonaws.com/Prod/getblogs';
loadIntoTable(url, table)