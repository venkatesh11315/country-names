let inputvalue = document.querySelector('.inputvalue');
let button = document.querySelector('.btn');

let result = document.querySelector('.result');


async function getcountry(countryname) {

    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryname}?fullText=true`);
        const data = await response.json();
        console.log(data)
        console.log(data[0].name.common)
        console.log(data[0].flags.svg)
        console.log(data[0].population)
        console.log(data[0].capital)
        console.log(Object.keys(data[0].currencies)[0]);
        console.log(Object.values(data[0].languages).toString().split(",").join(","));
        console.log(data[0].maps.googleMaps)
        console.log(data[0].maps.openStreetMaps)




result.innerHTML = `  <div class="card text-dark bg-light "  style="width: 18rem;  ">
<img src="${data[0].flags.svg}" class="card-img-top" alt="...">
<div class="card-body">
<h1 class="card-title">${data[0].name.common}</h1>

</div>
<ul class="list-group list-group-flush">
<li class="list-group-item"> capital :${data[0].capital}</li>
<li class="list-group-item"> currencies :${Object.keys(data[0].currencies)[0]}</li>
<li class="list-group-item"> languages :${Object.values(data[0].languages).toString().split(",").join(",")}</li>
<li class="list-group-item"> population :${data[0].population}</li>

</ul>
<div class="card-body">
<a href="${data[0].maps.googleMaps}" target="_blank" class="btn btn-primary" >Maps</a>
<a href="${data[0].maps.openStreetMaps}"  target="_blank" class="btn btn-primary">Street map</a>
</div>
</div>`
    } catch (error) {
        console.error(" fetching error")
    }


}

function handleSubmit(event) {
    event.preventDefault();
    let countryname = inputvalue.value;
    getcountry(countryname);

}

inputvalue.addEventListener('submit', handleSubmit);
button.addEventListener('click', handleSubmit);