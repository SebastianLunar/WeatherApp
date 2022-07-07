import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../styles/Global';
import styled from 'styled-components';
import Navbar from '../containers/Navbar';
import { Card } from 'react-bootstrap';
import { addAsync, deleteAsync, listAsync } from '../redux/actions/badgesActions';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import useForm from '../hooks/useForm';
import Footer from '../containers/Footer';

const CARDS = styled.div`
    display: flex; align-items: center; justify-content: center; flex-wrap: wrap;
    gap: 1.5rem;
`
const TITLE = styled.h2`
    font-weight: 500;
    font-size: 32px;
    line-height: 18px;
    margin-top: 53px;
    margin-bottom: 22px;
    text-align: center;
`

const Profile = () => {
    const dispatch = useDispatch()
    const { lista } = useSelector(store => store.badgesStore)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [value, handleChange] = useForm({
        id: crypto.randomUUID(),
        name: '',
        description: '',
        image: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addAsync(value))
        handleClose()

    }

    const handleDelete = ({target}) => {
        dispatch(deleteAsync(target.id))
    }

    useEffect(() => {
        dispatch(listAsync())
    }, [dispatch])


    return (
        <div>
            <Navbar />
            <TITLE>Your Badges</TITLE>
            <CARDS>
                {
                    lista.map(i => (
                        <div key={i.id}>
                            <Card style={{ width: '18rem', textAlign: "center" }}>
                                <Card.Img style={{ width: "6rem", margin: "0 auto" }} variant="top" src={i.image} />
                                <Card.Body>
                                    <Card.Title>{i.name}</Card.Title>
                                    <Card.Text>
                                        {i.description}
                                    </Card.Text>
                                    <Link style={{ textDecoration: "none" }} to={`/badge/${i.id}`}><Button variant="info">Details</Button></Link>
                                    <Button id={i.id} variant="danger" type="button" onClick={handleDelete}>Delete</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                }
            </CARDS>
            <Button variant="success" onClick={handleShow} className="d-flex mx-auto mt-3">Add new badge</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create new badge</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="" onSubmit={handleSubmit}>
                        <Input type="text" placeholder='Name' name="name" onChange={handleChange} value={value.name} />
                        <Input type="text" placeholder='Description' name="description" onChange={handleChange} value={value.description} />
                        <Input type="text" placeholder='Image URL' name="image" onChange={handleChange} value={value.image} />
                        <Button type="submit">Add</Button>
                    </form>

                </Modal.Body>
            </Modal>
            <Footer />
        </div >
    );
};

export default Profile;