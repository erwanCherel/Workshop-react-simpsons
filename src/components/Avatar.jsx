import { useState } from 'react'
function Avatar({ image, firstName, lastName }) {

    const [countDonut, setCountDonut] = useState(0);

    return (
        <div>
        <img src={image} alt={firstName} />
        <p>{firstName} {lastName}</p>
        <div style={{display:"flex", justifyContent: "center", gap:"20px" }}>
            <p>x {countDonut}</p>
            <button onClick={() => setCountDonut(countDonut + 1)} >🍩</button>
        </div>
        </div>
    )
    
}

export default Avatar;