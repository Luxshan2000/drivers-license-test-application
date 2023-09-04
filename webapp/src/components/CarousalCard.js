import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Card from 'react-bootstrap/Card';

export default function CarousalCard({ icon, description, title }) {
    return (
        
            <Card style={{margin:50}}>
                <Card.Body>
                    <Card.Title style={{textAlign:'center'}}>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        <div style={{ padding: '20px',display:'flex',justifyContent:'center',alignItems:'center' }}>
                            <i class={icon} style={{ fontSize: 50, color: "#3B474F" }}></i>
                        </div>
                    </Card.Subtitle>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
           
    )
}