import Button from "../../components/Button";
import { useNavigate } from "react-router-dom"
import background from "../../assets/chocotorta-destacada.jpg";
import background2 from "../../assets/chocotorta.jpg";
import { useState } from "react";

function Home() {
    const navigate = useNavigate();

    const onClickButton = (url) => {
        navigate(url);
    }
    const [Changebackground, setChangebackground] = useState(background)
    return (
        <section className="hero is-medium is-fullheight" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>;
            <div className="hero-body">
                <div className="container has-text-centered">
                    <Button onClick={() => onClickButton("/game")} text="Haz click para iniciar el JUEGO DE LA CHOCOTORTA" />
                    <br>
                        <button onClick={() => setChangebackground(background2)}>CAMBIAR FONDO</button>
                    </br>
                </div>
            </div>
        </section>
    )
}
export default Home;
