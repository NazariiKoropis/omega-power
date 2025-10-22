import { useState } from "react";
import logo from "../assets/logo.png";
import AuthContext from "../context/AuthContext";

export default function Header() {
    const [now, nowSet] = useState(new Date());

    setInterval(() => {
        nowSet(new Date());
    }, 1000);

    return (
        <>
            <header style={headerStyle}>
                <img src={logo} style={imgStyle} alt="Omega-power logo" width="100px" loading="lazy" />
                <h2 style={h2Style}>Omega Power</h2>
                <h2 style={h2Style}>{now.toLocaleTimeString()}</h2>
            </header>
        </>
    );
}

const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#f5f5f5",
};

const imgStyle = {
    maxWidth: "100%",
    height: "auto",
};

const h2Style = {
    fontSize: "24px",
    margin: "0",
};  