let url = "https://zomatoajulypi.herokuapp.com/location"
let rurl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId="

function getCity() {
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    for(i=0;i<data.length;i++){
      let element=document.createElement(`option`)//create <option></option>
      let text=document.createTextNode(data[i].state)//create state-"Delhi"
      element.appendChild(text)//create "<option>Delhi</option>"
      let val=document.createTextNode(data[i].state_id)//create"value=1"
      element.value=(val)//create"<option value=1>Delhi</option>"
      document.getElementById('city').appendChild(element)//create "<select><option value=1>Delhi</option></select>""
    }
  })
}

const getHotels = () => {
  let cityId = document.getElementById('city').value;
  let restaurants = document.getElementById('restaurants')
  
  fetch(`${rurl}${cityId}`)
  .then((res) => res.json())
  .then((data) => {
     for(i=0;i<data.length;i++) {
         let element = document.createElement('option')
         let text = document.createTextNode(`${data[i].restaurant_name} | ${data[i].address}`)
         element.appendChild(text)
         restaurants.appendChild(element)
     }
  })
}



