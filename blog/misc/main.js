async function loadIntoTable(url, table) {
    // Connect to HTML resources;
    const tableBody = table.querySelector("tbody");
    // Set CORS header to allow for REST API connection on Lambda
    try {
        const response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                //"Access-Control-Request-Method": "GET",
                //"Access-Control-Request-Headers": "Content-Type, Accept",
                //"Access-Control-Allow-Origin": "*"
            }
        });
        try {
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
            // for (item of data) {

            // }
        // Temporarily log data to decide how to parse moving forward
        } catch (error) {
            console.log("Error Reading Data");
        }
    } catch (error) {
        console.log("Error Fetching Data");
    }

}
let table = document.querySelector("table");
loadIntoTable('https://mhnnujmf14.execute-api.us-east-1.amazonaws.com/Prod/getblogs', table)