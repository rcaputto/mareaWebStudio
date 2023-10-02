import ServiciosCard from "../../Components/ServiciosCard";
import ServiciosData from "../../assets/Data/ServiciosData";
import { useEffect } from "react";


export default function DesarrolloWeb (){
    const data = ServiciosData[0]
    console.log ('DATA DESARROLLO', data)
    useEffect(() => {
        window.scrollTo(0, 0); // Esto desplazará la página hacia arriba cuando se cargue esta página
      }, []);
    return (
        <>
            <ServiciosCard
                id={data.id}
                imagen1={data.imagen1}
                imagen2={data.imagen2}
                titulo={data.titulo}
                subtitulo={data.subtitulo}
                parrafo1={data.parrafo1}
                parrafo2={data.parrafo2}
                parrafo3={data.parrafo3}
                parrafo4={data.parrafo4}
                parrafo5={data.parrafo5}
                cierre={data.cierre}
            />
      </>
    )
}