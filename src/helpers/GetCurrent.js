import axios from 'axios'

export const GetCurrent = async (name) => {
    const {data} = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=a292e38e0deefc906a8fd9b7d4e90d74&units=metric`);

    return data;
}