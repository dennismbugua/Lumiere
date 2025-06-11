"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { products } from "./products/[id]/data/products";

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
                      src={product.images[0].src}
                      alt={product.images[0].alt}
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
