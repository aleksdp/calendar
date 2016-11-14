const initialState = {
    'mo': [
        {
            'bt': 240,
            'et': 779
        }
    ],
    'tu': [],
    'we': [],
    'th': [
        {
            'bt': 240,
            'et': 779
        },
        {
            'bt': 1140,
            'et': 1319
        }
    ],
    'fr': [
        {
            'bt': 660,
            'et': 1019
        }
    ],
    'sa': [
        {
            'bt': 0,
            'et': 1439
        }
    ],
    'su': []
}


export default function (state = initialState, action) {
    switch (action.type){
        case '@Schedule/REMOVE_INTERVAL':
            return {...state, [action.payload.day]: (()=>{
                const list = state[action.payload.day]
                    list.splice(action.payload.index, 1)
                return list
            })()}
        case '@Schedule/ADD_INTERVAL':
            return {...state, [action.payload.day]: (()=>{
                const list = state[action.payload.day]
                list.push({bt: action.payload.int[0], et: action.payload.int[1]})
                return list
            })()}
        case '@Schedule/ALL_DAY':
            return {...state, [action.payload.day]: [{bt: 0, et: 1439}]}

        default:
            return state
    }
}