import { combineReducers } from 'redux';

const INITIAL_STATE = {
  mockItems: [
    {
      meal: 'Chicken Bryani',
      restaurant: 'Adels Halal',
      address: '33 Beaver Street 10004',
      lat:40.7484,
      lon:-73.9857, 
      status: 'open',
      distance: .5,
      rating: 4.6
    },

    {
      restaurant: 'Albaiks Emporium',
      address: '27 John Street 10005',
      lat:40.7031,
      lon:-74.0160, 
      status: 'open',
      distance: .7,
      rating: 3.9
    },
    {
      restaurant: 'Salims Halal',
      address: '27 John Street 10005',
      lat:40.7302,
      lon:-74.0006, 
      status: 'open',
      distnace: 1.1,
      rating: 4.9
    },
    {
      restaurant: 'Masouds Place',
      address: '27 John Street 10005',
      lat:40.7505,
      lon:-73.9934, 
      status: 'closed',
      distance: 1.4,
      rating: 4.7
    },
    {
      restaurant: 'Abdullahs Chow',
      address: '27 John Street 10005',
      lat:40.7489,
      lon:-73.9680, 
      status: 'open',
      distance: 1.9,
      rating: 3.7
    },
    {
      restaurant: 'Abdullahs Chow',
      address: '27 John Street 10005',
      lat:40.7359,
      lon:-73.9911, 
      status: 'open',
      distance: 1.9,
      rating: 3.7
    }
  ]
};

const ourReducer = (state = INITIAL_STATE, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "CLOSE_MODAL_1":
      return {
        ...state,
        first: action.value,
        second: action.value1

      }
      break;

    case "CLOSE_MODAL_12":
      return {
        ...state,
        first: action.value,


      }
      break;

    case "CLOSE_MODAL_13":
      return {
        ...state,
        token: [...state.token, action.value],


      }


      break;

    case "MES":
      return {
        ...state,

        messageSent: [...state.messageSent, action.value]

      }
      break;

    case "RESPONSE_SENT":
      return {
        ...state,

        responseSent: [...state.responseSent, action.value]

      }
      break;

    case "RESPONSE_RECEIVED":
      return {
        ...state,

        responseReceived: [...state.responseReceived, action.value]

      }
      break;

    case "CLOSE_MODAL_14":
      return {
        ...state,
        token1: [...state.token1, action.value],
        messageReceived: [...state.messageReceived, action.value1]


      }
      break;

    case "SCAN":
      newState.scan += action.value;
      break;
  }
  return newState;
};


export default combineReducers({
  reducer: ourReducer,
});