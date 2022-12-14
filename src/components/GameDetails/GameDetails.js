import { useContext, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import * as gameService from '../../services/gameService'

export const GameDetails = ({ addComment }) => {

    const { gameId } = useParams();
    const [currentGame, setCurrentGame] = useState({});
    const navigate = useNavigate();

    const { user } = useContext(AuthContext)

    const [comment, setComment] = useState({
        username: '',
        comment: '',
    })

    const [error, setError] = useState({
        username: '',
        comment: '',
    })

    useEffect(() => {
        gameService.getOne(gameId)
            .then(result => {
                setCurrentGame(result);
            })
    }, [])

    const addCommenthandler = (e) => {
        e.preventDefault();
        addComment(gameId, `${comment.username}: ${comment.comment}`)
    }

    const onChange = (e) => {
        setComment(state => ({
            ...state,
            [e.target.name]: e.target.value
        })
        )
    }

    const validateUsername = (e) => {
        const username = e.target.value;

        if (username.length < 4) {
            setError(state => ({
                ...state,
                username: 'username must be more than 4 characters'
            }))
        }
    }


    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={currentGame.imageUrl} />
                    <h1>{currentGame.title}</h1>
                    <span className="levels">{currentGame.maxLevel}</span>
                    <p className="type">{currentGame.category}</p>
                </div>
                <p className="text">
                    {currentGame.summary}
                </p>

                {/* <p>GameId: {gameId}</p> */}

                {user._id === currentGame._ownerId
                    ? <p style={{ color: 'red' }}>Owner</p>
                    : <p style={{ color: 'red' }}>Not Owner</p>
                }

                {/* <p>UserID: {user._id}</p> */}

                {/* <p>Owner : {currentGame._ownerId}</p> */}

                {/* Bonus ( for Guests and Users ) */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/* list all comments for current game (If any) */}

                        {/* {game.comments?.map(x =>
                            <li className="comment">
                                <p>{x}</p>
                            </li>
                        )} */}
                    </ul>
                    {/* Display paragraph: If there are no games in the database */}

                    {/* {!game.comments &&
                        <p className="no-comment">No comments.</p>
                    } */}
                </div>
                {/* Edit/Delete buttons ( Only for creator of this game )  */}

                {user._id === currentGame._ownerId &&
                    <div className="buttons">
                        <Link to={`/games/${gameId}/edit`} className="button">
                            Edit
                        </Link>
                        <Link to={`/delete/${gameId}`} className="button">
                            Delete
                        </Link>
                    </div>}

            </div>

            {/* Bonus */}
            {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addCommenthandler}>

                    <input
                        type="text"
                        name="username"
                        placeholder="John Doe"
                        onChange={onChange}
                        onBlur={validateUsername}
                        value={comment.username}
                    />

                    {error.username &&
                        <div style={{ color: 'red' }}>{error.username}</div>
                    }

                    <textarea
                        name="comment"
                        placeholder="Comment......"
                        onChange={onChange}
                        value={comment.comment}
                    />

                    <input
                        className="btn submit"
                        type="submit"
                        value="Add Comment"
                    />
                </form>
            </article>
        </section>
    )
}