import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {
    const navigate = useNavigate();
    const showDetail = () => {
        navigate(`/product/${item.id}`);
    };

  return (
    <div class="card">
         <div class="card-body">
            <img width={350} src={item? item.img : null} alt='Item Img'/>
            <div>{item? item.title : null} | ${item? item.price : null}</div>
            <Button variant="outline-secondary" onClick={showDetail}>🔍</Button>
            <Button className="brn-primary">Select</Button>
        </div>
    </div>
    );
};

export default ProductCard