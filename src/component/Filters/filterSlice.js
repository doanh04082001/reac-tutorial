// Store  ( store chứa nhiều reducer)
// phải dự đoán được kết quả cuối cùng  
// không được code bất đồng bộ trong reducer (callapi,setTimeout,....)

const initState = {
  search: '',
  status: 'All',
  priority: []
}

const FilterReducer = (state = initState, action) => {
  switch (action.type) {
    case 'todoList/searchTodo':
      return {
        ...state,
        search: action.payload
      }
    case 'todoList/filterTodo':
      return {
        ...state,
        status: action.payload
      }

    case 'todoList/priorityTodo':
      return {
        ...state,
        priority: action.payload
      }

    default:

      return state;
  }

}
export default FilterReducer;