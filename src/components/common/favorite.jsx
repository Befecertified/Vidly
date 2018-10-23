import React, { Component } from "react";
const Favorite = props => {
  const likeBtn = {
    cursor: "pointer",
    color: "gray"
  };

  const likedBtn = {
    cursor: "pointer",
    color: "crimson"
  };

  return (
    <i
      className="fa fa-heart"
      style={props.isLiked ? likedBtn : likeBtn}
      onClick={props.onLike}
    />
  );
};

export default Favorite;
