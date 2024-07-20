import { Divider, Card } from "antd";
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
    maxHeight: "20vh",
    overflow: "auto",
});

const CommentCnt = styled("div", {
    display: "flex",
    flexDirection: "column",
});

const Comment = styled("p", {
    fontSize: "1.5vh",
    opacity: 0.85,
    marginTop: 0,
});

const CommentTitle = styled("p", {
    fontSize: "1.5vh",
    fontWeight: "bold",
    opacity: 0.85,
    marginBottom: 0,
});

type CommentProps = {
  data?: Data;
};

export default function Comments({ data }: CommentProps) {
    return <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 15 }}>
        <Title>댓글</Title>
      </Divider>
        <CommentsCnt>
        {data.comments.map((c)=>{

        return <CommentCnt>
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
