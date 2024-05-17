import { ChangeEvent, useState, useCallback, FC } from "react";
import styled from "styled-components";
import { MemoList } from "../components/MemoList"
import { useMemoList } from "../hooks/useMemoList"

export const Memo: FC = () => {
  const { memos, addTodo, deleteTodo } = useMemoList()
  
  const [text, setText] = useState<string>("")
  
  const onChangeTest = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  
  const onClickAdd = () => {
    addTodo(text)
    setText("")
  }
  
  const onClickDelete = useCallback((index: number) => {
    deleteTodo(index)
  }, [deleteTodo])
  
  return (
    <div>
      <h1>簡単メモアプリ</h1>
      <input type="text" value={text} onChange={onChangeTest} />
      <SButton onClick={onClickAdd}>追加</SButton>
      <MemoList memos={memos} onClickDelete={onClickDelete} />
    </div>
  );
};

const SButton = styled.button`
  margin-left: 16px;
`
const SContainer = styled.div`
  border: solid 1px #ccc;
  padding: 16px;
  margin: 8px;
`
const SMemoWrapper = styled.div`
  display: flex;
  align-items: center;
`
