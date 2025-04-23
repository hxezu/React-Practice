import { Plus, Minus, Trash2 } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image:
      "https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: 2,
    name: "Smartwatch",
    price: 199.99,
    image:
      "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 79.99,
    image:
      "https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
];

export default function ShoppingCart() {
  const state = {
    items: [],
    total: 0,
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Available Products</h2>
          <div className="grid gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex items-center space-x-4 p-4 border rounded-lg hover:border-blue-500 transition-colors"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-gray-600">${product.price.toFixed(2)}</p>
                </div>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Shopping Cart</h2>
            {/* TODO: 카트에 데이터가 있을 때만 노출 */}
            <button className="text-red-500 hover:text-red-600 text-sm">
              Clear Cart
            </button>
          </div>

          {/* TODO: 카트가 비어있을 때만 */}
          {/* <p className="text-gray-500 text-center py-8">Your cart is empty</p> */}

          {/* TODO: 장바구니 데이터 */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 border rounded-lg">
              <img
                src={
                  "https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=300"
                }
                alt={"Wireless Headphones"}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-medium">{"Wireless Headphones"}</h3>
                <p className="text-gray-600">$99.99</p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-1 rounded-full hover:bg-gray-100">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center">1</span>
                <button className="p-1 rounded-full hover:bg-gray-100">
                  <Plus className="w-4 h-4" />
                </button>
                <button className="p-1 text-red-500 hover:text-red-600">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span>${state.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
