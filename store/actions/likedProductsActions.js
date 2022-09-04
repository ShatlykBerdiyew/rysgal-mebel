import {
  ADD_ALL_LOCAL_LIKES,
  ADD_PRODUCT_IN_LIKES,
  DELETE_PRODUCT_IN_LIKES,
} from "../types";

export const addProductinLikes = (data) => {
  //-------------- Halanlaryma goshulyan harytlary localStorge hem yazylyar.---------
  const localLikes = localStorage.getItem("like");
  if (localLikes) {
    let localParse = JSON.parse(localLikes);
    localParse.push(data);
    localStorage.setItem("like", JSON.stringify(localParse));
  } else {
    let localPar = [];
    localPar.push(data);
    localStorage.setItem("like", JSON.stringify(localPar));
  }
  // -----------------Localstorge uytgetme ishi tamamlandy---------------
  return {
    type: ADD_PRODUCT_IN_LIKES,
    payload: data,
  };
};

export const deleteProductInLikes = (id) => {
  // ----------localStorge dan producty pozmak START!------------
  const localLikes = localStorage.getItem("like");
  const localParse = JSON.parse(localLikes);
  localStorage.setItem(
    "like",
    JSON.stringify(localParse.filter((item) => item.prod_id !== id))
  );
  // ----------localStorge dan producty pozmak END!------------
  return {
    type: DELETE_PRODUCT_IN_LIKES,
    payload: id,
  };
};

export const addAllLocalLikes = (data) => {
  return {
    type: ADD_ALL_LOCAL_LIKES,
    payload: data,
  };
};
