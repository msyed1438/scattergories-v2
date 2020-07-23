//Hooks
import React, { useEffect, useReducer, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

//Helpers
import generateInitialCategoryState from '../../../../helpers/generateInitialCategoryState'
import createArrayFromOneThroughN from '../../../../helpers/createArrayFromOneThroughN'

//Components
import CategoryInput from './CategoryInput'

//Actions
import { createCategories } from '../../../reducks/ducks/index'

//Routing
import { Link } from 'react-router-dom'

//Socket
import clientSocket from '../../socketInstance'

const CategoryForm = () => {
    const dispatch = useDispatch() //Dispatch hook to redux store
    const numberOfCategories = useSelector(state => state.numberOfCategories) // e.g. 3
    const roomName = useSelector(state => state.roomName)

    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }), // <--- Reducer
        generateInitialCategoryState(numberOfCategories) // <---Initial State: e.g. generateNumberOfInitialCategories(3) -> Output:  {category1: '', category2: '', category3: ''}
    )

    const [buttonDisabled, setButtonDisabled] = useState(true)

    useEffect(() => {
        const categories = Object.values(userInput)
        if (categories.every(category => category.length >= 3)) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }, [userInput])

    const handleCreateGameRoomButtonClick = () => {
        const categories = Object.values(userInput)
        const categoriesAction = createCategories(categories)

        dispatch(categoriesAction)

        const roomConfig = {
            roomName,
            categories,
        }

        clientSocket.emit('CREATE_GAME_ROOM', roomConfig)
    }

    const oneToNumOfCategories = createArrayFromOneThroughN(numberOfCategories) // e.g. createArrayFromOneThroughN(3) -> [1, 2, 3]

    const handleChange = evt => {
        const name = evt.target.name
        const newValue = evt.target.value
        setUserInput({ [name]: newValue })
    }

    //TODO: Add form validation to disable button until all entries are changed
    return (
        <div className="page-container">
            <h1 className="create-game-title">Create Your Categories!</h1>

            <div className="category-inputs">
                {oneToNumOfCategories.map((num, index) => {
                    return (
                        <CategoryInput
                            num={num}
                            handleChange={handleChange}
                            index={index}
                            key={index}
                            userInput={userInput}
                        />
                    )
                })}
            </div>
            <Link
                to="/game-room"
                style={{
                    textDecoration: 'none',
                    pointerEvents: buttonDisabled ? 'none' : 'auto',
                }}
            >
                <button
                    className="create-game-form-button"
                    type="submit"
                    onClick={handleCreateGameRoomButtonClick}
                    disabled={buttonDisabled}
                >
                    Create Game
                </button>
            </Link>
        </div>
    )
}

export default CategoryForm
