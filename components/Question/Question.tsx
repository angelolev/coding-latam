import Link from "next/link";
import React from "react";
import { IQuestion } from "../../models";

const Question: React.FC<IQuestion> = ({ id, title, comments }) => {
  return (
    <div className="question">
      <h4 className="question__title">{title}</h4>
      <div className="question__social">
        <div className="question__comments">
          <i className="icon icon-comment"></i>{" "}
          <span>{comments?.length || 0}</span>
        </div>
        {/* <div className="question__likes" onClick={handleLikeQuestion}>
			  <i className="icon icon-like"></i>{" "}
			  <span>{questionLikes?.length}</span>
			</div> */}
      </div>

      <div className="question__button">
        <Link href={`/question/${id}`}>
          <a className="btn yellow" target="_blank">
            Responder
          </a>
        </Link>
        {/* <button className="btn yellow" type="button" onClick={handleAnswer}>
			  Responder
			</button> */}
      </div>
    </div>
  );
};

export default Question;
