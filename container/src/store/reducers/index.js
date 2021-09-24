import { combineReducers } from "redux";
import measureReducer from "./measures.reducer";

let rootReducer = {
  measure: measureReducer,
};
try {
  const Fontsreducers = require("Fonts/reducers").default;
  rootReducer = { ...rootReducer, ...Fontsreducers };
} catch (e) {
  console.warn("Fonts/reducers is not found");
}

try {
  const Colorsreducers = require("Colors/reducers").default;
  rootReducer = { ...rootReducer, ...Colorsreducers };
} catch (e) {
  console.warn("Colors/reducers is not found");
}
console.log(rootReducer);

export default combineReducers(rootReducer);
