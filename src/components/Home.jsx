import React, { useEffect, useState } from 'react';
import searchICO from '../assets/search.png'
import PrintDishes from '../helpers/PrintCities'
import GetName from '../helpers/GetName'
import styled from 'styled-components'
import Nothing from '../helpers/Nothing'
import { Input } from '../styles/Global';

const DIVsearch = styled.div`
    display: grid;
    gap: 10px;
    margin: 1rem;
`
const DIVInput = styled.div`
    width: 358px;
    height: 44px;
    background: #F2F2F2;
    border-radius: 10px;
    margin: 1rem;
    display:flex;
    align-items: center;
    margin-top: 49px;
    color: black;
`

const Home = () => {
    const [values, setValues] = useState({})

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }
    const { search } = values

    const result = GetName(search)

    console.log(result)

    let printing=""
    if (result.length==0){
        printing= Nothing()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    // useEffect(() => {
    //   GetName()
    
    // }, [])
    

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <DIVInput>
                        <img style={{ marginLeft: "1rem", width: "1rem", marginRight: "10px" }} src={searchICO} alt="" />
                        <Input
                            style={{ border: "none", background: "transparent" }}
                            type="text"
                            placeholder="Search for a dish"
                            autoComplete='search'
                            name='search'
                            onChange={handleInputChange}
                        />
                    </DIVInput>
                </form>
                <div>
                    {/* {printing}
                    <DIVsearch>
                        {
                            result.map(dish => (
                                <PrintDishes key={dish.id} {...dish} />
                            ))
                        }
                    </DIVsearch> */}
                </div>
            </div>
        </div>
    );
};

export default Home;    