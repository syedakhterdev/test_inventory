import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import Alert from "../Common/Alert";
import Form from "./Form";
import config from "../../config/config";

const Edit = (props) => {
    const dispatch = useDispatch();
    const [alert, setAlert] = useState(null);
    const userId = props.match.params.id;
    const handleSave = (user) => {
        axios.put(`${config.apiUrl}/api/user/${userId}`, user).then(res => {
            console.log("USer", res);
            dispatch({type: 'EDIT_USER', user: user});
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
                <Form id={userId} alert={alert} history={props.history} handleSave={handleSave}/>
            </div>
        </Container>

    );
}

export default Edit;
