let noDisplay = document.getElementById("swapiTable");
noDisplay.style.display = "none";

// can create delay when used need to make a more optimized version of the fetch

function getSelectedValue() {
    let selectedElement = document.getElementById("starWarsSelectForm").value;
    noDisplay.style.display = "flex";

    if (selectedElement == 1) {
        fetchData('https://swapi.dev/api/people/1');
        showPicture("images/swapi/swapiLukeSkywalker.png");
    } else if (selectedElement == 2) {
        fetchData('https://swapi.dev/api/people/4');
        showPicture("images/swapi/swapiDarthVader.jpeg");
    } else if (selectedElement == 3) {
        fetchData('https://swapi.dev/api/people/20');
        showPicture("images/swapi/swapiYoda.png");
    } else if (selectedElement == 4) {
        fetchData('https://swapi.dev/api/people/10');
        showPicture("images/swapi/swapiObiVanKenobi.png");
    } else if (selectedElement == 5) {
        fetchData('https://swapi.dev/api/people/21');
        showPicture("images/swapi/swapiSheevPalpatine.png")
    }
    
}

function fetchData(url) {
    fetch(url)
        .then(function (response) {
            return response.json();
            })
        .then(function (data) {
            displayData(data);
            })
        .catch(function (err) {
            console.log('error: ' + err);
            });
}
            
function displayData(data) {
    let name = document.getElementById("swapiName");
    let height = document.getElementById("swapiHeight");
    let hairColor = document.getElementById("swapiHairColor");
    let skinColor = document.getElementById("swapiSkinColor");
    let eyeColor = document.getElementById("swapiEyeColor");
    let birthYear = document.getElementById("swapiBirthYear");
    let gender = document.getElementById("swapiGender");
    
    name.innerHTML = data.name;
    height.innerHTML = data.height;
    hairColor.innerHTML = data.hair_color;
    skinColor.innerHTML = data.skin_color;
    eyeColor.innerHTML = data.eye_color;
    birthYear.innerHTML = data.birth_year;
    gender.innerHTML = data.gender;
}

function showPicture(source) {
    let img = document.getElementById("swapiPicture");
    img.src = source;
    img.style.display = "block";
    img.style.width = "100%";
    
    
}
