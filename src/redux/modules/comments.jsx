import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

// 초기 state 값 설정
const initialState = [
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
  },

  {
    id: nanoid(),
    title: 'title4',
    content: 'content4',
    author: 'author4'
  }
];

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  // 리듀서 : 변화를 일으키는 함수
  reducers: {
    addComments: (state, action) => {
      // spread 연산자를 활용하여 기존의 state배열의 객체 리스트들을 뿌려주고, 새로 추가하는 리스트객체를 더해줌
      return [...state, action.payload];
    },
    deleteComments: (state, action) => {
      // filter로 state 배열을 돌면서 선택된 리스트를 제외한 나머지 state 배열의 객체 리스트들을 리턴
      return state.filter(item => {
        return item.id !== action.payload;
      });
    },
    editComments: (state, action) => {
      // map으로 state 배열 안의 객체를 하나하나 돌면서 선택되지 않은 리스트들은 본래대로 리턴, 선택된 리스트는 action.payload로 교체되어 리턴
      return state.map(state => {
        if (state.id !== action.payload.id) {
          return state;
        } else {
          return action.payload;
        }
      });
    }
  }
});

export const { addComments, deleteComments, editComments } = commentsSlice.actions;
export default commentsSlice.reducer;
