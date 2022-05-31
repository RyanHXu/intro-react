import {useState} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";

function TestHook() {
    const [count,setCount] = useState(0)
    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)

    return (
        <Container className={"my-5"}>

            <Row>
                <Col className="col-2">
                    <Button variant={"secondary"}  onClick={decrement}>
                        Minus
                    </Button>
                </Col>
                <Col className="col-1 my-auto align-middle">
                    {count}


                </Col>
                <Col className="col-2">
                    <Button variant={"primary"}  onClick={increment}>
                        Add
                    </Button>

                </Col>
            </Row>


        </Container>
    );
}

export default TestHook;
