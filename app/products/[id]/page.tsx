"use client";

import { useState } from "react";
import { use } from "react";
// import Image from "next/image";
import Link from "next/link";
import ZoomedImage from "../../components/ZoomedImage";
import Navbar from "@/app/components/Navbar";
import { useCart } from "../../context/CartContext";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import { products } from "./data/products";
import toast from "react-hot-toast";

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const resolvedParams = use(params);
  const product = products.find((p) => p.id === parseInt(resolvedParams.id));
  const { addToCart } = useCart();

  // Add handler function for form submission
  const handleAddToBag = () => {
    if (product) {
      addToCart(product);
      setShowOrderSummary(true);

      toast.success("Item saved for later!", {
        duration: 1000,
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

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Navbar hideSearch={true} />
      <div className="bg-white">
        <div className="pt-20">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4"
          >
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-gray-500">
                  <HomeIcon
                    className="h-5 w-5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Home</span>
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRightIcon
                    className="h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <span
                    className="ml-2 text-sm font-medium text-gray-900"
                    aria-current="page"
                  >
                    {product.name}
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Product info */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6">
            <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
              {/* Product image */}
              {/* <div className="aspect-square overflow-hidden rounded-lg">
                <div className="relative h-0 pb-[100%]">
                  {" "}
                  <Image
                    src={product.images[0].src}
                    alt={product.images[0].alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    priority
                  />
                </div>
              </div> */}

              <div className="aspect-square">
                <ZoomedImage
                  src={product.images[0].src}
                  alt={product.images[0].alt}
                />
              </div>

              {/* Product details */}
              <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                  {product.name}
                </h1>

                {/* Price */}
                <div className="mt-6">
                  <h2 className="sr-only">Product price</h2>
                  <p className="text-3xl tracking-tight text-gray-900">
                    ${product.price}
                  </p>
                </div>

                {/* Reviews */}
                <div className="mt-6">
                  <h3 className="sr-only">Reviews</h3>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-5 w-5 ${
                            i < product.reviews.average
                              ? "text-yellow-400"
                              : "text-gray-200"
                          }`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="ml-3 text-sm text-gray-700">
                      {product.reviews.totalCount} reviews
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="mt-6">
                  <h2 className="sr-only">Product description</h2>
                  <p className="text-base text-gray-700">
                    {product.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="mt-8">
                  <h3 className="text-sm font-medium text-gray-900">
                    Highlights
                  </h3>
                  <div className="mt-4">
                    <ul
                      role="list"
                      className="list-disc space-y-2 pl-4 text-sm"
                    >
                      {product.highlights.map((highlight, index) => (
                        <li key={index} className="text-gray-600">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Details */}
                <div className="mt-8">
                  <h2 className="text-sm font-medium text-gray-900">Details</h2>
                  <div className="mt-4 space-y-6">
                    <p className="text-sm text-gray-600">{product.details}</p>
                  </div>
                </div>

                {/* Add to cart button */}
                <div className="mt-8">
                  <button
                    type="button"
                    onClick={handleAddToBag}
                    className="cursor-pointer flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Add to bag
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
