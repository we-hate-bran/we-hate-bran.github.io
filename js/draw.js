const URL_API = "https://thronesapi.com/api/v2";

const loadCharacters = () => fetch(URL_API+'/Characters').then(response => response.json());

function openTab(evt, tab) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
}

const buildCard = ({fullName, title, imageUrl, family}) => {
    console.log(fullName, title, imageUrl);
    return `
    <div class="column">
        <div class="card">
            <img src='${imageUrl}' alt="Avatar" width="200px" height="200px">
            <div class="container">
                <h4><b>${fullName}</b></h4>
                <p>${title}</p>
                <p>${family}</p>
            </div>
        </div>
    </div>
  `;
};

const drawCharacters = (data) => {
    let tabPersonaje = document.getElementById('tapPersonas');
    if(data?.length > 0){
        let allCharacters = '';
        data.map((element) =>{
            console.log(element);
            allCharacters+=buildCard(element);
        });
        tabPersonaje.innerHTML = allCharacters;
    }
};


loadCharacters().then(data => drawCharacters(data) );