"use client";

import { useState } from "react";
import { use } from "react";
// import Image from "next/image";
import Link from "next/link";
import ZoomedImage from "../../components/ZoomedImage";
import Navbar from "@/app/components/Navbar";
import { useCart } from "../../context/CartContext";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    price: 248,
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
        src: "https://plus.unsplash.com/premium_photo-1674719144570-0728faf14f96?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    price: 335,
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
        src: "https://images.unsplash.com/photo-1585412459212-8def26f7e84c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    price: 489,
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
        src: "https://images.unsplash.com/photo-1589363360147-4f2d51541551?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    price: 299,
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
        src: "https://images.unsplash.com/photo-1724856604247-0de2c43b6491?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    id: 5,
    name: "Earthen Bottle",
    price: 139,
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
        src: "https://images.unsplash.com/photo-1687511968900-7418e0fdc532?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    id: 6,
    name: "Earthen Bottle",
    price: 159,
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
        src: "https://images.unsplash.com/photo-1566363384123-360c5f6bc369?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    id: 7,
    name: "Earthen Bottle",
    price: 234,
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
        src: "https://images.unsplash.com/photo-1508188239917-0fc5f653cb47?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    id: 8,
    name: "Earthen Bottle",
    price: 499,
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
        src: "https://images.unsplash.com/photo-1585459733416-825300c90f90?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    id: 9,
    name: "Earthen Bottle",
    price: 109,
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
        src: "https://images.unsplash.com/photo-1628071787776-a1d7f8ffa8f0?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    id: 10,
    name: "Earthen Bottle",
    price: 99,
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
        src: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    id: 11,
    name: "Earthen Bottle",
    price: 69,
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
        src: "https://plus.unsplash.com/premium_photo-1678218594243-5ad331947662?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    id: 12,
    name: "Earthen Bottle",
    price: 79,
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
        src: "https://images.unsplash.com/photo-1564864310852-e1e98eb07010?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    id: 13,
    name: "Earthen Bottle",
    price: 2349,
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
        src: "https://images.unsplash.com/photo-1646855672493-b6925d356c9e?q=80&w=1534&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    id: 14,
    name: "Earthen Bottle",
    price: 2169,
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
        src: "https://images.unsplash.com/photo-1593032470861-4509830938cb?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    id: 15,
    name: "Earthen Bottle",
    price: 1599,
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
        src: "https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    id: 16,
    name: "Earthen Bottle",
    price: 1349,
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
        src: "https://images.unsplash.com/photo-1592878798022-3be8fcd44b1b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    id: 17,
    name: "Earthen Bottle",
    price: 1639,
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
        src: "https://images.unsplash.com/photo-1637586509984-28f57a2e0ebc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    id: 18,
    name: "Earthen Bottle",
    price: 1299,
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
        src: "https://images.unsplash.com/photo-1698512475182-53ebc2530b98?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    id: 19,
    name: "Earthen Bottle",
    price: 635,
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
        src: "https://images.unsplash.com/photo-1610689057803-1b1fe41f2dde?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    id: 20,
    name: "Earthen Bottle",
    price: 1099,
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
        src: "https://images.unsplash.com/photo-1596275065007-3fd7b912c4aa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    id: 21,
    name: "Earthen Bottle",
    price: 189,
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
        src: "https://images.unsplash.com/photo-1603035944950-c6e62e45a6ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    id: 22,
    name: "Earthen Bottle",
    price: 129,
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
        src: "https://images.unsplash.com/photo-1672625912400-35f1f7bca79b?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    id: 23,
    name: "Earthen Bottle",
    price: 249,
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
        src: "https://images.unsplash.com/photo-1569097941209-aca563eb07d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    id: 24,
    name: "Earthen Bottle",
    price: 499,
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
        src: "https://images.unsplash.com/photo-1622560481156-01fc7e1693e6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    id: 25,
    name: "Earthen Bottle",
    price: 199,
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
        src: "https://images.unsplash.com/photo-1641953763801-c5fc7855e983?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    id: 26,
    name: "Earthen Bottle",
    price: 229,
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
        src: "https://images.unsplash.com/photo-1669676646027-1a2e49be61ae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    id: 27,
    name: "Earthen Bottle",
    price: 235,
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
        src: "https://images.unsplash.com/photo-1653038282411-7e9b41753018?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    id: 28,
    name: "Earthen Bottle",
    price: 1635,
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
        src: "https://images.unsplash.com/photo-1585387015210-403b7652291f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
