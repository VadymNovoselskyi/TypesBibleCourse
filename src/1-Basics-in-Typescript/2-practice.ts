import { Equal, Expect } from "..";

type OrderDetails = {
  orderId: string;
  quantity: number;
  price: number;
};

export const orderDetails: OrderDetails = JSON.parse(
  '{"orderId": "ORD456", "quantity": 3, "price": 29.99}'
);

type test = Expect<Equal<typeof orderDetails, OrderDetails>>;
