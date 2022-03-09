import React from 'react';
import {useState} from 'react';
import {useForm} from "react-hook-form";
import Tile from "./Component/Tile";
import './App.css';

function App() {

    const [strawberry, setStrawberry] = useState(0);
    const [banana, setBanana] = useState(0);
    const [apple, setApple] = useState(0);
    const [kiwi, setKiwi] = useState(0);

    const {register, handleSubmit} = useForm();

    let tester = "";

    function reset() {
        setStrawberry(strawberry - strawberry)
        setBanana(banana - banana)
        setApple(apple - apple)
        setKiwi(kiwi - kiwi)
    }

    function onFormSubmit(data) {
        console.log(data);
        console.log(`Aardbeien ${strawberry},\nBananen ${banana},\nAppels ${apple},\nKiwi's ${kiwi}`);
        reset();
    }
    if(strawberry >= 5) {
        tester = "red";
    }

    return (
        <>
            <div>
                <h1>Fruitmand bezorgservice</h1>

                <Tile
                    title=" 🍓 Aardbeien 🍓 "
                    state={strawberry}
                    setState={setStrawberry}
                    tester={tester}
                />
                {strawberry >= 5 &&  <p>🍓You love them strawberry's🍓</p>}
                <Tile
                    title=" 🍌 Bananen 🍌 "
                    state={banana}
                    setState={setBanana}
                />
                {banana >= 5 && <p> 🍌 My shit is banana's 🍌</p>}
                <Tile
                    title=" 🍏 Appels 🍏 "
                    state={apple}
                    setState={setApple}
                />
                <Tile
                    title=" 🥝 Kiwi's 🥝 "
                    state={kiwi}
                    setState={setKiwi}
                />
                <button className="button" type="reset" onClick={reset}>Reset</button>
            </div>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <label htmlFor="first-name">
                    Voornaam:
                    <input
                        type="text"
                        id="first-name"
                        {...register("first-name")}
                    />
                </label>
                <label htmlFor="last-name">
                    Achternaam:
                    <input
                        type="text"
                        id="last-name"
                        {...register("last-name")}
                    />
                </label>
                <label htmlFor="age">
                    Leeftijd:
                    <input
                        type="number"
                        id="age"
                        {...register("age")}
                    />
                </label>
                <label htmlFor="zip-code">
                    Postcode:
                    <input
                        type="text"
                        id="zip-code"
                        {...register("zip-code")}
                    />
                </label>
                <label htmlFor="delivery-frequency">
                    Bezorgfrequentie:
                    <select {...register("delivery-frequency")} id="delivery-frequency">
                        <option value="every-week">iedere week</option>
                        <option value="every-other-week">om de week</option>
                        <option value="every-month">iedere maand</option>
                    </select>
                </label>
                <label htmlFor="during-the-day">
                    Overdag:
                    <input
                        type="radio"
                        id="during-the-day"
                        name="when-to-deliver"
                        value="during-the-day"
                        {...register("when-to-deliver")}
                    />
                </label>
                <label htmlFor="during-the-evening">
                    's Avonds
                    <input
                        type="radio"
                        id="during-the-evening"
                        name="when-to-deliver"
                        value="during-the-evening"
                        {...register("when-to-deliver")}
                    />
                </label>
                <label htmlFor="comments">
                    Opmerkingen:
                    <textarea
                        id="comments"
                        {...register("comments")}
                        rows="4"
                        cols="40"
                        placeholder="Heeft u nog een opmerking?"
                    >
                    </textarea>
                </label>
                <label htmlFor="conditions">
                    Ik ga akkoord met de voorwaarden
                    <input
                        type="checkbox"
                        id="conditions"
                        {...register("conditions")}
                    />
                </label>
                <button type="reset" className="button">
                    reset
                </button>
                <button type="submit" className="button">
                    Versturen
                </button>
            </form>
        </>
    );
}

export default App;
