import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
        <h1>Página não Encontrada</h1>
        <Link to={"/"}>Retornar ao Inicio</Link>
        </>
    );
}
 
export default NotFound;