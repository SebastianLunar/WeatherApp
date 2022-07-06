import React, { useState } from 'react';
import searchICO from '../assets/search.png'
import { GetCurrent } from '../helpers/GetCurrent';
import styled from 'styled-components'
import { Input } from '../styles/Global';
import { GetData } from '../helpers/GetData';
import Navbar from '../containers/Navbar';

const HEADER = styled.div`
    position: relative;
    width: 100%;
    height: 45px;
    background-color: #eee;
    border: 1px solid transparent;
`
const Searchform = styled.form`
    position: relative;
    width: 46%;
    height: 100%;
    margin: 0 auto;
    white-space: nowrap;
`
const Searchwrapper = styled.div`
    width: 100%;
    line-height: 40px;
    padding: 0 20px;
    background-color: rgba(238,238,238,.35);
    overflow: hidden;
`
const DIVsearch = styled.div`
    position: relative;
    text-align: center;
    left: -10px;
    white-space: nowrap;
    font-size: 14px;
    margin: 0 auto;
    max-width: 750px;
    display: flex; justify-content: center;
    align-items: center;
`

const CARD = styled.div`
    display: flex;
    text-align: center;
    margin: 0 10px;
    align-items: center;
`
const Saved = styled.div`
    width: 358px;
`
const Tag = styled.h6`
    font-size: 14px; font-weight: 500; margin: 0;
`
const Value = styled.h6`
    font-size: 14px; font-weight: 300; margin: 0;
`
const Mainvalue = styled.h6`
    font-size: 32px; font-weight: 500; margin: 0;
`

const Home = () => {
    const [values, setValues] = useState({})
    // const [result, setResult] = useState([])
    // const [current, setCurrent] = useState([])
    const [WIND1, setWIND] = useState("")
    const [WEATHER1, setWEATHER] = useState("")
    const [maindata1, setmaindata] = useState("")
    const [visibilidad1, setvisibilidad] = useState("")

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }
    const { search } = values


    const busquedas = JSON.parse(localStorage.getItem("busquedas"))
    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await GetData(search)
        const current = await GetCurrent(search)

        const WIND = current.wind
        const WEATHER = current.weather[0]
        const maindata = current.main
        const visibilidad = current.visibility / 1000


        console.log(WIND, maindata, visibilidad)

        setWEATHER(WEATHER)
        setWIND(WIND)
        setmaindata(maindata)
        setvisibilidad(visibilidad)

        let busqueda = {
            name: current.name
        }
        console.log(busqueda)
        if (busquedas == null) {
            let busquedas = [];
            busquedas.push(busqueda)
            localStorage.setItem("busquedas", JSON.stringify(busquedas));
        } else {
            busquedas.push(busqueda)
            localStorage.setItem("busquedas", JSON.stringify(busquedas));
        }
    }

    return (

        <div>
            <Navbar />
            <HEADER>
                <Searchform onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        placeholder="Enter a city name"
                        autoComplete='search'
                        name='search'
                        onChange={handleInputChange}
                    />
                    <img style={{ marginLeft: "1rem", width: "1rem", marginRight: "10px" }} src={searchICO} alt="" />
                    <Saved></Saved>
                </Searchform>
            </HEADER>
            <Searchwrapper>
                <DIVsearch>
                    <CARD>
                        <Tag>Wind</Tag><Value>: {WIND1.speed}m/s </Value>
                        <span style={{ display: "inline-block", transform: `rotate(${WIND1.deg}deg)` }}>↑</span>
                    </CARD>
                    <CARD>
                        <Tag>Humidity</Tag><Value>: {maindata1.humidity}%</Value>
                    </CARD>
                    <CARD>
                        <Tag>Visibility</Tag><Value>: {visibilidad1} km</Value>
                    </CARD>
                    <CARD>
                        <Tag>Pressure</Tag><Value>: {maindata1.pressure} hPa</Value>
                    </CARD>
                </DIVsearch>
            </Searchwrapper>
            <div className='d-flex justify-content-center align-items-center'>
                <img src={`http://openweathermap.org/img/wn/${WEATHER1.icon}@2x.png`} alt="" />
                <div>
                    <Mainvalue>{maindata1.temp}° {WEATHER1.description}.</Mainvalue>
                    <Value>Feels Like: {maindata1.feels_like} Low: {maindata1.temp_min}° High: {maindata1.temp_max}°</Value>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Home;    