"use client";

import Image from "next/image";
import { useCart } from "../context/CartContext";
import { CartItem } from "../types";
import toast from "react-hot-toast";

interface SavedItemsProps {
  onClose: () => void;
}

export default function SavedItems({ onClose }: SavedItemsProps) {
  const { savedItems, addToCart, removeFromSaved } = useCart();

  const handleAddToCart = (item: CartItem) => {
    addToCart(item);
    removeFromSaved(item.id);
    toast.success("Added to cart!", {
      duration: 2000,
      position: "top-right",
      style: {
        background: "#10B981",
        color: "#FFFFFF",
        padding: "16px",
        borderRadius: "8px",
      },
    });
  };

  if (savedItems.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-40">
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm transition-opacity" />

      <div className="fixed inset-0 z-50 overflow-y-auto pt-24">
        <div className="flex min-h-full items-center justify-center p-4">
          <div className="relative w-full max-w-7xl rounded-xl bg-white shadow-2xl">
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer absolute right-4 top-4 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Close</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="p-8">
              <div className="flex flex-col gap-8">
                <div className="flex justify-between items-center">
                  <h1 className="text-3xl font-semibold text-gray-900">
                    Saved Items
                  </h1>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {savedItems.map((item) => (
                      <SavedItemCard
                        key={item.id}
                        item={item}
                        onAddToCart={() => handleAddToCart(item)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SavedItemCard({
  item,
  onAddToCart,
}: {
  item: CartItem;
  onAddToCart: () => void;
}) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg">
        <Image
          src={item.images[0].src}
          alt={item.images[0].alt}
          width={300}
          height={300}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">${item.price}</p>
        <button
          onClick={onAddToCart}
          className="cursor-pointer mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
