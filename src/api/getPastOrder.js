export default async function getPastOrders(order) {
  const response = await fetch(`https://pizza-server-app.onrender.com/api/past-order/${order}`);
  const data = await response.json();
  return data;
}
