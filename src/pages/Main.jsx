import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../common/Header';
import Container from '../common/Container';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function Main({ comments, setComments }) {
  const navigate = useNavigate();

  // 삭제 함수
  const onDeleteHandler = id => {
    const filteredComments = comments.filter(comment => {
      return comment.id !== id;
    });
    setComments(filteredComments);
  };
  return (
    <>
      <Header />
      <Container>
        <div
          style={{
            display: 'flex',
            justifyContent: 'end',
            padding: '12px'
          }}
        >
          <button
            onClick={() => {
              navigate('/create');
            }}
            style={{
              border: 'none',
              padding: '8px',
              borderRadius: '6px',
              backgroundColor: 'skyblue',
              color: 'white',
              cursor: 'pointer'
            }}
          >
            추가
          </button>
        </div>
        {/*  // comments 배열 안의 원소를 하나씩 순회하면서 map의 크기만큼 새로운 배열을 만들어 준다. */}
        {comments?.map(item => (
          <div
            // map 내부에 key값 관련 warning이 발생하지 않도록 합니다.
            key={item.id}
            style={{
              backgroundColor: '#EEEEEE',
              height: '100px',
              borderRadius: '24px',
              marginBottom: '12px',
              display: 'flex',
              padding: '12px 16px 12px 16px'
            }}
          >
            <div
              onClick={() => {
                navigate(`/detail/${item.id}`);
              }}
              style={{
                flex: 4,
                borderRight: '1px solid lightgrey',
                cursor: 'pointer'
              }}
            >
              <h2>{item.title}</h2>
              <p
                style={{
                  width: '300px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}
              >
                {item.content}
              </p>
            </div>
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'end',
                justifyContent: 'space-around',
                gap: '12px'
              }}
            >
              <div>{item.author}</div>
              <div>
                <button
                  // 메인 페이지(/), 상세페이지(/detail/:id)에서 수정 버튼 클릭 시 수정 컴포넌트 보여주기
                  onClick={() => {
                    navigate(`/edit/${item.id}`);
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
                    onDeleteHandler(item.id);
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
            </div>
          </div>
        ))}
      </Container>
    </>
  );
}
