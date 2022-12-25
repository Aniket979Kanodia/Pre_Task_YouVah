import React from "react";
import { Questions } from "./QuestionsList";
import { QuestionCard } from "./QuestionCard";
import "../componentStyles/Questions.css"
export default function QuestionsGrid(){
    return(

        <div className="container-questions">
            <div className="questions-header">
                <div className="questions-header-sub">

                </div>
                <div className="questions-header-main">

                </div>
                <div className="grid-box">

                <div className="questions-grid">
                    {Questions.map((question)=>(
                        <div className="question-grid-item">
                            {<QuestionCard props={question} />}
                        </div>
                    ))}

                    </div>
                </div>
            </div>
        </div>
    )
}