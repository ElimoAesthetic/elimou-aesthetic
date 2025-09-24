import React, { useMemo, useState } from "react";
import AppLayout from "../../components/AppLayout";
import { Button } from "../../components/ui/button";

export default function TreatmentsIndex() {
  const CALL_URL = "tel:+447828126991";
  const WHATSAPP_URL = "https://wa.me/447828126991";
  const INSTAGRAM_URL = "https://instagram.com/elimou_aesthetic";

  const injectables = [
    { title: "PRP Therapy", slug: "/treatments/prp-therapy", blurb: "Natural regeneration using your own plasma." },
    { title: "PRF Under-Eye", slug: "/treatments/prf-under-eye", blurb: "Brighten dark circles and under-eye hollowness." },
    { title: "Botox", slug: "/treatments/botox", blurb: "Anti-wrinkle injections for smoother expression lines." },
    { title: "Dermal Fillers", slug: "/treatments/dermal-fillers", blurb: "Restore volume and refine contours." },
    { title: "Profhilo", slug: "/treatments/profhilo", blurb: "Bio-remodelling for hydration and elasticity." },
    { title: "Skin Booster", slug: "/treatments/skin-booster", blurb: "Deep hydration and glow without volume." },
    { title: "Mesotherapy", slug: "/treatments/mesotherapy", blurb: "Custom vitamin cocktails for skin vitality." },
    { title: "Rich MesoTox", slug: "/treatments/rich-mesotox", blurb: "PRP + Meso + micro-dosed toxin for glass skin." },
    { title: "Fat Dissolving", slug: "/treatments/fat-dissolving", blurb: "Target stubborn fat, refine jawline and body." },
    { title: "IV Drips & Vitamin Shots", slug: "/treatments/iv-vitamin-therapy", blurb: "Energy, immunity and skin glow support." },
  ];

  const facials = [
    { title: "Hydrafacial", slug: "/treatments/hydrafacial", blurb: "6-in-1 deep cleanse, hydration and instant radiance." },
    { title: "Microneedling", slug: "/treatments/microneedling", blurb: "Collagen induction for smoother, firmer skin." },
    { title: "Deep Clean Facial (Dermalogica)", slug: "/treatments/deep-clean-facial", blurb: "Purify and rebalance with pro-grade care." },
    { title: "LED Light Therapy", slug: "/treatments/led-therapy", blurb: "Clinically proven wavelengths to heal and calm." },
    { title: "Microdermabrasion", slug: "/treatments/microdermabrasion", blurb: "Gentle resurfacing to polish and brighten." },
  ];

  const [q, setQ] = useState("");
  const all = useMemo(() => ([
    ...injectables.map(i => ({ ...i, category: "Injectables" })),
    ...facials.map(i => ({ ...i, category: "Facial & Skin" })),
  ]), []);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return all;
    return all.filter(item => (
      item.title.toLowerCase().includes(term) ||
      item.blurb.toLowerCase().includes(term) ||
      item.category.toLowerCase().includes(term)
    ));
  }, [q, all]);

  return (
    <AppLayout>
      <section style={{padding:"48px 16px", textAlign:"center", background:"#fff0f5"}}>
        <h1 style={{fontSize:36, marginBottom:8}}>Treatments</h1>
        <p>Explore our full range of advanced treatments. Book via Call, WhatsApp, or Instagram DM.</p>
        <div style={{maxWidth:520, margin:"16px auto 0"}}>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search treatments (e.g. Botox, Hydrafacial, PRP)"
            style={{width:"100%", padding:"12px 14px", border:"1px solid #ddd", borderRadius:10}}
          />
        </div>
      </section>
      <section style={{maxWidth:1100, margin:"0 auto", padding:"32px 16px"}}>
        <h2>Injectables</h2>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(240px,1fr))", gap:16, marginBottom:24}}>
          {injectables.map(item => (
            <div key={item.slug} style={{border:"1px solid #eee", borderRadius:12, padding:16}}>
              <h3 style={{marginTop:0}}>{item.title}</h3>
              <p style={{color:"#555"}}>{item.blurb}</p>
              <div style={{display:"flex", gap:8, marginTop:8}}>
                <Button asChild variant="secondary"><a href={item.slug}>View</a></Button>
                <Button asChild variant="outline"><a href={CALL_URL}>Call</a></Button>
              </div>
            </div>
          ))}
        </div>
        <h2>Facial & Skin Treatments</h2>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(240px,1fr))", gap:16}}>
          {facials.map(item => (
            <div key={item.slug} style={{border:"1px solid #eee", borderRadius:12, padding:16}}>
              <h3 style={{marginTop:0}}>{item.title}</h3>
              <p style={{color:"#555"}}>{item.blurb}</p>
              <div style={{display:"flex", gap:8, marginTop:8}}>
                <Button asChild variant="secondary"><a href={item.slug}>View</a></Button>
                <Button asChild variant="outline"><a href={WHATSAPP_URL}>WhatsApp</a></Button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {q && (
        <section style={{background:"#fff7fb", padding:"24px 16px"}}>
          <div style={{maxWidth:1100, margin:"0 auto"}}>
            <h3>Search Results</h3>
            {filtered.length === 0 ? (
              <p>No matches. Try “Botox” or “Hydrafacial”.</p>
            ) : (
              <ul style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(240px,1fr))", gap:16, listStyle:"none", padding:0}}>
                {filtered.map(item => (
                  <li key={item.slug} style={{border:"1px solid #eee", borderRadius:12, padding:16}}>
                    <p style={{color:"#b91c1c", fontSize:12, margin:"0 0 6px"}}>{item.category}</p>
                    <strong>{item.title}</strong>
                    <p style={{color:"#555"}}>{item.blurb}</p>
                    <Button asChild variant="secondary"><a href={item.slug}>Open</a></Button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}
    </AppLayout>
  );
}