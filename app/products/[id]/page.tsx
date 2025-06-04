"use client";

import { useState } from "react";
import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import OrderSummary from "../../components/OrderSummary";
import Navbar from "@/app/components/Navbar";
import { useCart } from "../../context/CartContext";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    price: 48,
    colors: ["White", "Gray", "Black"],
    sizes: ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL"],
    description:
      "Perfect for both hot and cold beverages, this bottle features a natural clay body with a cork stopper. Handcrafted by artisans, each piece is unique.",
    highlights: [
      "Hand-crafted from natural clay",
      "Cork stopper included",
      "Dishwasher safe",
      "Perfect for hot and cold beverages",
    ],
    details:
      "This beautifully crafted bottle combines traditional artisanship with modern functionality. Each piece is unique due to the natural variations in the clay and firing process.",
    images: [
      {
        src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg",
        alt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
      },
      // Add more images as needed
    ],
    reviews: {
      average: 4,
      totalCount: 117,
    },
  },

  {
    id: 2,
    name: "Earthen Bottle",
    price: 35,
    colors: ["White", "Gray", "Black"],
    sizes: ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL"],
    description:
      "Perfect for both hot and cold beverages, this bottle features a natural clay body with a cork stopper. Handcrafted by artisans, each piece is unique.",
    highlights: [
      "Hand-crafted from natural clay",
      "Cork stopper included",
      "Dishwasher safe",
      "Perfect for hot and cold beverages",
    ],
    details:
      "This beautifully crafted bottle combines traditional artisanship with modern functionality. Each piece is unique due to the natural variations in the clay and firing process.",
    images: [
      {
        src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg",
        alt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
      },
      // Add more images as needed
    ],
    reviews: {
      average: 4,
      totalCount: 117,
    },
  },

  {
    id: 3,
    name: "Earthen Bottle",
    price: 89,
    colors: ["White", "Gray", "Black"],
    sizes: ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL"],
    description:
      "Perfect for both hot and cold beverages, this bottle features a natural clay body with a cork stopper. Handcrafted by artisans, each piece is unique.",
    highlights: [
      "Hand-crafted from natural clay",
      "Cork stopper included",
      "Dishwasher safe",
      "Perfect for hot and cold beverages",
    ],
    details:
      "This beautifully crafted bottle combines traditional artisanship with modern functionality. Each piece is unique due to the natural variations in the clay and firing process.",
    images: [
      {
        src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg",
        alt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
      },
      // Add more images as needed
    ],
    reviews: {
      average: 4,
      totalCount: 117,
    },
  },

  {
    id: 4,
    name: "Earthen Bottle",
    price: 35,
    colors: ["White", "Gray", "Black"],
    sizes: ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL"],
    description:
      "Perfect for both hot and cold beverages, this bottle features a natural clay body with a cork stopper. Handcrafted by artisans, each piece is unique.",
    highlights: [
      "Hand-crafted from natural clay",
      "Cork stopper included",
      "Dishwasher safe",
      "Perfect for hot and cold beverages",
    ],
    details:
      "This beautifully crafted bottle combines traditional artisanship with modern functionality. Each piece is unique due to the natural variations in the clay and firing process.",
    images: [
      {
        src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg",
        alt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
      },
      // Add more images as needed
    ],
    reviews: {
      average: 4,
      totalCount: 117,
    },
  },
];

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
    }
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="pt-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb">
            <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <li>
                <Link href="/" className="text-sm font-medium text-gray-900">
                  Home
                </Link>
              </li>
            </ol>
          </nav>

          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            {/* Product image */}
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <div className="aspect-square w-full">
                <Image
                  src={product.images[0].src}
                  alt={product.images[0].alt}
                  width={800}
                  height={800}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.name}
              </h1>
              <p className="mt-4 text-3xl tracking-tight text-gray-900">
                ${product.price}
              </p>

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
                            ? "text-gray-900"
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

              {/* <form className="mt-10"> */}
              {/* Colors */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>
                <fieldset className="mt-4">
                  <div className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <label
                        key={color}
                        className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                      >
                        <input
                          type="radio"
                          name="color-choice"
                          value={color}
                          className="sr-only"
                        />
                        <span
                          aria-hidden="true"
                          className={`h-8 w-8 rounded-full border border-black border-opacity-10 ${
                            color.toLowerCase() === "white"
                              ? "bg-white"
                              : color.toLowerCase() === "gray"
                              ? "bg-gray-200"
                              : "bg-gray-900"
                          }`}
                        />
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <Link
                    href="#"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Size guide
                  </Link>
                </div>

                <fieldset className="mt-4">
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {product.sizes.map((size) => (
                      <label
                        key={size}
                        className="group relative flex items-center justify-center rounded-md border bg-white py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1"
                      >
                        <input
                          type="radio"
                          name="size-choice"
                          value={size}
                          className="sr-only"
                        />
                        <span>{size}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>

              <button
                type="submit"
                // onClick={() => setShowOrderSummary(true)}
                onClick={handleAddToBag}
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to bag
              </button>
              {/* </form> */}
            </div>

            {/* {showOrderSummary && (
              <OrderSummary
                product={product}
                onClose={() => setShowOrderSummary(false)}
              />
            )} */}

            {/* Product details */}
            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:pt-6 lg:pb-16 lg:pr-8">
              <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>
                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight, index) => (
                      <li key={index} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
