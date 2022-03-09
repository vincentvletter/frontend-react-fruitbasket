import React from "react";
import "./Tile.css";

function Tile({title, state, setState}) {
    return(
        <section className={title}>
            <h3>{title}
                <button type="button" onClick={() => setState(state - 1)} disabled={state === 0}>-</button>
                {state}
                <button type="button" onClick={() => setState(state + 1)}>+</button>
            </h3>
        </section>
    )
}

export default Tile;