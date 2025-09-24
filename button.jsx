import React from "react";

export function Button({ asChild, children, variant = "default", size = "md", ...props }) {
  const Tag = asChild ? "a" : "button";
  const base = "inline-flex items-center justify-center rounded-md px-4 py-2 border transition";
  const variants = {
    default: { background: "#111", color: "#fff", borderColor: "#111" },
    outline: { background: "#fff", color: "#111", borderColor: "#111" },
    secondary: { background: "#f3f4f6", color: "#111", borderColor: "#e5e7eb" }
  };
  const styles = variants[variant] || variants.default;
  const sz = size === "lg" ? { fontSize: "18px", padding: "12px 20px" } : size === "sm" ? { fontSize: "14px" } : { fontSize: "16px" };
  const style = { ...styles, ...sz, textDecoration: "none" };
  return <Tag {...props} style={style}>{children}</Tag>;
}
export default Button;