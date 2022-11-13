
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import './Item.css'

const Item = ({ product }) => {

    return (
        <div>
            <Card key={product.id} className="card-container" >
                <Link to={`/detail/${product.id}`}>
                    <Card.Title>{product.name} </Card.Title>
                    <Card.Img variant="top" src={product.photo} />
                    <Card.Body>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                    </Card.Body>
                </Link>

            </Card>
        </div>
    )
}

export default Item