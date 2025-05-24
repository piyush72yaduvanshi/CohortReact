import { useState } from "react";

export function ChaiOrder() {
    const [chaiOrder, setChaiOrder] = useState(0);

    const orderChai = () => {
        setChaiOrder(prev => prev + 1);
    }

    return (
        <div>
            <h1>Chai Counter</h1>
            <p>
                You have ordered <b>{chaiOrder}</b> chai
            </p>
            <button onClick={orderChai}>Order chai</button>
        </div>
    )
}