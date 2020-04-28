export class MapApi {
  async getBuisnesses() {
    try {
      let response = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=45.523064,-122.676483&radius=40233&key=${process.env.API_KEY}`);
      let jsonifiedResponse;
      let openResults = [];
      let closedResults = [];
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
        //console.log(jsonifiedResponse);
        jsonifiedResponse.results.forEach(result => {
          if (result.business_status === "OPERATIONAL" && result.opening_hours) {
            openResults.push(result)
          } else {
            closedResults.push(result);
          }
        });

      } else {
        jsonifiedResponse = false;
      }

      return jsonifiedResponse ? openResults : "error";
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async nextPage(token) {
    try {
      let url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=45.523064,-122.676483&radius=40233&type=pharmacy&pagetoken=${token}&key=${process.env.API_KEY}`
      console.log(token);
      let response = await fetch(url);
      let jsonifiedResponse;
      let arr = [];
      console.log(response);

      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json()
        jsonifiedResponse.results.forEach(result => {
          if (result.business_status === "OPERATIONAL" && result.opening_hours) {
            console.log(result);
            arr.push(result)
          }
        });
      } else {
        jsonifiedResponse = false;
      }
      return arr;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}


// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
//const apiKey = '<YOUR_API_KEY>';
// const searchRequest = {
//   open_now: true
// };

// const client = yelp.client(process.env.API_KEY);

// client.search(searchRequest).then(response => {
//   const firstResult = response.jsonBody.businesses[0];
//   const prettyJson = JSON.stringify(firstResult, null, 4);
//   console.log(prettyJson);
// }).catch(e => {
//   console.log(e);
// });
