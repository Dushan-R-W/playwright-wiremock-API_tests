import { test, expect } from '@playwright/test';


test('GET user returns required fields', async ({request}) => {

    //GIVEN: user id 1
    const user_id = 1;

    //WHEN: user 1 information is requested
    const users_response = await request.get(`http://localhost:3001/users?id=${user_id}`);

    //THEN: API should respond with status code 200
    expect(users_response.status()).toBe(200);

    //THEN: response should contain user fields
    const json_body = await users_response.json();
    expect(json_body).toHaveProperty('id');
    expect(json_body).toHaveProperty('name');
    expect(json_body).toHaveProperty('email');

    //WHEN: orders for user 1 are requested
    const orders_response = await request.get(`http://localhost:3002/orders?userId=${user_id}`);

    //THEN: orders API should respond with status code 200
    expect(orders_response.status()).toBe(200);
})

test('POST order', async ({request}) => {

    //GIVEN: new order data
    const order_data = {orderId: 2, userId: 1, amount: 35.95}

    //WHEN: post request is sent with new order data
    const response = await request.post('http://localhost:3002/order', {
        data: order_data
    });

    //THEN: orders API should respond with status code 200
    expect(response.status()).toBe(200);

})