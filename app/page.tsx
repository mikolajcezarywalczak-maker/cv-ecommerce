/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

export default function Page() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [checkoutStep, setCheckoutStep] = useState("cart");

  const products = [
    { 
      id: 1,
      category: "E-commerce & UX",
      name: "Optymalizacja Konwersji", 
      price: "Wysoki ROI",
      desc: "Audyt i przebudowa koszyka, poprawa ścieżki zakupowej, redukcja porzuceń. Realne zwiększanie zysków sklepu.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      id: 2,
      category: "Marketing",
      name: "Strategia & Lejki", 
      price: "Skalowanie",
      desc: "Kompleksowe kampanie, lead magnety i automatyzacje. Prowadzenie użytkownika od pierwszego kliknięcia do zakupu.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      id: 3,
      category: "Kreatywność",
      name: "Storytelling & Copy", 
      price: "Zaangażowanie",
      desc: "Teksty pisane językiem korzyści. Od opisów SEO po angażujące scenariusze i copywriting sprzedażowy.",
      img: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      id: 4,
      category: "Tech Stack",
      name: "SEO, Montaż, CMS", 
      price: "Ruch organiczny",
      desc: "Ahrefs, Ubersuggest, Shoper, WP, Premiere Pro, CapCut, Canva. Samodzielna egzekucja techniczna.",
      img: "https://images.unsplash.com/photo-1542744094-24638ea0b3b5?q=80&w=800&auto=format&fit=crop" 
    },
  ];

  const experience = [
    {
      company: "Rokoko Hair Partners",
      role: "E-commerce Specialist",
      period: "15.12.2025 – Obecnie",
      points: [
        "Przebudowa całej strony internetowej oraz optymalizacja procesu koszykowego (checkout).",
        "Wdrażanie rozwiązań UX/UI zwiększających współczynnik konwersji.",
        "Działania techniczne i contentowe z zakresu SEO."
      ]
    },
    {
      company: "Tabun",
      role: "Content & E-commerce Manager",
      period: "2018 – 2024",
      points: [
        "Planowanie i realizacja strategii komunikacji: social media, newslettery (MailerLite, FreshMail), kampanie wizerunkowe.",
        "Tworzenie lejków sprzedażowych i landing page&apos;y od lead magnetu po konwersję.",
        "Zarządzanie sklepem na platformie Shoper: aktualizacja produktów, opisy SEO, obsługa zamówień.",
        "Koordynacja sesji zdjęciowych, montaż video, organizacja eventów i konkursów."
      ]
    },
    {
      company: "Projekty Kulturalne / Copywriting",
      role: "Twórca & Songwriter",
      period: "Wieloletnie doświadczenie",
      points: [
        "Tworzenie tekstów piosenek do topowych projektów (m.in. Akademia Pana Kleksa, Team X).",
        "Wyczucie narracji i emocji przekładające się na nieszablonowy copywriting marketingowy."
      ]
    }
  ];

  const toggleCartItem = (product: any) => {
    if (cartItems.find((item: any) => item.id === product.id)) {
      setCartItems(cartItems.filter((item: any) => item.id !== product.id));
    } else {
      setCartItems([...cartItems, product]);
      setCartOpen(true);
      setCheckoutStep("cart"); 
    }
  };

  const removeFromCart = (id: any) => {
    setCartItems(cartItems.filter((item: any) => item.id !== id));
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          body { background-color: #0a0a0a; color: #F4F4F5; font-family: 'Inter', sans-serif; -webkit-font-smoothing: antialiased; margin: 0; padding: 0; }
          * { box-sizing: border-box; }
          .animate-fade-in-up { opacity: 0; transform: translateY(30px); animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
          .delay-100 { animation-delay: 100ms; } .delay-200 { animation-delay: 200ms; } .delay-300 { animation-delay: 300ms; } .delay-400 { animation-delay: 400ms; }
          @keyframes fadeInUp { 0% { opacity: 0; transform: translateY(30px); } 100% { opacity: 1; transform: translateY(0); } }
          .product-card { cursor: pointer; }
          .product-image-container { overflow: hidden; border-radius: 8px; background: #111; position: relative; }
          .product-image { width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
          .product-card:hover .product-image { transform: scale(1.08); }
          ::-webkit-scrollbar { width: 8px; } ::-webkit-scrollbar-track { background: #0a0a0a; } ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; } ::-webkit-scrollbar-thumb:hover { background: #555; }
        `
      }} />

      <div style={{ minHeight: "100vh" }}>
        
        {cartOpen && (
          <div 
            onClick={() => setCartOpen(false)} 
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)", zIndex: 40 }} 
          />
        )}

        <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 24px" }}>
          
          <nav className="animate-fade-in-up" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "80px" }}>
            <div style={{ fontWeight: 700, letterSpacing: "-0.5px", fontSize: "1.2rem" }}>
              Mikołaj Walczak <span style={{ opacity: 0.5, fontWeight: 400 }}>© 2026</span>
            </div>
            <button onClick={() => { setCartOpen(true); setCheckoutStep("cart"); }} style={btnGhost}>
              Koszyk [{cartItems.length}]
            </button>
          </nav>

          <header className="animate-fade-in-up delay-100" style={{ marginBottom: "100px", maxWidth: "800px" }}>
            <h1 style={{ fontSize: "clamp(48px, 8vw, 96px)", fontWeight: 600, lineHeight: 1, letterSpacing: "-0.04em", marginBottom: "24px" }}>
              Nie tylko marketing.<br/>
              <span style={{ color: "#888" }}>System, który sprzedaje.</span>
            </h1>
            <p style={{ fontSize: "1.2rem", opacity: 0.8, maxWidth: "600px", lineHeight: 1.6 }}>
              E-commerce Specialist & UX/UI Designer. Łączę techniczne SEO z kreatywnym storytellingiem, by maksymalizować konwersję. Działam bez chaosu, dowożę wyniki.
            </p>
          </header>

          <section className="animate-fade-in-up delay-200" style={{ marginBottom: "120px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderBottom: "1px solid #222", paddingBottom: "16px", marginBottom: "40px" }}>
              <h2 style={{ fontSize: "2rem", fontWeight: 500, letterSpacing: "-1px" }}>Wybierz pakiety</h2>
              <span style={{ opacity: 0.5, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "1px" }}>Dodaj do koszyka</span>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
              {products.map((p: any) => {
                const isAdded = cartItems.find((item: any) => item.id === p.id);
                return (
                  <article key={p.id} className="product-card" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <div className="product-image-container" style={{ aspectRatio: "1/1" }}>
                      <img src={p.img} alt={p.name} className="product-image" />
                    </div>
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                        <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px", opacity: 0.6 }}>{p.category}</span>
                        <span style={{ fontSize: "0.9rem", fontWeight: 500 }}>{p.price}</span>
                      </div>
                      <h3 style={{ fontSize: "1.3rem", fontWeight: 500, marginBottom: "8px", letterSpacing: "-0.5px" }}>{p.name}</h3>
                      <button 
                        onClick={() => toggleCartItem(p)} 
                        style={{
                          ...btnGhost, 
                          width: "100%", 
                          marginTop: "12px", 
                          border: isAdded ? "1px solid #F4F4F5" : "1px solid #333",
                          background: isAdded ? "#1a1a1a" : "transparent"
                        }}
                      >
                        {isAdded ? "Dodano ✓ (kliknij by usunąć)" : "+ Dodaj do koszyka"}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="animate-fade-in-up delay-300" style={{ marginBottom: "80px" }}>
            <div style={{ borderBottom: "1px solid #222", paddingBottom: "16px", marginBottom: "40px" }}>
              <h2 style={{ fontSize: "2rem", fontWeight: 500, letterSpacing: "-1px" }}>Doświadczenie & Wyniki</h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
              {experience.map((exp: any, index: number) => (
                <div key={index} style={{ display: "grid", gridTemplateColumns: "1fr 3fr", gap: "24px", alignItems: "baseline" }}>
                  <div>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: "4px" }}>{exp.company}</h3>
                    <p style={{ opacity: 0.5, fontSize: "0.9rem" }}>{exp.period}</p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.2rem", fontWeight: 500, marginBottom: "16px", color: "#fff" }}>{exp.role}</h4>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                      {exp.points.map((point: any, i: number) => (
                        <li key={i} style={{ display: "flex", gap: "12px", opacity: 0.8, lineHeight: 1.5 }}>
                          <span style={{ color: "#666" }}>—</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{ marginTop: "64px", padding: "32px", background: "#111", borderRadius: "8px", display: "grid", gridTemplateColumns: "1fr 3fr", gap: "24px" }}>
              <div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 600 }}>Certyfikaty & Kursy</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", opacity: 0.8 }}>
                <p><strong>Papa SEO:</strong> Praktyczne podstawy pozycjonowania, analiza słów kluczowych, optymalizacja treści.</p>
                <p><strong>Artur Jabłoński:</strong> Social Media Manager (strategia, komunikacja, tworzenie treści).</p>
                <p><strong>Języki:</strong> Angielski (B2), Polski (Ojczysty).</p>
              </div>
            </div>
          </section>

          <footer className="animate-fade-in-up delay-400" style={{ marginTop: "100px", paddingBottom: "40px", display: "flex", justifyContent: "space-between", fontSize: "0.85rem", opacity: 0.5, borderTop: "1px solid #222", paddingTop: "40px", flexWrap: "wrap", gap: "16px" }}>
            <span>Warszawa, Polska</span>
            <span>+48 536 081 375 | mikolajcezarywalczak@gmail.com</span>
          </footer>
        </main>

        <aside style={{
          position: "fixed", top: 0, right: cartOpen ? 0 : "-100%", width: "100%", maxWidth: "480px", height: "100vh",
          background: "#111", borderLeft: "1px solid #222", padding: "40px 32px", transition: "right 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          zIndex: 50, display: "flex", flexDirection: "column"
        }}>
          
          {checkoutStep === "cart" && (
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #222", paddingBottom: "24px", marginBottom: "24px" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 500 }}>Twój koszyk</h2>
              <button onClick={() => setCartOpen(false)} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", fontSize: "1.5rem" }}>✕</button>
            </div>
          )}

          <div style={{ flex: 1, overflowY: "auto" }}>
            {checkoutStep === "cart" && (
              <>
                {cartItems.length === 0 ? (
                  <p style={{ opacity: 0.5 }}>Koszyk jest pusty. Wybierz pakiety, których potrzebuje Twój biznes.</p>
                ) : (
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "20px" }}>
                    {cartItems.map((item: any) => (
                      <li key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", background: "#1a1a1a", padding: "16px", borderRadius: "8px" }}>
                        <div>
                          <p style={{ fontWeight: 500, marginBottom: "4px" }}>{item.name}</p>
                          <p style={{ fontSize: "0.85rem", opacity: 0.6 }}>{item.category}</p>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} style={{ background: "none", border: "none", color: "#ff4444", cursor: "pointer", fontSize: "0.85rem", padding: "4px" }}>Usuń</button>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}

            {checkoutStep === "checkout" && (
              <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <button onClick={() => setCheckoutStep("cart")} style={{ background: "none", border: "none", color: "#888", cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: "8px", marginBottom: "32px", fontSize: "0.9rem" }}>
                  ← Wróć do koszyka
                </button>
                
                <h3 style={{ fontSize: "2rem", fontWeight: 500, marginBottom: "16px", letterSpacing: "-0.5px" }}>Finalizacja</h3>
                
                <p style={{ opacity: 0.7, marginBottom: "32px", lineHeight: 1.6 }}>
                  Wygląda na to, że masz w koszyku wszystko, czego potrzebujesz do skalowania biznesu. 
                  Zamiast podawać numer karty, po prostu się odezwij. Dogadamy szczegóły.
                </p>

                <div style={{ background: "#1a1a1a", padding: "24px", borderRadius: "8px", border: "1px solid #333", display: "flex", flexDirection: "column", gap: "24px" }}>
                  <a href="mailto:mikolajcezarywalczak@gmail.com" style={{ color: "#F4F4F5", textDecoration: "none", display: "flex", alignItems: "center", gap: "16px", fontSize: "1.1rem" }}>
                    <span style={{ fontSize: "1.5rem" }}>✉️</span> 
                    <span style={{ borderBottom: "1px solid #555", paddingBottom: "2px" }}>mikolajcezarywalczak@gmail.com</span>
                  </a>
                  <a href="tel:+48536081375" style={{ color: "#F4F4F5", textDecoration: "none", display: "flex", alignItems: "center", gap: "16px", fontSize: "1.1rem" }}>
                    <span style={{ fontSize: "1.5rem" }}>📞</span> 
                    <span style={{ borderBottom: "1px solid #555", paddingBottom: "2px" }}>+48 536 081 375</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          {cartItems.length > 0 && checkoutStep === "cart" && (
            <div style={{ paddingTop: "24px", borderTop: "1px solid #222", marginTop: "auto" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "24px", fontSize: "1.2rem", fontWeight: 500 }}>
                <span>Wartość:</span>
                <span>Bezcenne</span>
              </div>
              <button onClick={() => setCheckoutStep("checkout")} style={{...btnPrimary, width: "100%", padding: "16px", fontSize: "1rem" }}>
                Przejdź do kasy
              </button>
            </div>
          )}
        </aside>
      </div>
    </>
  );
}

const btnPrimary = {
  width: "100%",
  background: "#F4F4F5",
  color: "#0a0a0a",
  padding: "12px 24px",
  borderRadius: "4px",
  border: "none",
  fontWeight: 600,
  cursor: "pointer",
  transition: "opacity 0.2s",
};

const btnGhost = {
  padding: "8px 16px",
  borderRadius: "4px",
  background: "transparent",
  color: "#F4F4F5",
  fontSize: "0.9rem",
  cursor: "pointer",
  transition: "background 0.2s",
};