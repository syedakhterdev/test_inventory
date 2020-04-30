import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Alert from "../Common/Alert";
import config from "../../config/config";

const Form = (props) => {
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        name: '',
        position: '',
        department: '',
        active: '1'
    });
    useEffect(() => {
       if(props.id) {
           axios.get(`${config.apiUrl}/api/user/${props.id}`).then(res => {
               if(res.status === 200) {
                   const u = res.data.user;
                   setUser({
                       name: u.name,
                       position: u.position,
                       department: u.department,
                       active: u.active
                   });
               }
           })
       }
    }, []);

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.currentTarget.value})
    }
    const handleCancel = () => {
        props.history.push('/');
    }
    const handleSave = () => {
        props.handleSave(user);
    }
    return (
        <div className="card-body">
            <Alert alert={props.alert}/>
            <form className="form" role="form" autoComplete="off">
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">Name</label>
                    <div className="col-lg-9">
                        <input className="form-control" type="text" name="name" value={user.name} onChange={handleChange} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">Position</label>
                    <div className="col-lg-9">
                        <input className="form-control" type="text" name="position"
                               value={user.position} onChange={handleChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">Department</label>
                    <div className="col-lg-9">
                        <input className="form-control" type="text" name="department"
                               value={user.department} onChange={handleChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">Status</label>
                    <div className="form-group small ml-3">
                        <div className="form-check form-check-inline">
                            <label className="form-check-label">
                                <input className="form-check-input" checked={user.active == '1'} type="radio" name="active"
                                       id="inlineRadio1" value="1" onChange={handleChange} /> Active
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <label className="form-check-label">
                                <input className="form-check-input" checked={user.active == '0'} type="radio" name="active"
                                       id="inlineRadio2" value="0" onChange={handleChange} /> In-Active
                            </label>
                        </div>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label"></label>
                    <div className="col-lg-9">
                        <input type="reset" onClick={handleCancel} className="btn btn-secondary mr-3" value="Cancel" />

                        <input type="button" onClick={handleSave} className="btn btn-primary" value="Save Changes" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form;
