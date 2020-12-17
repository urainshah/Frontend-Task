class Swapi {
 
  async getUser() {
    const profileResponse = await fetch(
      `https://swapi.dev/api/people/`
      
    );
    const profile = await profileResponse.json();
    console.log(profile)
    return {
      profile
    };
  }
}