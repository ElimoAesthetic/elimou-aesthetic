import React from "react";
import { Button } from "./ui/button";

export default function AppLayout({ children }) {
  const CALL_URL = "tel:+447828126991";
  const WHATSAPP_URL = "https://wa.me/447828126991";
  const INSTAGRAM_URL = "https://instagram.com/elimou_aesthetic";

  return (
    <div style={{minHeight:"100vh", display:"flex", flexDirection:"column"}}>
      <header style={{position:"sticky", top:0, background:"#fff", borderBottom:"1px solid #eee", zIndex:10}}>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", padding:"12px 16px", maxWidth:1100, margin:"0 auto"}}>
          <a href="/" style={{fontWeight:700, color:"#b91c1c"}}>Elimou Aesthetic</a>
          <nav style={{display:"flex", gap:16, alignItems:"center"}}>
            <a href="/treatments">Treatments</a>
            <a href="/#contact">Contact</a>
            <a href="/#map">Find Us</a>
            <Button asChild size="sm"><a href={CALL_URL}>Call</a></Button>
            <Button asChild size="sm" variant="outline"><a href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp</a></Button>
            <Button asChild size="sm" variant="secondary"><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram</a></Button>
          </nav>
        </div>
      </header>
      <main style={{flex:1}}>{children}</main>
      <footer style={{background:"#111", color:"#fff", padding:"24px 16px"}}>
        <div style={{maxWidth:1100, margin:"0 auto", display:"flex", justifyContent:"space-between", gap:16, flexWrap:"wrap"}}>
          <p>© {new Date().getFullYear()} Elimou Aesthetic – All Rights Reserved</p>
          <nav style={{display:"flex", gap:12}}>
            <a href="/" style={{color:"#ddd"}}>Home</a>
            <a href="/treatments" style={{color:"#ddd"}}>Treatments</a>
            <a href="/#contact" style={{color:"#ddd"}}>Contact</a>
            <a href="/policies" style={{color:"#ddd"}}>Policies</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}