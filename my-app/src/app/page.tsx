import React from "react";
import Image from "next/image";
import Header from "../components/headers/header";

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
      cache: "no-store", // отключает кеш, всегда свежие данные
    });
    const data = await res.json();
    return Array.isArray(data) ? data.slice(0, 4) : [];
  } catch (err) {
    console.error("Ошибка при загрузке товаров:", err);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <Header />
      <div
        style={{
          width: "480px",
          height: "330px",
          marginTop: "15px",
          marginLeft: "280px",
          position: "relative",
          opacity: 1,
        }}
      >
        <Image
          src="/baner1.png"
          alt="Літо в розпалі - знижки до 70%"
          fill
          style={{
            objectFit: "cover",
            borderRadius: "16px",
          }}
        />
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
                src={p.image}
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