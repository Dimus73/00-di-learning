import { createStore } from "redux";
import { reducer_list } from "./Redusers/reduser_list";

const store = createStore(reducer_list);

export default store;