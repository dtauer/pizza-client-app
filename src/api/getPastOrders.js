export default async function getPastOrders(page) {
  const response = await fetch(`https://pizza-server-app.onrender.com/api/past-orders?page=${page}`);
  const data = await response.json();
  return data;
}
