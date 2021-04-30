const csv_data = fetch("./datasets/worldMapData (2).json")
.then(response => {
   return response.json();
})
.then(data => console.log(data));

function setupSelectorsOptions(element) {
    console.log(csv_data)
    for (x = 0; x < csv_data.values.length; x++ ) {
        single_entry = csv_data.values[x].name;
        console.log(single_entry)
        newElement = document.createElement("option")
        newElement.value = single_entry
        newElement.innerHTML = single_entry
        element.appendChild(newElement)
    }
    /*
        TODO do code to read csv and add countries to dropdown list
        first scan page for <select> tag
        second read csv
        third add options to list
    */
}

function selectACountry(id) {
    return id.value
}