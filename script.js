document.body.style.backgroundColor='#f2e4bf'
var response,data;
    const api = `https://restcountries.eu/rest/v2/all`;
   
    fetch(api)
       .then(response => {
        return response.json();
    })
    .then(data => {
    data.forEach(element => {
        let cardClass = addTags('div','card col-md-3 col-sm-12 m-3');
        cardClass.style.backgroundColor = '#f2e7e1';
        let cardHead = addTags('h5','card-header text-center');
        cardHead.innerHTML = (element.name).toUpperCase();
        let img = addTags('img','card-image-top');
        img.setAttribute('src',element.flag);
        img.style.height='180px';
        img.style.width='100%'
        let cardBody = addTags('div','card-body');
        let capital = addTags('p','card-text');
        capital.innerHTML = `Capital : ${element.capital}`;
        let region = addTags('p','card-text');
        region.innerHTML = `Region : ${element.region}`;
        let countryCode = addTags('p','card-text');
        countryCode.innerHTML = `CountryCode : ${element.alpha3Code}`
        let buttonLink = addTags('button','btn btn-danger ml-4');
        buttonLink.innerHTML = 'Click for Weather';
        buttonLink.setAttribute('type','button');
        buttonLink.addEventListener('click', function(){
 
               
                        lon = element.latlng[1];
                        lat = element.latlng[0];
                     
                        
                        const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=cc65430b435551566fca249e00acbc00`;
               
                        fetch(api)
                           .then(response => {
                            return response.json();
                        })
                        .then(data => {
                           
                            let v = Number(data['main'].temp)-273.1;
                            let u = Math.ceil(v);
                            buttonLink.innerHTML = u +' \u00B0C';
                        });
                    });
   
    
     
            console.log(data);


cardBody.append(capital,region,countryCode,buttonLink);
cardClass.append(cardHead,img,cardBody);
row.append(cardClass);
container.append(row);
document.body.append(container);
    });
});

function addTags (elem,elclass='')
    {
        let element = document.createElement(elem);
        element.setAttribute('class', elclass);
    
        return element;
    }

let container = addTags('div','container mt-3');
container.style.margin = '0px auto';
let row = addTags('div','row');
let col1 = addTags('div','col-4');    
let col2 = addTags('div','col-4');
let col3 = addTags('div','col-4');    

