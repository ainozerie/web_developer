const initialState = {
    location: 'home',
    messages: [{id: 1, sender: 'system', message: 'data downloaded successfully!'},
    {   id: 2,
        sender: 'personal',
        message: 'you are at the home page'
    }]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_TAB':
            return {...state, location: action.payload}
        case 'CHANGE_DISPLAY':
            return {...state, display: action.payload}
        case 'MESSAGE':
            return {...state, messages:
                [...state.messages, {
                    id: state.messages.length + 1, 
                    sender: action.payload.sender, 
                    message: action.payload.message,
                    github: action.payload.github,
                    explore: action.payload.explore
                }]
            }
        default:
            return {...state, location: 'home'}
    }
}
export default reducer;