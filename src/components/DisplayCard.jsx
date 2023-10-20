import Card from 'react-bootstrap/Card';
/**
 * Basic DisplayCard for holding items on the page.
 * Makes it possible for uniform styling for all cards.
 */
export default function DisplayCard({content}) {
    return (
        <Card className='m-3' >
            <Card.Body><Card.Body>{content}</Card.Body></Card.Body>
        </Card>
    );
};
