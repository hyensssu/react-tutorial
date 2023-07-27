import React, { useState } from 'react';

import Header from '../common/Header';
import Container from '../common/Container';
import { useDispatch } from 'react-redux';
import { addComments } from '../redux/modules/comments';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';

export default function Create() {
  const dispatch = useDispatch();
  // 페이지 이동을 위한 셋팅
  const navigate = useNavigate();

  // state 셋팅
  const [newTitle, setNewTitle] = useState();
  const [newContent, setNewContent] = useState();

  // 추가 함수
  const onAddHandler = () => {
    // 새 리스트 객체(새로생성한 값들을 담은) 생성
    const newComment = {
      id: nanoid(),
      title: newTitle,
      content: newContent,
      author: ''
    };
    // dispatch를 통해 action creator를 발생시컴. 여기서는 action.payload파라미터에 newComment를 인자로 하는 deleteComments action creator를 발생시킴
    dispatch(addComments(newComment));
  };

  return (
    <>
      <Header />
      <Container>
        <form
          style={{
            height: '600px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly'
          }}
          onSubmit={e => {
            e.preventDefault();
            onAddHandler();
            navigate('/');
            console.log('제출!');
          }}
        >
          <div>
            <input
              placeholder="제목"
              value={newTitle}
              onChange={e => {
                setNewTitle(e.target.value);
              }}
              style={{
                width: '100%',
                height: '60px',
                fontSize: '18px',
                borderRadius: '12px',
                border: '1px solid lightgrey',
                padding: '8px',
                boxSizing: 'border-box'
              }}
            />
          </div>
          <div
            style={{
              height: '400px'
            }}
          >
            <textarea
              placeholder="내용"
              value={newContent}
              onChange={e => {
                setNewContent(e.target.value);
              }}
              style={{
                resize: 'none',
                height: '100%',
                width: '100%',
                fontSize: '18px',
                borderRadius: '12px',
                border: '1px solid lightgrey',
                padding: '12px',
                boxSizing: 'border-box'
              }}
            />
          </div>
          <button
            style={{
              width: '100%',
              height: '40px',
              border: 'none',
              color: 'white',
              borderRadius: '12px',
              backgroundColor: 'skyblue',
              cursor: 'pointer'
            }}
          >
            추가하기
          </button>
        </form>
      </Container>
    </>
  );
}
