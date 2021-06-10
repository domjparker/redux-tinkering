const initialWagonState = {
  supplies: 100,
  distance: 0, 
  days: 0,
  cash: 200,
};

const gameReducer = (state = initialWagonState, action) => {
  switch (action.type) {
    case 'gather': {
      return {
        supplies: state.supplies + 15,
        distance: state.distance,
        days: state.days + 1,
        cash: state.cash,
      };
    };
    case 'travel': {
      if (state.supplies < 20) {
        return state;
      } else {
        return {
        supplies: state.supplies - (20 * action.payload),
        distance: state.distance + (10 * action.payload),
        days: state.days + action.payload,
        cash: state.cash,
        }
      };
    };
    case 'tippedWagon': {
      return {
        supplies: state.supplies - 30,
        distance: state.distance,
        days: state.days + 1,
        cash: state.cash,
      };
    };
    case 'sell': {
      if (state.supplies < 20) {
        return state;
      } else {
        return {
        supplies: state.supplies - 20,
        distance: state.distance,
        days: state.days,
        cash: state.cash + 5,
        };
      } ;
    };
    case 'buy': {
      if (state.cash < 15) {
        return state;
      } else {
        return {
          supplies: state.supplies + 25,
          distance: state.distance,
          days: state.days,
          cash: state.cash - 15,
        };
      };
    };
    case 'theft': {
      return {
        supplies: state.supplies,
        distance: state.distance,
        days: state.days,
        cash: state.cash / 2,
      };
    };
    default: {
      return state;
    };
  };
};

let wagon = gameReducer(undefined, {});
console.log("initial", wagon);
wagon = gameReducer(wagon, {type: 'travel', payload: 1 });
console.log("travel 1", wagon);
wagon = gameReducer(wagon, {type: 'gather'});
console.log("gather", wagon);
wagon = gameReducer(wagon, {type: 'tippedWagon'});console.log("tippedWagon", wagon);
wagon = gameReducer(wagon, {type: 'travel', payload: 3});
console.log("travel 3", wagon);
wagon = gameReducer(wagon, {type: 'travel', payload: 1});
console.log("travel 1", wagon);
wagon = gameReducer(wagon, {type: 'sell'});
console.log("sell", wagon);
wagon = gameReducer(wagon, {type: 'buy'});
console.log("buy", wagon);
wagon = gameReducer(wagon, {type: 'theft'});
console.log("theft", wagon);
wagon = gameReducer(wagon, {type: 'theft'});
console.log("theft", wagon);
wagon = gameReducer(wagon, {type: 'theft'});
console.log("theft", wagon);
wagon = gameReducer(wagon, {type: 'theft'});
console.log("theft", wagon);
wagon = gameReducer(wagon, {type: 'buy'});
console.log("buy", wagon);