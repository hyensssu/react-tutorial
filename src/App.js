import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Detail from './pages/Detail';
import Create from './pages/Create';
import Edit from './pages/Edit';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { nanoid } from 'nanoid';
import { useState } from 'react';

function App() {
  // state
  const [comments, setComments] = useState([
    {
      id: nanoid(),
      title: 'title1',
      content: 'content1',
      author: 'author1'
    },
    {
      id: nanoid(),
      title: 'title2',
      content: 'content2',
      author: 'author2'
    },
    {
      id: nanoid(),
      title: 'title3',
      content: 'content3',
      author: 'author3'
    }
  ]);

  return (
    // 페이지 이동에 사용되는 Route 태그를 위해선 Routes로 먼저 감싸야 한다.
    <Routes>
      {/* path="/"이기 때문에 '<주소>/'인 주소로 접속할 경우 Main 컴포넌트가 화면에 보여지게 된다.  */}
      <Route path="/" element={<Main comments={comments} setComments={setComments} />} />
      <Route path="/detail/:id" element={<Detail comments={comments} />} />
      <Route path="/create" element={<Create setComments={setComments} />} />
      <Route path="/edit/:id" element={<Edit comments={comments} setComments={setComments} />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
