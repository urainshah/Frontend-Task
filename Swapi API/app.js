const swapi = new Swapi();
const ui = new UI();
 
  swapi.getUser().then((data) => {
          ui.showProfile(data.profile);
        }
      );
    


