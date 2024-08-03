import { useState } from 'react';
import { Divider, Card, Button, Form, Input, Space } from "antd";
import { styled } from "@stitches/react";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
  paddingBottom: 42,
  textAlign: "center",
});

const Title = styled("p", {
  fontSize: "2vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const CommentsCnt = styled("div", {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    marginLeft: "2vh",
    marginRight: "2vh",
    maxHeight: "40vh",
    overflow: "auto",
});

const CommentCnt = styled("div", {
    display: "flex",
    flexDirection: "column",
});

const Comment = styled("p", {
    fontSize: "2vh",
    opacity: 0.85,
    marginTop: 0,
});

const CommentTitle = styled("p", {
    fontSize: "2vh",
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
    marginTop: "0.5vh",
    background: "rgb(193, 175, 165)",
    borderColor: "rgb(193, 175, 165)",
};

export default function Comments({ data }: CommentProps) {
    const [isInputMode, setIsInputMode] = useState(false);
    const [isDeleteMode, setIsDeleteMode] = useState(false);
    const [sender, setSender] = useState("");
    const [comment, setComment] = useState("");

    const inputOnChange = () => null
    const addComment = () => null;

    return <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 15 }}>
        <Title>댓글</Title>
      </Divider>
        {
            !isInputMode
            ? <Button
            size="small"
            onClick={()=>setIsInputMode(!isInputMode)}
            style={{ float: "right", marginRight: "2vh", background: "rgb(193, 175, 165)", borderColor: "rgb(193, 175, 165)", width: "fit-content" }}>
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
                    placeholder="성함"/>
                <Input
                    type="textarea"
                    style={{ borderColor: "rgb(193, 175, 165)", minHeight: "10vh"}}
                    placeholder="댓글"
                    onChange={inputOnChange}/>
                    <Space.Compact direction="horizontal">
                        <Button
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
        {data.comments.map((c, idx)=>{

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
