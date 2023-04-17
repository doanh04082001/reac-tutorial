import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todoList;
export const todoListBySearchSelector = (state) => state.filters.search;
export const todoListByPrioritySelector = (state) => state.filters.priority
export const todoListByStatusSelector = (state) => state.filters.status;
// createSelector nhận vào các selector và 1 callback
// có thể truyền 1 hoặc nhiều selector
// trong callback thì truyền vào (những gì mà selector được thêm vào trả về )
export const todoRemainingSelector = createSelector(
  todoListSelector,
  todoListByStatusSelector,
  todoListBySearchSelector,
  todoListByPrioritySelector,
  // todoList là kết quả trả về của todoListSelector, searchText là kêt quả trả về của todoListBySearchSelector
  (todoList, status, searchText, priority) => {
    console.log(todoList);
    return todoList.filter((todo) => {
      if (status === 'All') {
        return priority.length
          ? todo.name.includes(searchText) && priority.includes(todo.priority)
          : todo.name.includes(searchText);
      }
      return todo.name.includes(searchText) &&
        (status === 'Completed' ? todo.completed : !todo.completed) &&
        (priority.length ? priority.includes(todo.priority) : true)
    });
  }
);

