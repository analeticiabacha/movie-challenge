
export const getMovies = async(url) => {
    const answer = await fetch(url);
    const data = await answer.json();
    console.log(data.results);
    return data.results;
}

export const getMovie = async(url) => {
    const answer = await fetch(url);
    const data = await answer.json();
    return data;
}
