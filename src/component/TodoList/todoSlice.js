// Store  ( store chứa nhiều reducer)
// phải dự đoán được kết quả cuối cùng  
// không được code bất đồng bộ trong reducer (callapi,setTimeout,....)

const initState = [
  { id: 1, name: 'Đọc sách', completed: false, priority: 'Hight' },
  { id: 2, name: 'Đọc truyện', completed: true, priority: 'Low' },
  { id: 3, name: 'Game', completed: false, priority: 'Medium' }
]

const TodoListReducer = (state = initState, action) => {
  switch (action.type) {
    case 'todoList/addTodo':
      return [...state, action.payload]

    case 'todoList/toggleTodoStatus':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo)
    default:
      return state;
  }
}
export default TodoListReducer;