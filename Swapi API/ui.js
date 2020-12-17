class UI {
  constructor() {
    this.profile = document.getElementById("tbody");
  }

  showProfile(data) {
    var i ;
    
    for (i = 0; i < data.results.length; i++) {
     
      var mass = parseInt(data.results[i].mass);
      var height_mtr = parseInt(data.results[i].height)/100;
      var bmi = mass / Math.pow(height_mtr , 2);

    this.profile.innerHTML += 
         `
         <tr>
            <th scope="row">${data.results[i].name}</th>
            <td>${data.results[i].height}</td>
            <td>${data.results[i].mass}</td>
            <td>${bmi.toFixed(2)}</td>
            <td>${data.results[i].gender}</td>
            <td>${data.results[i].films.length}</td>
            <td>${data.results[i].vehicles.length}</td>
            <td>${data.results[i].starships.length}</td>
          </tr>
      
  `;
  }
}
}
