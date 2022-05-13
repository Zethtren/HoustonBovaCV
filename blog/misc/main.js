async function loadIntoTable(url, table) {
    const tableHead = table.querySelector("thead");
    const tableBody = table.querySelector("tbody");
    var headers = {}
    const response = await fetch(url, {
        method: "GET",
        mode: "cors",
        headers: headers
    });
    const data = await response.json();
    console.log(data)
    tableHead.innerHTML = "<tr></tr>";
    tableBody.innerHTML = "";

}
let table = document.querySelector("table");
loadIntoTable('https://mhnnujmf14.execute-api.us-east-1.amazonaws.com/Prod/getblogs', table)