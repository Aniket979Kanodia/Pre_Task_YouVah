import React from "react";
import { useState } from "react";
import "../componentStyles/QuestionsCard.css" 
export const QuestionCard=(props)=>{
    const [flag, setFlag] = useState(true);
    
  function reverse() {
    setFlag(!flag);
  }

    return(
        // <div>{props.props.Question}</div>
        <div className="QuestionCard-Div">
      <h1>
        {flag && (
          <div className="Question-Box-1">
            <p className="Question-Para">{props.props.Question}</p>
            <div className="Plus-Btn" onClick={() => reverse()}>
              {/* <img src={PlusImg} className="Plus-Img"></img> */}
              +
            </div>
          </div>
        )}
      </h1>
      <h1>
        {!flag && (
          <div className="Question-Box-2">
            <div>
              <p className="Question-Para-2">{props.props.Question}</p>
              <p className="Question-Solution">{props.props.Answer}</p>
            </div>
            <div className="Minus-Btn" onClick={() => reverse()}>
              {/* <img
                src={MinusImg}
                className="Minus-Img"
                onClick={() => reverse()}
              ></img> */}
              -
            </div>
          </div>
        )}
      </h1>
    </div>
    )
}