import axios from "axios";

const baseUrl =
  "https://api.giphy.com/v1/gifs/search?api_key=1V5TYrPWrAluyq1NX07FuqwCMwejzHZK&limit=25&offset=0&rating=g&lang=en";

class GiphyService {
  searchGiphy(value) {
    return axios.get(`${baseUrl}&q=${value}`);
  }
}

export default new GiphyService();
