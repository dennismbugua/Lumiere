"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    price: 248,
    image:
      "https://plus.unsplash.com/premium_photo-1674719144570-0728faf14f96?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    price: 335,
    image:
      "https://images.unsplash.com/photo-1585412459212-8def26f7e84c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    price: 489,
    image:
      "https://images.unsplash.com/photo-1589363360147-4f2d51541551?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1724856604247-0de2c43b6491?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },

  {
    id: 5,
    name: "Machined Mechanical Pencil",
    price: 139,
    image:
      "https://images.unsplash.com/photo-1687511968900-7418e0fdc532?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },

  {
    id: 6,
    name: "Machined Mechanical Pencil",
    price: 159,
    image:
      "https://images.unsplash.com/photo-1566363384123-360c5f6bc369?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },

  {
    id: 7,
    name: "Machined Mechanical Pencil",
    price: 234,
    image:
      "https://images.unsplash.com/photo-1508188239917-0fc5f653cb47?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },

  {
    id: 8,
    name: "Machined Mechanical Pencil",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1585459733416-825300c90f90?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },

  {
    id: 9,
    name: "Machined Mechanical Pencil",
    price: 109,
    image:
      "https://images.unsplash.com/photo-1628071787776-a1d7f8ffa8f0?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },

  {
    id: 10,
    name: "Machined Mechanical Pencil",
    price: 99,
    image:
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },

  {
    id: 11,
    name: "Machined Mechanical Pencil",
    price: 69,
    image:
      "https://plus.unsplash.com/premium_photo-1678218594243-5ad331947662?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },

  {
    id: 12,
    name: "Machined Mechanical Pencil",
    price: 79,
    image:
      "https://images.unsplash.com/photo-1564864310852-e1e98eb07010?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },

  {
    id: 13,
    name: "Machined Mechanical Pencil",
    price: 2349,
    image:
      "https://images.unsplash.com/photo-1646855672493-b6925d356c9e?q=80&w=1534&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },

  {
    id: 14,
    name: "Machined Mechanical Pencil",
    price: 2169,
    image:
      "https://images.unsplash.com/photo-1593032470861-4509830938cb?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },

  {
    id: 15,
    name: "Machined Mechanical Pencil",
    price: 1599,
    image:
      "https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },

  {
    id: 16,
    name: "Machined Mechanical Pencil",
    price: 1349,
    image:
      "https://images.unsplash.com/photo-1592878798022-3be8fcd44b1b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },

  {
    id: 17,
    name: "Machined Mechanical Pencil",
    price: 1639,
    image:
      "https://images.unsplash.com/photo-1637586509984-28f57a2e0ebc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },

  {
    id: 18,
    name: "Machined Mechanical Pencil",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1698512475182-53ebc2530b98?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 19,
    name: "Machined Mechanical Pencil",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1610689057803-1b1fe41f2dde?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },

  {
    id: 20,
    name: "Machined Mechanical Pencil",
    price: 1099,
    image:
      "https://images.unsplash.com/photo-1596275065007-3fd7b912c4aa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },

  {
    id: 21,
    name: "Machined Mechanical Pencil",
    price: 189,
    image:
      "https://images.unsplash.com/photo-1603035944950-c6e62e45a6ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },

  {
    id: 22,
    name: "Machined Mechanical Pencil",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1672625912400-35f1f7bca79b?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },

  {
    id: 23,
    name: "Machined Mechanical Pencil",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1569097941209-aca563eb07d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 24,
    name: "Machined Mechanical Pencil",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1622560481156-01fc7e1693e6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },

  {
    id: 25,
    name: "Machined Mechanical Pencil",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1641953763801-c5fc7855e983?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },

  {
    id: 26,
    name: "Machined Mechanical Pencil",
    price: 229,
    image:
      "https://images.unsplash.com/photo-1669676646027-1a2e49be61ae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },

  {
    id: 27,
    name: "Machined Mechanical Pencil",
    price: 229,
    image:
      "https://images.unsplash.com/photo-1653038282411-7e9b41753018?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },

  {
    id: 28,
    name: "Machined Mechanical Pencil",
    price: 1635,
    image:
      "https://images.unsplash.com/photo-1585387015210-403b7652291f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
];

export default function Home() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (query: string) => {
    setIsSearching(!!query);
    if (!query.trim()) {
      setFilteredProducts(products);
      return;
    }

    const searchTerms = query.toLowerCase().split(" ");
    const filtered = products.filter((product) => {
      const productText = `${product.name} ${product.price}`.toLowerCase();
      return searchTerms.every((term) => productText.includes(term));
    });

    setFilteredProducts(filtered);
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <main className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          {/* Search Results */}
          {isSearching ? (
            <div className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Search Results ({filteredProducts.length})
              </h2>
              {filteredProducts.length === 0 && (
                <p className="mt-4 text-gray-500">
                  No products found. Try a different search term.
                </p>
              )}
            </div>
          ) : (
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">
              New Arrivals
            </h2>
          )}

          {/* Products Grid */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group"
              >
                <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
                  <div className="relative h-0 pb-[100%]">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="absolute inset-0 h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity duration-300"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-700">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    ${product.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* No Results Message */}
          {isSearching && filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <MagnifyingGlassIcon className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No products found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search terms or filters
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
