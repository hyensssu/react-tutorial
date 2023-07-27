import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../common/Header';
import Container from '../common/Container';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { deleteComments } from '../redux/modules/comments';

export default function Main() {
  // store에 저장된 리듀서를 사용하기 위한 셋
  const dispatch = useDispatch();
  const comments = useSelector(state => {
    return state.comments;
  });
  // 페이지 이동을 위한 navigate 셋
  const navigate = useNavigate();

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
              navigate('/create/');
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
        {/* comments가 배열로 들어올때만 map을 작동하게 옵셔널 체이닝을 걸어줌 - 에러방지 */}
        {comments?.map(item => (
          <div
            // jsx return안에서 map을 돌릴 때 최상위 태그에 key값 부여
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
                // 상세페이지는 내가 선택한 리스트의 상세이므로 navigate에 선택 리스트의 id값을 같이 넘겨줌
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
                  onClick={() => {
                    // 수정페이지는 내가 선택한 리스트를 수정하는 것이므로 navigate에 선택된 리스트의 id값을 같이 넘겨줌
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
                    // dispatch를 통해 action creator를 발생시컴. 여기서는 action.payload파라미터에 item.id을 인자로 갖는 deleteComments action creator를 발생시킴
                    dispatch(deleteComments(item.id));
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
