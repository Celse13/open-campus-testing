"use client";

import {useRouter} from "next/navigation";
import {MouseEventHandler} from "react";



const OrderProduct = () => {
    const router = useRouter();

    const handleOrder: MouseEventHandler<HTMLButtonElement> = () => {
        console.log('Order clicked');
        router.push("/register");

    }
  return (
    <div>
        <button onClick={handleOrder}>Order-product</button>
    </div>
  );
};

export default OrderProduct;
