import { clearCard } from "../actions/card";
import { setLoading } from "../actions/loading";
import { createOrder } from "../actions/order";
import { getUserProfile } from "../actions/user";
import { BASE_URL } from "../urls";

export const asyncOrderCreate = (token, orderData) => {
  return function (dispatch) {
    dispatch(setLoading(true));
    fetch(`${BASE_URL}/api/order/order-create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("Create order fetch response", json);
        dispatch(createOrder(json.data));
        dispatch(clearCard());
      })
      .catch((err) => console.log(err))
      .finally(() => dispatch(setLoading(false)));
  };
};
