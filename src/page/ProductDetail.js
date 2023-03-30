import React, {useEffect, useState} from 'react'
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  //Hooks can only be called inside of the body of a function component.
  let {id} = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/sharonnkanng/sharonkang-harry-s/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };
   // api call is always with useEffect
  useEffect(() => { 
    getProductDetail()
  }, [])

  return (
    <Container>
      <Row>
      <Col className='product-img'>
        <img src={product? product.img : null} alt='Item Img'/>
      </Col>
      <Col>
        <h3>{product? product.title : null} | ${product? product.price : null}</h3>
        <p>{product? product.description : null}</p>
        <Dropdown>
          <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
            Color
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {product? product.color.map(color => 
              <Dropdown.Item>{color}</Dropdown.Item>) : null}
              {/* product.size.map(size => <Dropdown.Item>{size}</Dropdown.Item> */}
          </Dropdown.Menu>
        </Dropdown>
      </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail