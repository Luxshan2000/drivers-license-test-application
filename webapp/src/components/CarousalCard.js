import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function CarousalCard({ icon, description }) {
    return (
        <div class="card" style={{ width: '40%',margin : 50 ,boxShadow : 3}}>
            <div>
            <i class={icon} style={{ fontSize: 50 ,color:"#3B474F" }}></i>
            </div>
            <div class="card-body">
                <p class="card-text">
                    {description}    
                </p>
            </div>
        </div>
    )
}