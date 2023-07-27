import React from 'react';
import Header from '../common/Header';
import Container from '../common/Container';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { deleteComments } from '../redux/modules/comments';
import { useDispatch } from 'react-redux';

export default function Detail() {
  const navigate = useNavigate();
  // useParams를 이용해서 선택된 리스트의 id값을 받아옴
  const { id } = useParams();
  const dispatch = useDispatch();
  // useSelector로 store에 있는 state의 comments배열을 받아옴
  const comments = useSelector(state => state.comments);

  // comments배열의 각각 객체를 돌면서 params로 받아온id와 id값이 일치하는 객체를 찾아 받아옴
  const targetComment = comments.find(comment => {
    return comment.id === id;
  });

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
          {targetComment.title}
        </h1>
        <div
          style={{
            height: '400px',
            border: '1px solid lightgray',
            borderRadius: '12px',
            padding: '12px'
          }}
        >
          {targetComment.content}
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
              navigate(`/edit/${targetComment.id}`);
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
              // dispatch를 통해 action creator를 발생시컴. 여기서는 action.payload파라미터에 targetComment.id를 인자로 갖는 editComments action creator를 발생시킴
              dispatch(deleteComments(targetComment.id));
              navigate('/');
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
