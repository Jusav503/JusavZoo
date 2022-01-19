import axios from "axios"

export const getAnimals = async () => {
    try {
        const r = await axios.get("https://zoo-animal-api.herokuapp.com/animals/rand/10");
        return r.data;
    } catch (e) {
        console.log(e)
    }
}