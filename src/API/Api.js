import { APIKey, APIUrl } from "./Config/key";

export const getMovies = async(url) => {
    const answer = await fetch(url);
    const data = await answer.json();
    console.log(data.results);
    return data.results;
}
