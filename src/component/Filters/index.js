import Search from "antd/es/transfer/search";
import { Col, Divider, Radio, Row, Select, Tag, Typography } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterTodo, priorityFilter, searchTodo } from "../../redux/actions";

const Filters = () => {

  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterPriority, setFilterPriority] = useState([]);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setSearch(e.target.value);
    dispatch(searchTodo(e.target.value));
  }

  const handleFilterStatus = (e) => {
    setFilterStatus(e.target.value);
    dispatch(filterTodo(e.target.value));
  }

  const handleFilterPriority = (priority) => {
    setFilterPriority(priority);
    dispatch(priorityFilter(priority))
  }

  return (
    <>
      <Row justify='center'>
        <Col span={24}>
          <Typography.Title
            style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
            italic={true}
          >
            Search
          </Typography.Title>
          <Search placeholder='input search text' value={search ? search : ''} onChange={handleSearch} />
        </Col>
        <Col sm={24}>
          <Typography.Paragraph
            style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
          >
            Filter By Status
          </Typography.Paragraph>
          <Radio.Group value={filterStatus} onChange={handleFilterStatus}>
            <Radio value='All'>All</Radio>
            <Radio value='Completed'>Completed</Radio>
            <Radio value='Todo'>To do</Radio>
          </Radio.Group>
        </Col>
        <Col sm={24}>
          <Typography.Paragraph
            style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
          >
            Filter By Priority
          </Typography.Paragraph>
          <Select
            mode='multiple'
            allowClear
            placeholder='Please select'
            style={{ width: '100%' }}
            value={filterPriority}
            onChange={handleFilterPriority}
          >
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
        </Col>
      </Row>
      <Divider />
    </>
  );
}
export default Filters;