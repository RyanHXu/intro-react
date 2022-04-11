import {useState} from "react";
import {Button, Container} from "react-bootstrap";

function TestHook() {
    const [count,setCount] = useState(0)
    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)

    return (
        <Container className={"my-5"}>
            <Button variant={"secondary"} className={"mx-3"} onClick={decrement}>
                Minus 1
            </Button>
            {count}
            <Button variant={"primary"} className={"mx-3"} onClick={increment}>
                Add 1
            </Button>
        </Container>
    );
}

export default TestHook;
