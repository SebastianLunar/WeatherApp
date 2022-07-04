import axios from 'axios'

export const GetData = async () => {
    const { data } = await axios.get("https://citiesandids.herokuapp.com/cities/");
    return data;
}