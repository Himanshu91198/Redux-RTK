import { useSelector } from "react-redux";

function Customer() {
  const customer = useSelector((state) => state.customer.fullname);

  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
