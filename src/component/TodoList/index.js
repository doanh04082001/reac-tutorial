import { Button, Col, Input, Row, Select, Tag } from "antd";
import Todo from "../Todo";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions";
import { todoRemainingSelector } from "../../redux/selector";

const TodoList = () => {
  const [nameTodo, setNameTodo] = useState('');
  const [priority, setValuePriority] = useState('High');
  const dispatch = useDispatch();

  // để lấy data trong store dùng useSelector 
  // const todoList = useSelector((state) => state.todoList);
  // để tránh phải viết câu lệnh lấy data ở các component khác có thể tách ra 1 file lấy todoList (todoListSelector)
  const todoList = useSelector(todoRemainingSelector);

  const handleChangeNameTodo = (e) => {
    setNameTodo(e.target.value);
  }
  const handleChangePriority = (value) => {
    setValuePriority(value);
  }
  const handleAddTodo = () => {
    dispatch(addTodo({
      id: uuidv4(),
      name: nameTodo,
      priority: priority,
      completed: false
    }))
    setNameTodo('');
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map((todo) =>
          <Todo key={todo.id} id={todo.id} name={todo.name} priority={todo.priority} completed={todo.completed} />
        )}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={nameTodo} onChange={handleChangeNameTodo} />
          <Select defaultValue="Medium" value={priority} onChange={handleChangePriority} >
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type="dashed" onClick={handleAddTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
export default TodoList