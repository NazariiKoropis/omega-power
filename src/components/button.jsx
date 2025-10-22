import { useState } from 'react';

export default function Button({ children, onClick }) {
    const [isHover, setIsHover] = useState(false);

    const buttonStyle = {
        padding: "8px 16px",
        backgroundColor: isHover ? "#c412b2" : "#0056b3",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        margin: "10px",
        maxWidth: "150px",
        minWidth: "100px",
        textAlign: "center",
        fontSize: "16px",
        transition: "background-color 0.3s ease",
    };

    return (
        <button
            style={buttonStyle}
            onClick={onClick}
            onMouseLeave={() => setIsHover(false)}
            onMouseEnter={() => setIsHover(true)}
        >{children}</button>
    );

}
