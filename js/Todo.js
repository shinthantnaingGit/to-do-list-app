import initialRender from "./initialRender.js";
import listener from "./listeners.js";

class Todo {
    init() {
        console.log("todo start");
        initialRender();
        listener();
    }
}

export default Todo;


