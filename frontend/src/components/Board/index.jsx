/* eslint-disable react/prop-types */

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faClock } from '@fortawesome/free-solid-svg-icons'
// import { faCheck } from '@fortawesome/free-solid-svg-icons'
// import { faShare } from '@fortawesome/free-solid-svg-icons'

// <FontAwesomeIcon icon={faClock}/>
//         <FontAwesomeIcon icon={faCheck}/>
//         <FontAwesomeIcon icon={faShare}/>
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
