import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Card,
  InputGroup,
  FormControl,
  Carousel,
} from "react-bootstrap";
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
    <Container>
      {myPosts &&
        myPosts.map((post) => {
          return (
            <>
              <Row>
                <Col>
                  <Card>
                    <Card.Text className="uptxt d-flex align-items-left">
                      <div className="profpicwrapper">
                        <a href="#">
                          <img class="profpic" src={post.user.picture} alt="" />
                        </a>
                      </div>
                      <div className="proftxtwrapper ">
                        <p className="proftxt">
                          <strong>{post.user.username}</strong>
                        </p>
                      </div>
                      <div className="iconupwrap">
                        <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                      </div>
                    </Card.Text>
                    <Carousel>
                      {post.urls.map((url) => (
                        <Carousel.Item interval={1000}>
                          <Card.Img variant="top" src={url} />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                    <Card.Body className="postcardbody">
                      <div className="iconwrapper">
                        <i className="far fa-heart fa-2x"></i>
                        <i className="far fa-comment fa-2x ml-3"></i>
                        <i className="far fa-paper-plane fa-2x ml-3"></i>
                        <i className="far fa-bookmark fa-2x "></i>
                      </div>
                      <Card.Text className="like">
                        <div className="likepic-wrapper">
                          <a href="#">
                            <img class="likepic" src={user.picture} alt="" />
                          </a>
                        </div>
                        <div className="liketext-wrapper  ml-2 mt-4">
                          <p className="liketext">
                            <strong>soberjin</strong>,&nbsp;
                            <strong>liomessi</strong>
                            &nbsp; and &nbsp; <strong>456732 others</strong>
                            &nbsp; liked this
                          </p>
                        </div>
                      </Card.Text>

                      <div className="comment">
                        <p>
                          <strong>fakermal</strong>
                          &nbsp;&nbsp; I look good!
                        </p>
                      </div>
                      <div className="comment">
                        <p>
                          <strong>seriousjin</strong>
                          &nbsp;&nbsp; yes, you do
                        </p>
                      </div>
                      <div className="comment">
                        <p>
                          <strong>enisasllani</strong>
                          &nbsp;&nbsp; I look better
                        </p>
                      </div>
                      <hr></hr>
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="basic-addon1">
                            <i className="far fa-smile"></i>
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          placeholder="Add a comment..."
                          aria-label="comment"
                          aria-describedby="basic-addon1"
                        />
                      </InputGroup>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </>
          );
        })}
    </Container>
  );
}
