import React from 'react'
import Button from 'react-bootstrap/Button';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const ProductCard = ({item}) => {
    const navigate = useNavigate();
    const showDetail = () => {
        navigate(`/product/${item.id}`);
    };

  return (
    <div className="card">
         <div class="card-body">
            <img width={350} src={item? item.img : null} alt='Item Img'/>
            <div>{item? item.title : null} | ${item? item.price : null}</div>
            <div className="card-icon-container">
                <Button variant="outline-secondary" onClick={showDetail}>🔍</Button>
                <Button className="btn-primary">Select</Button>
            </div>
        </div>
    </div>
    );
};

export default ProductCard