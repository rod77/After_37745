// category:"zapatillas",
// 		content:"",
// 		description:"ZAPATILLAS GRAND COURT. ZAPATILLAS MINIMALISTAS CON UN ESTILO CLÁSICO",		
//         img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c9598a1cf2924169888aa9810136e6d6_9366/Zapatillas_Grand_Court_Blanco_F36485_01_standard.jpg",		
//         img2:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f8daa3996318420490c6a9810136ff67_9366/Zapatillas_Grand_Court_Blanco_F36485_02_standard_hover.jpg",
// 		name:"mock - Zapatillas Grand Court",
// 		price:12499,
// 		stock:5

export const Item = ({ category, img, img2, name }) => {
    return (
        <>
            <h1>{name}</h1>
            <h3>{category}</h3>
            <img src={img} alt={category} />
            <img src={img2} alt={category} />
            <br />
            <button>Ver Mas</button>
            <hr />
        </>
    )
}
