import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Find from './Find';
function Delete() {
    const [roll, setRoll] = useState();
    const [error, setError] = useState('');
    function del() {
        // useEffect(() => {
        axios
            .delete('http://localhost:8080/deleteStudent?roll=' + roll)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => setError(error.message));
        alert("User Deleted");
    }
    //  []);
    // }
    return (
        <>
            <h2>Delete User</h2>
            <div>
                <input type="number" placeholder='Enter Roll Number' className="form-control1" value={roll} onChange={(e) => setRoll(e.target.value)}>
                </input>
            </div>

            <button type="submit" class="btn btn-primary" onClick
                ={del}>Submit</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/'>
                <button type="submit" class="btn btn-primary"
                >Back</button>
            </Link>
            <h2>
                {error}
            </h2>
            <div className='Find'>
                <Find />
            </div>
        </>
    );
}

export default Delete;