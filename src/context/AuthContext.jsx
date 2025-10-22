import { useState } from "react";

export default function AuthContext() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Email: ${email}\nPassword: ${password}`);
    };

    return (
        <div style={modalStyle}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} style={formStyle}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={inputStyle}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={inputStyle}
                    required
                />
                <button type="submit" style={buttonStyle}>Login</button>
            </form>
        </div>
    );
}

const modalStyle = {
    maxWidth: "300px",
    margin: "50px auto",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    textAlign: "center",
};

const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
};

const inputStyle = {
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
};

const buttonStyle = {
    padding: "8px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
};
