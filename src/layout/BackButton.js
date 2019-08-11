import React from 'react';
import { Link } from "react-router-dom";

export default function BackButton() {
    return (
        <div className="col-md-2 float-left"> 
            <Link 
                to="/" 
                className="btn btn-link color" 
                style={{textDecoration: 'none', backgroundColor: '#f5f5f5'}}
            >
                <i className="fas fa-arrow-circle-left" /> Back To Bull Menu
            </Link>
        </div>
    )
}
