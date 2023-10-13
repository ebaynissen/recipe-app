import Card from 'react-bootstrap/Card';

export default function DisplayCard({content}) {
    return (
        <Card className='m-3' >
            <Card.Body><Card.Body>{content}</Card.Body></Card.Body>
        </Card>
    );
};
