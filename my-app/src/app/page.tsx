import React from "react";
import Header from "../components/headers/header"; // путь скорректируйте, если Header.tsx в другом месте

export default function Home() {
  return (
    <>
      <Header />
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#fafafa",
        }}
      >
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16 }}>
          Маркетплейс
        </h1>
        <p style={{ fontSize: 18, color: "#555", marginBottom: 32 }}>
          Тут скоро з&apos;являться найкращі товари та пропозиції!
        </p>
        <span style={{ fontSize: 90, opacity: 0.7, marginBottom: 16 }}>🛒</span>
      </main>
    </>
  );
}
