import React, { useReducer, useState } from "react";

const Hobby = () => {
    const [input, setInput] = useState("");
    const ACTIONS = {
        ADD_HOBBY: 'add-hobby',
        RESET: 'reset',
        REMOVE: 'remove'
    }
    const HobbiesReducer = (state, action) => {
        switch (action.type) {
            case ACTIONS.ADD_HOBBY:
                return { hobbies: [...state.hobbies, input] };

            case ACTIONS.REMOVE:
                {
                    let updatedHobbies = [];
                    [...state.hobbies].filter((val, index) => {
                        if (action.toRemove !== val) {
                            updatedHobbies.push(val);
                        }
                    });
                    return { hobbies: updatedHobbies }
                }

            case ACTIONS.RESET:
                return { hobbies: [] };
        }
    }
    const initialState = { hobbies: ["initial hobby 1", "Initial Hobby 2"] };
    const [state, dispatch] = useReducer(HobbiesReducer, initialState);
    return (
        <div>
            <input className="form-control col-lg-4 my-2 mx-auto"
                type="text"
                name="hobby"
                placeholder="Enter Hobby"
                onInput={(event) => {
                    setInput(event.target.value);
                }}
                value={input}
            />
            <button className="btn btn-primary my-2 m-2"
                onClick={() => {
                    dispatch({ type: ACTIONS.ADD_HOBBY });
                }}
            >
                ADD HOBBY
            </button>
            <button className="btn btn-warning my-2 m-2"
                onClick={() => {
                    dispatch({ type: ACTIONS.RESET });
                }}
            >
                RESET
            </button>
            <div>
                <h2 className="text-muted">Hobbies</h2><hr className="border border-secondary col-lg-6"/>
                {state.hobbies.map((hobby) => {
                    return (
                        <div className="row col-lg-6 mx-auto my-5">
                            <div className="col-lg-6">
                                <p>{hobby}</p>
                            </div>
                            <div className="col-lg-6">
                            <button className="btn btn-info"
                                    onClick={() => {
                                        dispatch({
                                            type: ACTIONS.REMOVE,
                                            toRemove: hobby,
                                        });
                                    }}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default Hobby;