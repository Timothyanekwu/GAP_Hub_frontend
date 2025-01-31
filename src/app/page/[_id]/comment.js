"use client";

import React from "react";
import Star from "../../../../public/icons/star";
import Chat from "./chat";
import Reply from "./reply";
import Aeroplane from "../../../../public/icons/aeroplane";
import { comment } from "postcss";
import { useState } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";

const Comment = ({ comments, _id, setComments, isAuthorized }) => {
  const [commentInput, setCommentInput] = useState("");
  const [rating, setRating] = useState(0);
  const { user } = useAuthContext();

  const handleComment = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:7000/v1/api/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // authorization: `Bearer ${user.token}`,
      },
      credentials: "include",
      body: JSON.stringify({
        comment: commentInput,
        rating: rating,
        product_id: _id,
      }),
    });

    const result = await res.json();

    setComments((prev) => [...prev, result.newComment]);
    setCommentInput("");
  };

  return (
    <div className="w-full lg:col-span-3 xl:mr-5">
      <p className="xl:text-xl mb-6 font-semibold">
        Client’s comments and reviews
      </p>
      {/* Comment 1 */}
      <div className="w-full xl:w-[75%]">
        {comments?.map((comment, index) => {
          return (
            <Chat
              key={index}
              username={comment.username}
              info={comment.comment}
              rating={comment.rating}
              createdAt={comment.createdAt}
            />
          );
        })}

        {/* <p className="underline text-[#5A00A3] text-sm font-bold mt-5">
          Show all
        </p> */}

        {isAuthorized && (
          <form
            onSubmit={handleComment}
            className="w-full h-10 border border-neutral-500 mt-2\ xl:mt-5 py-1 rounded-full flex items-center pr-1 pl-6 justify-between"
          >
            <input
              className="w-[75%] h-full focus:outline-none bg-inherit text-sm"
              type="text"
              placeholder="Enter you comment..."
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
            />
            <div
              onClick={handleComment}
              className="h-8 w-8 rounded-full flex items-center justify-center bg-[#D9D9D9] cursor-pointer"
            >
              <Aeroplane
                width={25}
                height={25}
                fill={"black"}
                stroke={"#D9D9D9"}
              />
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Comment;
