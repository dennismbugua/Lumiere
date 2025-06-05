import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Link from "next/link";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { useCart } from "../context/CartContext";
import OrderSummary from "./OrderSummary";
import SavedItems from "./SavedItems";

interface NavbarProps {
  hideSearch?: boolean;
  onSearch?: (query: string) => void;
}

export default function Navbar({ hideSearch = false, onSearch }: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showCart, setShowCart] = useState(false);
  const [showSaved, setShowSaved] = useState(false);
  const { cartCount, savedCount, cartItems } = useCart();
  //   const { cartCount, savedCount } = useCart();

  // Add handler for cart click
  const handleCartClick = () => {
    setShowCart(true);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch?.(query);
  };

  return (
    <>
      <Toaster />
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Brand */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-semibold text-gray-900">
                  Lumière
                </span>
                {/* <span className="ml-2 text-sm text-gray-600">marketplace</span> */}
              </Link>
            </div>

            {/* Search Bar - conditionally rendered */}
            {!hideSearch && (
              <div className="hidden sm:block flex-1 max-w-2xl mx-8">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearch}
                    className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Search products..."
                  />
                </div>
              </div>
            )}

            {/* Icons */}
            <div className="flex items-center space-x-6">
              <button
                type="button"
                onClick={() => setShowSaved(true)}
                className="cursor-pointer relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">View saved items</span>
                <HeartIcon className="h-6 w-6" aria-hidden="true" />
                {savedCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-600 text-xs text-white flex items-center justify-center">
                    {savedCount}
                  </span>
                )}
              </button>
              <button
                type="button"
                onClick={handleCartClick}
                className="cursor-pointer relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">View shopping cart</span>
                <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-indigo-600 text-xs text-white flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {!hideSearch && (
          <div className="sm:hidden border-t border-gray-200 py-3 px-4">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Search products..."
              />
            </div>
          </div>
        )}
      </nav>

      {showSaved && <SavedItems onClose={() => setShowSaved(false)} />}

      {/* Add OrderSummary modal */}
      {showCart && cartItems && cartItems.length > 0 && (
        <OrderSummary
          {...cartItems[0]} // For now, showing first item
          onClose={() => setShowCart(false)}
        />
      )}
    </>
  );
}
