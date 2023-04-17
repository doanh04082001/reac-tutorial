import rootReducer from "./reducer";
import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';


// createStore nhận vào 3 tham số 
//  1 root reducer là 1 function để cập nhập lại stae dựa vào action
//  giá trị khởi tạo ban đầu
//  để cấu hình middleware (nếu tham sso thứ 2 không truyền vào thì nó sẽ trở thành tham số thứ 2) 

// đấy chính là việc tạo ra 1 kho => import vào file index.js thông qua Provider của react-redux
const store = createStore(rootReducer, composeWithDevTools());
export default store;