console.log("--- Page 1 ---");

// Opdracht 1a 
//objcts maken
const weatherData = [
    { location: "Den Haag", temp: 15 },
    { location: "Rotterdam", temp: 18 },
    { location: "Eindhoven", temp: 17 },
    { location: "Amsterdam", temp: 16 }]; `
    `
// Opdracht 1b 
//roep de createTable function
createTable(weatherData);


/**
 * @param {[]} array
 */
function createTable(array) {
    const table = document.querySelector(".custom-tbl");
    let rows = `
        <tr class="custom-th">
            <th>Locatie</th>
            <th>Temperatuur</th>
        </tr>
    `;
    array.forEach((obj) => {
        rows += `
        <tr class="custom-tr">
            <td>${obj.location}</td>
            <td>${obj.temp}</td>
        </tr>
        `;
    });
    table.innerHTML += rows;
}

/**  
 * @param {Object} obj object met hoogste temperatuur
 */
function showHighestTemperature(obj) {
    const weatherBox = `
        <div class='box'>
            <div class='wave -one'></div>
            <div class='wave -two'></div>
            <div class='wave -three'></div>

            <div class="weathercon"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128"
                    fill="lighten(grey, 10%)" class="bi bi-cloud" viewBox="0 0 16 16">
                    <path
                        d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                </svg></div>
            <div class="info">
                <h2 class="location">${obj.location}</h2>
                <p class="date">WENSDAY | JAN 10</p>
                <h1 class="temp">${obj.temp} &deg;</h1>
            </div>
        </div>
    `;


    const temp = document.querySelector(".temp");
    temp.innerHTML += weatherBox;

}

// Opdracht 1c 
let highestTempCity = weatherData[0];
for (const city of weatherData) {
    if (city.temp > highestTempCity.temp) 
    { highestTempCity = city; }
}
//roep showHighestTemperature function
showHighestTemperature(highestTempCity);


