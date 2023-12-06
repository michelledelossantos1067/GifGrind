/* eslint-disable no-unused-vars */
export const gefGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=9cgmncAyCy8funYtOEEeF5lvvvFi0eCx&q=valorant${category}&limit=10`
    const resp = await fetch(url);
   const { data } = await resp.json();
    const gifs = data.map(img =>({
        id:img.id,
        title:img.title,
        url:img.images.downsized_medium.url

    }));
    return gifs;
}