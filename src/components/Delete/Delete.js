import { useParams, useNavigate } from "react-router-dom";
import { GameContext } from "../../context/GameContext";
import { useContext } from "react";
import * as gameService from '../../services/gameService'

export const Delete = () => {

    const { gameId } = useParams();
    const navigate = useNavigate();
    const { gameDelete } = useContext(GameContext);


    const onDelete = (e) => {
        e.preventDefault()

        gameService.del(gameId)
            .then(() => {
                gameDelete(gameId)
                navigate(`/catalog`)
            })
    }

    const onClose = (e) => {
        e.preventDefault()

        navigate(`/catalog/${gameId}`)
    }


    return (
        <section id="edit-page" className="auth">
            <form id="edit" >
                <div className="container">
                    <h1>Delete Game?</h1>

                    <button
                        style={{ color: 'darkred', marginLeft: "200px" }}
                        type="button"
                        className="btn submit"
                        onClick={onDelete}>
                        Delete
                    </button>


                    <button
                        style={{ marginLeft: "20px" }}
                        type="button"
                        className="btn submit"
                        onClick={onClose}>
                        Cancel
                    </button>

                </div>
            </form>
        </section>
    )
}