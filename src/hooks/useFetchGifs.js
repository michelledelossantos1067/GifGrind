import { useEffect, useState } from "react";
import { gefGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setLoading] = useState([]);

    const getImages = async () => {
        const newImages = await gefGifs(category);
        setImages(newImages);
    setLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading,
    }
}
