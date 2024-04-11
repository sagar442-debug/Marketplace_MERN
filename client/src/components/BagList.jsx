import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const BagList = ({ productDetail, detailId, quantity }) => {
  // const [quantity, setQuantity] = useState(1);
  const token = localStorage.getItem("token");
  const increaseQuantity = () => {
    console.log("increase");
  };
  const decreaseQuantity = () => {
    console.log("Decreased");
  };

  useEffect(() => {}, []);

  const onDeleteItem = async (e) => {
    let _id = detailId;
    try {
      const response = await fetch("http://localhost:5001/user/deletecart", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ _id }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete item from cart");
      }
      window.location.reload();
    } catch (error) {
      console.error("Error deleting item from cart:", error.message);
    }
  };

  return (
    <div>
      <div className="lists-component bg-gray-200 py-3 px-5 rounded-xl flex justify-between items-center mt-3">
        <div className="flex space-x-5">
          <img
            className="h-20 w-20 object-cover"
            src={productDetail.imgUrl}
            alt={productDetail.title}
          />
          <div className="details">
            <h1 className="font-medium">{productDetail.title}</h1>
            <p className="">
              {productDetail.description.length > 40
                ? `${productDetail.description.slice(0, 40)}...`
                : productDetail.description}
            </p>
            <h1 className="text-xl font-medium">${productDetail.price}</h1>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="quantity text-black border-black text-lg flex space-x-3 items-center border-[1px] justify-center mt-2 px-2 mr-3">
            <button className="" onClick={() => decreaseQuantity()}>
              -
            </button>
            <h1 className="">{quantity}</h1>
            <button className="" onClick={() => increaseQuantity()}>
              +
            </button>
          </div>

          <button className=" p-2">
            <FaTrash
              onClick={(e) => onDeleteItem(e)}
              className="text-red-600 cursor-pointer text-xl"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BagList;
