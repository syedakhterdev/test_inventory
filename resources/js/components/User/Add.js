import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import Alert from "../Common/Alert";
import Form from "./Form";
import config from "../../config/config";

const Add = (props) => {
    const dispatch = useDispatch();
    const [alert, setAlert] = useState(null);

    const handleSave = (user) => {
        axios.post(`${config.apiUrl}/api/user`, user).then(res => {
            dispatch({type: 'ADD_USER', user: res.data});
            props.history.push('/');
        }).catch(err => {
            if(err.response.status === 422) {
                setAlert({
                    className: 'alert-danger',
                    messages: err.response.data
                })
            }
        })
    }
    return (
        <Container>
            <div className="card card-outline-secondary mt-5">
                <div className="card-header">
                    <h3 className="mb-0">User Information</h3>
                </div>
                <Form alert={alert} history={props.history} handleSave={handleSave}/>
            </div>
        </Container>

    );
}

export default Add;
