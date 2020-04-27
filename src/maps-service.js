export class MapApi {
  async getBuisnesses() {
    try {
      let response = await fetch(``);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

}
