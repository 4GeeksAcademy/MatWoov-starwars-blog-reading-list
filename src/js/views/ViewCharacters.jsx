import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { CardCharacters } from "../component/CardCharacters.jsx";


export const ViewCharacters = () => {
    const { store, actions } = useContext(Context);


    return (
        <div class="container text-center">
            <h1 className="mb-5 text-white">Characters</h1>
            <div class="row row-cols-2 row-cols-lg-5 g-lg-3 text-center d-flex justify-content-center">
                    {store.users.map((user) =>
                    <CardCharacters key={user.id} name={user.name} id={user.uid} />
                )}
            </div>
        </div>
    )
}