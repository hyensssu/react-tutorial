import React from 'react';
import Header from '../common/Header';
import Container from '../common/Container';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Detail({ comments }) {
  // useParams는 Parameter(파라미터) 값을 URL을 통해서 넘겨서 넘겨받은 페이지에서 사용할 수 있도록 도와준다.
  const { id } = useParams();
  const navigate = useNavigate();

  const comment = comments.find(item => item.id === id);

  return (
    <>
      <Header />
      <Container>
        <h1
          style={{
            border: '1px solid lightgray',
            borderRadius: '12px',
            padding: '12px'
          }}
        >
          {comment.title}
        </h1>
        <div
          style={{
            height: '400px',
            border: '1px solid lightgray',
            borderRadius: '12px',
            padding: '12px'
          }}
        >
          {comment.content}
        </div>
        <div
          style={{
            marginTop: '12px',
            display: 'flex',
            justifyContent: 'end'
          }}
        >
          <button
            onClick={() => {
              // 메인 페이지(/), 상세페이지(/detail/:id)에서 수정 버튼 클릭 시 수정 컴포넌트 보여주기
              navigate('/edit');
            }}
            style={{
              border: 'none',
              padding: '8px',
              borderRadius: '6px',
              backgroundColor: 'orange',
              color: 'white',
              cursor: 'pointer',
              marginRight: '6px'
            }}
          >
            수정
          </button>
          <button
            onClick={() => {
              alert('삭제할까?');
            }}
            style={{
              border: 'none',
              padding: '8px',
              borderRadius: '6px',
              backgroundColor: 'red',
              color: 'white',
              cursor: 'pointer'
            }}
          >
            삭제
          </button>
        </div>
      </Container>
    </>
  );
}
