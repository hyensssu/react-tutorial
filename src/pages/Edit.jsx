import React, { Fragment, useState } from 'react';
import Header from '../common/Header';
import Container from '../common/Container';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function Edit({ comments, setComments }) {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  const [updateTitle, setUpdateTitle] = useState('');
  const [updateContent, setUpdateContent] = useState('');

  const targetComment = comments.find(comment => {
    return comment.id === params.id;
  });

  // console.log(targetIndex);

  const onEditHandler = () => {
    const updateComment = {
      id: targetComment.id,
      title: updateTitle,
      content: updateContent,
      author: ''
    };

    const result = comments.map(comment => {
      if (comment.id !== params.id) {
        return comment;
      } else {
        return updateComment;
      }
    });

    setComments(result);
  };

  console.log(targetComment);

  useEffect(() => {
    // if (targetComment) {

    setUpdateTitle(targetComment.title);
    setUpdateContent(targetComment.content);
  }, [targetComment]);

  return (
    <Fragment>
      <Header />
      <Container>
        <form
          onSubmit={() => {
            onEditHandler();
            navigate('/');
          }}
          style={{
            height: '600px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly'
          }}
        >
          <div>
            <input
              placeholder="제목"
              value={updateTitle}
              onChange={e => {
                setUpdateTitle(e.target.value);
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
              value={updateContent}
              onChange={e => {
                setUpdateContent(e.target.value);
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
