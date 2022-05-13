async function loadIntoTable(url, table) {
    // Connect to HTML resources
    const tableHead = table.querySelector("thead");
    const tableBody = table.querySelector("tbody");
    // Set CORS header to allow for REST API connection on Lambda
    const response = await fetch(url, {
        method: "GET",
        mode: "cors",
        headers: {
            'Access-Control-Request-Headers': 'Content-Type',
            'Content-Type': 'application/json'
        }
    });
    // Read Data 
    const data = await response.json();
    // Temporarily log data to decide how to parse moving forward
    console.log(data)
    tableHead.innerHTML = "<tr></tr>";
    tableBody.innerHTML = "";

}
let table = document.querySelector("table");
loadIntoTable('https://mhnnujmf14.execute-api.us-east-1.amazonaws.com/Prod/getblogs', table)