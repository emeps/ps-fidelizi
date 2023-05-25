/* eslint-disable react/prop-types */
import { BoardWrapper } from "./BoardWrapper.style";

export const Board = (props) => {
  return (
    <>
        <BoardWrapper>
            {props.children}
        </BoardWrapper>
    </>
  );
};
