import React, { createContext, useEffect, useState } from "react";

export const DetailsContext = createContext();

const DetailsProvider = (props) => {
  /* 
 
 const [detailItem, setDetailItem] = useState(
    localStorage.getItem("itemDetails")
      ? JSON.parse(localStorage.getItem("itemDetails"))
      : []
  );

  const addToDetailPage = (item) => {
    const isItemInDetails = detailItem.find(
      (detailItem) => detailItem.id === item.id
    );
    if (isItemInDetails) {
      setDetailItem((prevData) =>
        prevData.map((product) => {
          if (product.id === item.id) {
            return item;
          }
          return product;
        })
      );
    } else {
      setDetailItem((prevData) => [...prevData, item]);
    }
  };
  
  useEffect(() => {
    localStorage.setItem("itemDetails", JSON.stringify(detailItem));
    if(detailItem.length>=2){
      const latestItem=detailItem.slice(-1)[0];
      setDetailItem([latestItem]);
    }
  }, [detailItem]);

  useEffect(() => {
    const detailProducts = localStorage.getItem("itemDetails");
    if (detailProducts) {
      setDetailItem(JSON.parse(detailProducts));
    }
  }, []);

*/

  const [detailItem, setDetailItem] = useState(
    localStorage.getItem("itemDetails")
      ? JSON.parse(localStorage.getItem("itemDetails"))
      : []
  );

  const addToDetailPage = (item) => {
    const isItemInDetails = detailItem.find((detail) => detail.id === item.id);

    if (isItemInDetails) {
      setDetailItem(
        detailItem((prevData) =>
          prevData.map((product) => {
            if (product.id === item.id) {
              return item;
            }
            return product;
          })
        )
      );
    } else {
      setDetailItem((prevData) => [...prevData, item]);
    }
  };

  useEffect(() => {
    localStorage.setItem("itemDetails", JSON.stringify(detailItem));
    if (detailItem.length >= 2) {
      const lastestItem = detailItem.slice(-1)[0];
      setDetailItem([lastestItem]);
    }
  }, [detailItem]);

  useEffect(() => {
    const detailsProducts = localStorage.getItem("itemDetails");
    if (detailsProducts) {
      setDetailItem(JSON.parse(detailsProducts));
    }
  }, []);

  return (
    <DetailsContext.Provider
      value={{ detailItem, setDetailItem, addToDetailPage }}
    >
      {props.children}
    </DetailsContext.Provider>
  );
};

export default DetailsProvider;
