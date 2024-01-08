import store from "@/store";
import { Provider } from "react-redux";

export default function WithRedux() {
    return (
        <Provider store={store}>
            
        </Provider>
    )
}