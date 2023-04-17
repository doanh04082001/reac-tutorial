// Store  ( store chứa nhiều reducer)
// phải dự đoán được kết quả cuối cùng  
// không được code bất đồng bộ trong reducer (callapi,setTimeout,....)
import { combineReducers } from "redux";
import FilterReducer from "../component/Filters/filterSlice";
import TodoListReducer from "../component/TodoList/todoSlice";

// const rootReducer = (state = {}, action) => {
//   return {
//     filters: FilterReducer(state.filters, action),
//     todoList: TodoListReducer(state.todoList, action)
//   }
// }

// khi hàm này chạy xong thì nó trả về giống như code phía trên
const rootReducer = combineReducers({
  filters: FilterReducer,
  todoList: TodoListReducer
});
export default rootReducer;