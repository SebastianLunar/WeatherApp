import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editAsync, listAsync } from '../redux/actions/badgesActions';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import background from '../assets/back2.jpg'
import Navbar from '../containers/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useForm from '../hooks/useForm';
import { Input } from '../styles/Global';
import Footer from '../containers/Footer';

const BACK = styled.div`
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    position: absolute;
    z-index: 0;
`
const CONTENT = styled.div`
    text-align: center;
    position: absolute;
    left: 0; right: 0;
    width: 40%;
    z-index: 1;
    height: 100%;
    background-color: rgb(255 255 255 / 60%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Badge = () => {
    const dispatch = useDispatch()
    const { id } = useParams()

    const { lista } = useSelector(store => store.badgesStore)
    const selected = lista.filter(e => e.id === parseInt(id, 10))
    const element = selected[0]
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [value, handleChange] = useForm({
        id: element.id,
        name: element.name,
        description: element.description,
        image: element.image
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(editAsync(value))
    }

    useEffect(() => {
        dispatch(listAsync())
    }, [dispatch])

    return (
        <>
            <Navbar />
            <BACK></BACK>
            <CONTENT>
                <Card style={{ width: '18rem', textAlign: "center" }}>
                    <Card.Img style={{ width: "6rem", margin: "0 auto" }} variant="top" src={element.image} />
                    <Card.Body>
                        <Card.Title>{element.name}</Card.Title>
                        <Card.Text>
                            {element.description}
                        </Card.Text>
                        <Button id={element.id} variant="warning" type="button" onClick={handleShow}>Edit</Button>
                    </Card.Body>
                </Card>
            </CONTENT>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create new badge</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Card style={{ width: '18rem', textAlign: "center" }}>
                        <Card.Img style={{ width: "6rem", margin: "0 auto" }} variant="top" src={element.image} />
                        <Card.Body>
                            <Card.Title>{element.name}</Card.Title>
                            <Card.Text>
                                {element.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <form style={{display: "flex", flexDirection: "column", alignItems: "center"}} action="" onSubmit={handleSubmit}>
                        <Input type="text" placeholder={element.name} name="name" onChange={handleChange}/>
                        <Input type="text" placeholder={element.description} name="description" onChange={handleChange}  />
                        <Input type="text" placeholder={element.image} name="image" onChange={handleChange}  />
                        <Button id={element.id} type="submit" onClick={handleSubmit}>Save Changes</Button>
                    </form>
                </Modal.Body>
            </Modal>
            <Footer />
        </>
    );
};

export default Badge;