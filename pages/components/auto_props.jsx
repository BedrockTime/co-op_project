export const Auto_props = (prop) =>{
    return(
        <div className="auto_props">
            <img src={prop.img} className="auto_img"/>
            <h2>{prop.name}</h2>
            <h6 className="auto_disc">{prop.disc}</h6>
        </div>
    )
}