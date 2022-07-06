import axios from 'axios'

export const GetData = async (cityId) => {
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityId}&appid=a292e38e0deefc906a8fd9b7d4e90d74&units=metric
    `);

    return data.list;
}