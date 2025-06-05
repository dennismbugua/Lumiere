"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import { CartItem } from "../types";
import toast from "react-hot-toast";

interface OrderSummaryProps {
  onClose: () => void;
}

export default function OrderSummary({ onClose }: OrderSummaryProps) {
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CartItem | null>(null);
  const { cartItems, removeFromCart, addToSaved } = useCart();

  const handleSaveForLater = () => {
    if (selectedItem) {
      addToSaved(selectedItem);
      removeFromCart(selectedItem.id);
      setShowRemoveModal(false);
      toast.success("Item saved for later!", {
        duration: 2000,
        position: "top-right",
        style: {
          background: "#10B981",
          color: "#FFFFFF",
          padding: "16px",
          borderRadius: "8px",
        },
      });
    }
  };

  const handleRemove = (item: CartItem) => {
    setSelectedItem(item);
    setShowRemoveModal(true);
  };

  const handleRemoveConfirm = () => {
    if (selectedItem) {
      removeFromCart(selectedItem.id);
    }
    setShowRemoveModal(false);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const shipping = 8;
  const subtotal = calculateSubtotal();
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return null;
  }

  const orderId = Math.floor(Math.random() * 100000);
  const currentDate = new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="fixed inset-0 z-40">
      {/* Background overlay */}
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm transition-opacity" />

      {/* Modal content */}
      <div className="fixed inset-0 z-50 overflow-y-auto">
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

            {/* Cart content */}
            <div className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Cart items */}
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">
                        Order #{orderId}
                      </h1>
                      <p className="text-base font-medium text-gray-600">
                        {currentDate}
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-6">
                      Shopping Cart
                    </h2>
                    <div className="space-y-6">
                      {cartItems.map((item) => (
                        <CartItemCard
                          key={item.id}
                          item={item}
                          onRemove={() => handleRemove(item)}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Order summary */}
                <div className="lg:w-96">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-6">
                      Order Summary
                    </h2>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <p className="text-gray-600">Subtotal</p>
                        <p className="text-gray-800 font-medium">
                          ${subtotal.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-gray-600">Shipping</p>
                        <p className="text-gray-800 font-medium">
                          ${shipping.toFixed(2)}
                        </p>
                      </div>
                      <div className="h-px bg-gray-200 my-4"></div>
                      <div className="flex justify-between">
                        <p className="text-gray-800 font-semibold">Total</p>
                        <p className="text-gray-800 font-semibold">
                          ${total.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <button className="cursor-pointer mt-6 w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700">
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Remove confirmation modal */}
      {showRemoveModal && (
        <RemoveModal
          onConfirm={handleRemoveConfirm}
          onCancel={() => setShowRemoveModal(false)}
          //   onSaveForLater={() => setShowRemoveModal(false)}
          onSaveForLater={handleSaveForLater}
        />
      )}
    </div>
  );
}

// Cart item card component
function CartItemCard({
  item,
  onRemove,
}: {
  item: CartItem;
  onRemove: () => void;
}) {
  return (
    <div className="flex gap-6">
      <div className="w-32 h-32 flex-shrink-0">
        <Image
          src={item.images[0].src}
          alt={item.images[0].alt}
          width={128}
          height={128}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
        <div className="mt-2 space-y-1">
          <p className="text-sm text-gray-600">
            <span className="text-gray-500">Quantity: </span>
            {item.quantity}
          </p>
          <p className="text-lg font-semibold text-gray-800">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
        <button
          onClick={onRemove}
          className="cursor-pointer mt-4 text-sm text-red-600 hover:text-red-800 flex items-center"
        >
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          Remove
        </button>
      </div>
    </div>
  );
}

// Remove modal component
function RemoveModal({
  onConfirm,
  onCancel,
  onSaveForLater,
}: {
  onConfirm: () => void;
  onCancel: () => void;
  onSaveForLater: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-4 sm:items-center">
        <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
        <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
          {/* <div className="absolute right-0 top-0 pr-4 pt-4">
            <button
              type="button"
              className="cursor-pointer rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
          </div> */}

          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <svg
                className="h-6 w-6 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3 className="text-lg font-semibold leading-6 text-gray-900">
                Remove Item
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Would you like to save this item for later or remove it from
                  your cart?
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse gap-3">
            <button
              type="button"
              onClick={onConfirm}
              className="cursor-pointer inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:w-auto"
            >
              Remove
            </button>
            <button
              type="button"
              onClick={onSaveForLater}
              className="cursor-pointer mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              Save for Later
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="cursor-pointer mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
