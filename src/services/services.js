import axios from "axios";
const keyApi = `7dbf79a7ec9fee0ed11175b6a2c600f3`;

export default {
  async getData() {
    try {
      const data = await axios
        .get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${keyApi}`
        )
        .then(data => data.data.results);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
};
