import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers:
  {
    Authorization: "Client-ID a59f916fdf87a5f630697da67c422af3ccbb93b977fe4c6419e2601bb772e660"
  }
})