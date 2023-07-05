import React from "react";

//mimic db
const basket = [
  {
    qty: 22,
    name: "Pancake Pancake Pancake Pancake Pancake Pancake Pancake",
    price: 5.22,
  },
  {
    qty: 1,
    name: "Pancake Pancake Pancake Pancake Pancake Pancake Pancake",
    price: 5.22,
  },
  {
    qty: 1,
    name: "Pancake Pancake Pancake Pancake Pancake Pancake Pancake",
    price: 5.22,
  },
  {
    qty: 1,
    name: "Pancake Pancake Pancake Pancake Pancake Pancake Pancake",
    price: 5.22,
  },
  {
    qty: 1,
    name: "Pancake Pancake Pancake Pancake Pancake Pancake Pancake",
    price: 5.22,
  },
  {
    qty: 1,
    name: "Pancake Pancake Pancake Pancake Pancake Pancake Pancake",
    price: 5.22,
  },
  {
    qty: 1,
    name: "Pancake Pancake Pancake Pancake Pancake Pancake Pancake",
    price: 5.22,
  },
  {
    qty: 1,
    name: "Pancake Pancake Pancake Pancake Pancake Pancake Pancake",
    price: 5.22,
  },
  {
    qty: 1,
    name: "Pancake Pancake Pancake Pancake Pancake Pancake Pancake",
    price: 5.22,
  },
  {
    qty: 1,
    name: "Pancake Pancake Pancake Pancake Pancake Pancake Pancake",
    price: 5.22,
  },
];

const MenuLeftSide = () => {
  return (
    <>
      {basket &&
        basket.map((product, index) => {
          return (
            <div key={index} className="item grid grid-cols-1 bg-gray-100 rounded m-1 p-2 select-none shadow-md">
              <div className="grid grid-cols-[50px_10fr_1fr]">
                <p className="itemQty text-4xl row-span-2">{product.qty}</p>
                <p title={product.name} className="itemName line-clamp-1">
                {product.name}
                </p>
                <p>£{product.price}</p>

                <div className="flex justify-center gap-4 text-xs my-1 col-span-2">
                  <button className="bg-red-300 px-2 py-1 rounded transition-all cursor-pointer hover:scale-[0.98] active:scale-[0.90] shadow-md">Remove</button>
                  <button className="bg-gray-300 px-2 py-1 rounded transition-all cursor-pointer hover:scale-[0.98] active:scale-[0.90] shadow-md">➖</button>
                  <button className="bg-gray-300 px-2 py-1 rounded transition-all cursor-pointer hover:scale-[0.98] active:scale-[0.90] shadow-md">➕</button>
                  <button className="bg-green-300 px-2 py-1 rounded transition-all cursor-pointer hover:scale-[0.98] active:scale-[0.90] shadow-md">+Message</button>
                </div>

              </div>
              
            </div>
          );
        })}
    </>
  );
};

export default MenuLeftSide;
