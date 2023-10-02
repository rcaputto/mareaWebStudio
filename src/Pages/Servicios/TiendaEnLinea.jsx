import ServiciosCard from "../../Components/ServiciosCard";
import ServiciosData from "../../assets/Data/ServiciosData";
import { useEffect } from "react";


export default function TiendaEnLinea (){
    const data = ServiciosData[3]
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
        item1 = {data.item1}
        item2 = {data.item2}
        item3 = {data.item3}
        item4 = {data.item4}
        item5 = {data.item5}
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