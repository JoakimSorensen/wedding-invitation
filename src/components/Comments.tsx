import { useState, useEffect } from 'react';
import { Divider, Card, Button, Form, Input, Space } from "antd";
import { styled } from "@stitches/react";

type ApiComment = {
  id: number
  author: string
  content: string
}

type NewComment = {
  author: string
  content: string
}

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
  paddingBottom: 42,
  textAlign: "center",
});

const Title = styled("p", {
  fontFamily: 'bookkMJ, sans-serif',
  fontSize: "1.4em",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const CommentsCnt = styled("div", {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    marginLeft: "1em",
    marginRight: "1em",
    maxHeight: "20em",
    overflow: "auto",
});

const CommentCnt = styled("div", {
    display: "flex",
    flexDirection: "column",
});

const Comment = styled("p", {
    fontFamily: 'bookkMJ, sans-serif',
    fontSize: "1em",
    opacity: 0.85,
    marginTop: 0,
});

const CommentTitle = styled("p", {
    fontFamily: 'bookkMJ, sans-serif',
    fontSize: "1em",
    fontWeight: "bold",
    opacity: 0.85,
    marginBottom: 0,
});

type Comment = {
    name: string;
    id: number;
    content: string;
}

type CommentProps = {
  data: {comments: Comment[]};
};

const cmtBtnStyle = {
    marginTop: "0.1em",
    background: "rgb(193, 175, 165)",
    borderColor: "rgb(193, 175, 165)",
};

export default function Comments() {
    const [isInputMode, setIsInputMode] = useState(false);
    const [isDeleteMode, setIsDeleteMode] = useState(false);
    const [sender, setSender] = useState("");
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState<Comment[]>([]);

    const senderOnChange = (e: React.ChangeEvent<HTMLInputElement>) => setSender(e.currentTarget.value);
    const commentOnChange = (e: React.ChangeEvent<HTMLInputElement>) => setComment(e.currentTarget.value);
    const addComment = () => null;


  const fetchComments = async () => {
    try {
      const response = await fetch('/api/comments')
      if (!response.ok) {
        throw new Error('Failed to fetch comments')
      }
      const data: Comment[] = await response.json()
      setComments(data)
    } catch (error) {
      console.error('Error fetching comments:', error)
    }
  }

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsInputMode(false);
    const newComment = {name: sender, content: comment};
    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment),
      })
      if (!response.ok) {
        throw new Error('Failed to post comment')
      }
      setComment("");
      fetchComments()
    } catch (error) {
      console.error('Error posting comment:', error)
    }
  }

    useEffect(() => {
        fetchComments()
    }, [])

    return <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 15 }}>
        <Title>댓글</Title>
      </Divider>
        {
            !isInputMode
            ? <Button
            size="small"
            onClick={()=>setIsInputMode(!isInputMode)}
            style={{ float: "right", marginRight: "1em", background: "rgb(193, 175, 165)", borderColor: "rgb(193, 175, 165)", width: "fit-content" }}>
            댓글달기
        </Button>
        : null
        }
        <CommentsCnt>
{isInputMode
        ? <Form>
            <Space.Compact direction="vertical" style={{ width:"100%" }}>
                <Input
                    type="textarea"
                    style={{ borderColor: "rgb(193, 175, 165)"}}
                    placeholder="성함"
                    onChange={senderOnChange}/>
                <Input
                    type="textarea"
                    style={{ borderColor: "rgb(193, 175, 165)", minHeight: "5em"}}
                    placeholder="댓글"
                    onChange={commentOnChange}/>
                    <Space.Compact direction="horizontal">
                        <Button
                            onClick={handleSubmit}
                            size="small"
                            style={cmtBtnStyle}>
                            추가
                        </Button>
                        <Button
                            size="small"
                            onClick={()=>setIsInputMode(!isInputMode)}
                            style={cmtBtnStyle}
                            danger>
                           취소
                        </Button>
                    </Space.Compact>
                    </Space.Compact>
            </Form>
        : null
        }
        {comments.map((c, idx)=>{

        return <CommentCnt key={`comment-key-${idx}`}>
            <CommentTitle>
                        {c.name}
            </CommentTitle>
                <Comment>{c.content}</Comment>
            <Divider style={{ marginTop: 0, marginBottom: 0 }}/>
            </CommentCnt>
        })
        }
        </CommentsCnt>
    </Wrapper>
}
