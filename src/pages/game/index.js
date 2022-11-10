import { useEffect, useState } from "react";
import  {Link} from "react-router-dom"
const API_URL = "https://https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter";
function Game() {
    const [ loading, setLoading ]= useState(true);

    useEffect(()=>{
        fetch(API_URL)
        .then(respose => respose.json ())
        .then(data => console.log(data))
        .catch(error  => console.log(error))
        .finally(() => setLoading(false))
    }, [])
        return (
        <div className="container">
            <section className="section">
                <nav class="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li>
                           <Link to= "/">home</Link>
                        </li>
                        <li class="is-active">
                        <Link to= "/game">Juego</Link>
                        </li>
                    </ul>
                </nav>
                {
                    loading && (
                        <div> Cargando...</div>
                    )
                }
                <h1>El Juego</h1>
            </section>
        </div>
    );
}

export default Game;
