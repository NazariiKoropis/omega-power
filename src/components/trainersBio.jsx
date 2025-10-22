
export default function TrainersBio(props) {
    const divStyle = {
        border: '1px solid black',
        margin: '10px',
        padding: '5px',
        borderRadius: '5px',
        maxWidth: '300px',
        backgroundColor: '#f9f9f9',

    };

    return (
        <div style={divStyle}>
            {Object.entries(props).map(([key, value]) => (
                key = key.at(0).toUpperCase() + key.slice(1),
                <div style={divStyle}><strong>{key}:</strong> {value} </div>
            ))
            }
        </div>
    )
};