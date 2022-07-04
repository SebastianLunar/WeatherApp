import { useState } from 'react';
import { GetData } from './GetData';

const GetName = (name="") => {
    const [data, setData] = useState([])
    
    const getting = async ()=>{
        setData(await GetData())
    }
    getting()

    name = name.toLocaleLowerCase()
    if (name!==""){
        return data.filter(dato => dato.name.toLocaleLowerCase().includes(name))
    } else {
        return []
    }
};

export default GetName;