function loadData() {
    const csv_data = fetch("./datasets/worldMapData (2).json")
    .then(response => {
    return response.json();
    })
    .then(data => saveData(data));

    function saveData(data) {
        const selects = document.querySelectorAll('select');
        for (const select of selects) {
            setupSelectorsOptions(select, data)
        }
    }

    console.log(data1);
    function setupSelectorsOptions(element,data) {
        for (var x = 0; x < data.values.length; x++ ) {
            single_entry = data.values[x].name;
            console.log(single_entry);
            newElement = document.createElement("option");
            newElement.value = single_entry;
            newElement.text = single_entry;
            element.add(newElement);
        }
    }
}

function selectACountry(element) {
    var value = element.value

}