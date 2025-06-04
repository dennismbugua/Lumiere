"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    price: 48,
    image:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg",
    alt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    price: 35,
    image:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg",
    alt: "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    price: 89,
    image:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg",
    alt: "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    price: 35,
    image:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg",
    alt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
            Featured Products
          </h1>

          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <a key={product.id} href="#" className="group">
                <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity duration-300"
                  />
                </div>
                <h3 className="mt-4 text-sm font-medium text-gray-700">
                  {product.name}
                </h3>
                <p className="mt-2 text-lg font-semibold text-gray-900">
                  ${product.price}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-24">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">
              New Arrivals
            </h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="group"
                >
                  <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      width={500}
                      height={500}
                      className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity duration-300"
                    />
                  </div>
                  <h3 className="mt-4 text-sm font-medium text-gray-700">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    ${product.price}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
