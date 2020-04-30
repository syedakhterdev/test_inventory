import React, { useEffect} from 'react';
import {Link} from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import TableComponent from "../Common/TableComponent";
import config from '../../config/config';

const columns = [
    {id: 'id', label: 'ID'},
    {id: 'name', label: 'Name'},
    {id: 'position', label: 'Position'},
    {id: 'department', label: 'Department'},
    {id: 'status', label: 'Status'},
];

const List = (props) => {
    const users = useSelector( state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`${config.apiUrl}/api/user`)
            .then((res) => {
                if(res.data.success) {
                    dispatch({type: 'LOAD_USERS', users: res.data.users});
                }
            }).catch((err) => {
                console.log('Errorr:::', err);
        })
    }, []);

    const handleEdit = (id) => {
        props.history.push(`/user/${id}/edit`);
    }

    const handleDelete = (id) => {
        const c = confirm('Are you sure you want to delete user?');
        if(c) {
            axios.delete(`${config.apiUrl}/api/user/${id}`).then(res => {
                if(res.status === 200) {
                    dispatch({type: 'DELETE_USER', id});
                }
            })
        }

    }

    const actions = [
        {label: "Edit", className: "fa fa-edit mr-2", handle: handleEdit},
        {label: "Delete", className: "fa fa-trash mr-2", handle: handleDelete}
    ];


    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <Link to="/user/add" className="btn btn-primary float-right mb-3">Add User</Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <TableComponent columns={columns} rows={users} actions={actions} />
                </Col>
            </Row>
        </Container>

    );
}

export default List;

