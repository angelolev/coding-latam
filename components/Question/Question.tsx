import Link from "next/link";
import React, { useState } from "react";
import { IQuestion } from "../../models";
import { doc, increment, updateDoc } from "firebase/firestore";
import { database } from "../../firebase/client";

const Question: React.FC<IQuestion> = ({ id, title, comments, likes }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [currentLikes, setCurrentLikes] = useState<number>(likes);

  const handleLikeQuestion = async (id: string) => {
    const docRef = doc(database, "questions", id);

    if (isLiked) {
      setIsLiked(!isLiked);
      setCurrentLikes(currentLikes - 1);
      await updateDoc(docRef, {
        likes: increment(-1),
      });
    } else {
      setIsLiked(!isLiked);
      setCurrentLikes(currentLikes + 1);
      await updateDoc(docRef, {
        likes: increment(1),
      });
    }
  };

  return (
    <div className="question">
      <h4 className="question__title">{title}</h4>
      <div className="question__social">
        <div className="question__comments">
          <i className="icon icon-comment"></i>{" "}
          <span>{comments?.length || 0}</span>
        </div>
        <div className="question__likes" onClick={() => handleLikeQuestion(id)}>
          <i
            className={isLiked ? "icon icon-like active" : "icon icon-like"}
          ></i>{" "}
          <span>{currentLikes}</span>
        </div>
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
