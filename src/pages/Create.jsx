import React from 'react';

import Header from '../common/Header';
import Container from '../common/Container';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Create({ setComments }) {
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  const navigate = useNavigate();

  // 추가하기 함수
  const onAddHandler = () => {
    const newComment = {
      id: nanoid(),
      title: newTitle,
      content: newContent,
      author: ''
    };

    setComments(prev => {
      console.log(prev);
      return [...prev, newComment];
    });
  };

  return (
    <>
      <Header />
      <Container>
        <form
          onSubmit={e => {
            e.preventDefault();
            onAddHandler();
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
