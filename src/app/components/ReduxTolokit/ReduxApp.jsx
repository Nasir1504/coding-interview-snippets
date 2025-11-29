import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import ReduxExample from "./ReduxExample";

function ReduxApp() {
    return (
        <Provider store={store}>
            <ReduxExample />
        </Provider>
    );
}

export default App;
