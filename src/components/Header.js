import React from "react"

const HeaderStyles = {
  height: "60px",
  width: "100%",
  boxShadow: "0 1px 8px 2px #e2e2e2",
  position: "fixed",
  top: 0,
  backgroundColor: "#fff",
  zIndex: 1
}

export default function Header() {
  return <div style={HeaderStyles}></div>
}
