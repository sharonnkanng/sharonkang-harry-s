import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {

    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();

    const getProducts = async () => {
        let searchQuery = query.get('q') ||""; // if there is no query, it will be an empty string
        let response = await fetch(`https://my-json-server.typicode.com/sharonnkanng/sharonkang-harry-s?q=${searchQuery}`);
        let data = await response.json();
        setProductList(data);
    };

    useEffect(() => {
        getProducts()
    }, [query])

  return (
    <div className='page text-center'>
        <Container>
        <div className='page-header'>
        <h2>All Products</h2>
        <p>We make products for all men, thoughtfully.</p>
        </div>
        <Row>
         {productList.map((product) => (
            <Col sm={4}>
                <ProductCard item={product}/>
           </Col>
        ))}
        </Row>
        </Container>
    </div>
  )
}

export default ProductAll