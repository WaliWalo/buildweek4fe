import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getComments } from "../../api/commentsApi";

export default function Posts() {
  const { posts, user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [myPosts, setMyPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (user) {
      let filterMyPost = posts.filter((post) => post.user._id === user._id);
      user.following.forEach((follow) => {
        let followingPost = posts.filter(
          (post) => post.user._id === follow._id
        );
        filterMyPost = filterMyPost.concat(followingPost);
      });
      const allComments = async () => await fetchComments();
      allComments();
      filterMyPost.forEach((post) => {
        const postComments = comments.filter(
          (comment) => comment.postId === post._id
        );
        post.comments = postComments;
      });
      setMyPosts(
        filterMyPost.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
      );
    }
  }, [user, posts.length, comments.length]);

  const fetchComments = async () => {
    const response = await getComments();
    if (response.statusText === "OK") {
      setComments(response.data);
    }
  };
  return (
    <Container>{myPosts && myPosts.map((post) => post.content)}</Container>
  );
}
