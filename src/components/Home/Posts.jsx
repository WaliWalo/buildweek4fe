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
import PostComments from "./PostComments";

export default function Posts() {
  const { posts, user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    if (user) {
      let filterMyPost = posts.filter((post) => post.user._id === user._id);
      user.following.forEach((follow) => {
        let followingPost = posts.filter(
          (post) => post.user._id === follow._id
        );
        filterMyPost = filterMyPost.concat(followingPost);
      });

      setMyPosts(
        filterMyPost.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
      );
    }
  }, [user, posts.length]);

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
                          <Card.Img
                            variant="top"
                            src={url}
                            style={{ maxHeight: "500px", objectFit: "cover" }}
                          />
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
                      <PostComments post={post} />
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
