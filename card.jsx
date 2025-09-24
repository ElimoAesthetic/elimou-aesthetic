import React from "react";
export function Card({ className = "", children }) {
  return <div className={"rounded-lg"} style={{border:"1px solid #eee", boxShadow:"0 1px 3px rgba(0,0,0,0.04)"}}>{children}</div>;
}
export function CardContent({ className = "", children }) {
  return <div style={{padding:16}} className={className}>{children}</div>;
}
export default Card;