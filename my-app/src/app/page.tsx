'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Header from "../components/headers/header";
import './globals.css';
type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: number;
  colors: string[];
};

async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch("https://api.alluresallol.com/products", {
      cache: "no-store",
    });
    const data = await res.json();
    console.log("Products API response:", data);

    // Support array, data.products, or data.data
    const itemsArray = Array.isArray(data)
      ? data
      : Array.isArray((data as any).products)
      ? (data as any).products
      : Array.isArray((data as any).data)
      ? (data as any).data
      : [];

    console.log("Normalized items:", itemsArray);
    return itemsArray.slice(0, 4);
  } catch (err) {
    console.error("Ошибка при загрузке товаров:", err);
    return [];
  }
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    console.log("Starting product fetch...");
    getProducts()
      .then((data) => {
        console.log("Fetched products:", data);
        setProducts(data);
      })
      .catch((err) => {
        console.error("Error in fetchProducts promise:", err);
      });
  }, []);

  return (
    <>
      <Header />
      <div style={{ display: "flex", gap: "20px", marginTop: "15px", marginLeft: "280px" }}>
        <div style={{ width: "480px", height: "330px", position: "relative", opacity: 1 }}>
          <Image
            src="/baner1.png"
            alt="Літо в розпалі - знижки до 70%"
            fill
            style={{ objectFit: "cover", borderRadius: "16px" }}
          />
        </div>
        <div style={{ width: "480px", height: "330px", position: "relative", opacity: 1 }}>
          <Image
            src="/baner2.png"
            alt="Літо в розпалі - нові колекції"
            fill
            style={{ objectFit: "cover", borderRadius: "16px" }}
          />
        </div>
      </div>
      {/* Категории под баннерами */}
      <div className="categories-section">
        <h2 className="categories-section__title">Популярні товари</h2>
        <div className="categories-list">
          <button className="categories-list__button">Одяг та взуття</button>
          <button className="categories-list__button categories-list__button--active">Електроніка</button>
          <button className="categories-list__button">Спорт</button>
          <button className="categories-list__button">Іграшки</button>
          <button className="categories-list__button">Краса</button>
          <button className="categories-list__button">Меблі</button>
        </div>
      </div>
      <main style={{ padding: "20px", background: "#fafafa" }}>
        <h1 style={{ textAlign: "center", fontSize: 32, fontWeight: 700 }}>
          Маркетплейс
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          {products.map((p) => (
            <div
              key={p.id}
              style={{
                background: "#fff",
                borderRadius: "8px",
                padding: "16px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                position: "relative",
              }}
            >
              <button
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                  background: "transparent",
                  border: "none",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                ♡
              </button>

              <img
                src={
                  p.image.startsWith("http")
                    ? p.image
                    : `https://api.alluresallol.com${p.image}`
                }
                alt={p.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "contain",
                }}
              />

              <h3 style={{ margin: "12px 0", fontSize: "18px" }}>{p.title}</h3>

              <div>
                {"★".repeat(Math.floor(p.rating || 0))}
                {"☆".repeat(5 - Math.floor(p.rating || 0))}
                <span style={{ marginLeft: "8px", color: "#666" }}>
                  {p.rating?.toFixed(1)}
                </span>
              </div>

              <p style={{ fontSize: "20px", fontWeight: 700, margin: "12px 0" }}>
                {p.price.toLocaleString("uk-UA")} ₴
              </p>

              <div style={{ display: "flex", gap: "6px", marginBottom: "12px" }}>
                {p.colors?.map((c) => (
                  <span
                    key={c}
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background: c,
                      border: "1px solid #ccc",
                    }}
                  />
                ))}
              </div>

              <button
                style={{
                  width: "100%",
                  padding: "10px",
                  background: "#0070f3",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                В корзину
              </button>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}