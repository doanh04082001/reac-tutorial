// action creators là 1 function để tạo ra 1 action
// để tránh việc lặp lại các action
// Tái sử dụng hành động F
export const addTodo = (data) => {
  return {
    type: 'todoList/addTodo',
    payload: data
  }
} 

export const searchTodo = (text) => {
  return {
    type: 'todoList/searchTodo',
    payload: text
  }
} 

export const filterTodo = (status) => {
  return {
    type: 'todoList/filterTodo',
    payload: status
  }
}

export const priorityFilter = (priority) => {
  return {
    type: 'todoList/priorityTodo',
    payload : priority
  }
}

export const toggleTodoStatus = (todoId) => {
  return {
    type: 'todoList/toggleTodoStatus',
    payload: todoId
  }
} 