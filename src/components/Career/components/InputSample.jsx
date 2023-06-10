// import React, { useRef, useState } from 'react';
// import UserList from './UserList';
// ​
// function App() {
//   const [inputs, setInputs] = useState({
//     username: '',
//     email: '',
//   });
// ​
//   const { username, email } = inputs;
// ​
//   const onChange = e => {
//     const { name, value } = e.target;
// ​
//     setInputs({
//       ...inputs,
//       [name]: value,
//     });
//   };
// ​
//   const [users, setUsers] = useState([
//     {
//       id: 1,
//       username: 'velopert',
//       email: 'public.velopert@gmail.com',
//     },
//     {
//       id: 2,
//       username: 'tester',
//       email: 'tester@example.com',
//     },
//     {
//       id: 3,
//       username: 'liz',
//       email: 'liz@example.com',
//     },
//   ]);
// ​
//   const nextId = useRef(4);
// ​
//   const onCreate = () => {
//     const user = {
//       id: nextId.current,
//       username,
//       email,
//     };
// ​
//     console.log(user.id);
// ​
//     setUsers(users.concat(user));
// ​
//     setInputs({
//       username: '',
//       email: '',
//     });
// ​
//     nextId.current += 1;
//   };
// ​
//   return (
//     <>
//       <div>
//         <input
//           name="username"
//           placeholder="계정명"
//           onChange={onChange}
//           value={username}
//         />
//         <input
//           name="email"
//           placeholder="이메일"
//           onChange={onChange}
//           value={email}
//         />
//         <button onClick={onCreate}>등록</button>
//       </div>
//       <UserList users={users} />
//     </>
//   );
// }
// ​
// export default App;

const [items, setItems] = useState([
  { id: 1, quantity: 1 },
  { id: 2, quantity: 1 },
])

let findIndex = items.findIndex((item) => item.id === 1)
let copiedItems = [...items]
copiedItems[findIndex].quantity = 2
setItems(copiedItems)
