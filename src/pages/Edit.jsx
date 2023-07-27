import React, { Fragment, useEffect, useState } from 'react';
import Header from '../common/Header';
import Container from '../common/Container';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { editComments } from '../redux/modules/comments';

export default function Edit() {
  const navigate = useNavigate();

  const { id } = useParams();

  const comments = useSelector(state => state.comments);
  const dispatch = useDispatch();

  // 선택한 리스트 겟
  const targetComment = comments.find(item => {
    return item.id === id;
  });

  // state 생성
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  // 마운트 시점에, targetComment가 들어와 있을 때(안정성고려), set해줌. -> 첫 렌더링 후 화면에 선택한 리스트 내용 보존 목적
  useEffect(() => {
    if (targetComment) {
      setEditTitle(targetComment.title);
      setEditContent(targetComment.content);
    }
  }, [targetComment]);

  // 수정 함수 생성
  const onEditHandler = () => {
    // 수정된 리스트 객체(수정한 값들을 담은) 생성
    const editComment = {
      id: targetComment.id,
      title: editTitle,
      content: editContent,
      author: ''
    };
    // dispatch를 통해 action creator를 발생시컴. 여기서는 action.payload파라미터에 editComment를 인자로 하는 editComments action creator를 발생시킴
    dispatch(editComments(editComment));
  };

  return (
    <Fragment>
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
            onEditHandler();
            navigate('/');
          }}
        >
          <div>
            <input
              placeholder="제목"
              value={editTitle}
              onChange={e => {
                setEditTitle(e.target.value);
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
              value={editContent}
              onChange={e => {
                setEditContent(e.target.value);
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
              backgroundColor: 'orange',
              cursor: 'pointer'
            }}
          >
            수정하기
          </button>
        </form>
      </Container>
    </Fragment>
  );
}
