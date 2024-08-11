import { styled } from "@stitches/react";
import { Button, message, Divider } from "antd";
import Wrapper from "@/components/Wrapper";
import Header from "./Header";

const Title = styled("p", {
  fontSize: "1.4em",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const DescTitle = styled("p", {
  fontSize: "1.1em",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const DescSubTitle = styled("p", {
  fontSize: "1em",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: "0",
  marginTop: "2em",
});


const Content = styled("div", {
  fontSize: "1em",
  lineHeight: 2,
  opacity: 0.75,
  marginBottom: 0,
  padding: "1em",
  width: "90%",
  textAlign: "center",
});

const LinkShareButton = styled(Button, {
  background: "#53acee",
  borderColor: "#53acee",
  color: "#ffffff",
  "&:hover": {
    backgroundColor: "#9fcbed !important",
    borderColor: "#9fcbed !important",
    color: "#ffffff !important",
  },
  "&:focus": {
    backgroundColor: "#9fcbed !important",
    borderColor: "#9fcbed !important",
    color: "#ffffff !important",
  },
});

const GodicTxt = styled("span", {
  fontFamily: 'bookkGodic, sans-serif !important',
});

const Image = styled("img", {
  width: "75%",
  maxWidth: 1024,
  marginTop: "2em",
});

type LocationProps = {
  data?: Data;
};

export default function Location({ data }: LocationProps) {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Header title={"오시는 길"} imgType={"flower"}/>
      </Divider>
      <Content>
        {data?.address?.split("\n")?.map((value, index) => {
          return (
            <div key={index}>
              {value}
              <br />
            </div>
          );
        })}
      </Content>
        <a href={data?.naver_link ?? "#"} target="_blank" >
        <LinkShareButton
          style={{ marginBottom: "2em" }}
          onClick={() => message.success("청첩장 링크가 복사되었습니다.")}
        >
        <GodicTxt>
          네이버 지도 바로가기
        </GodicTxt>
        </LinkShareButton>
        </a>
      <Content>
      <DescTitle>
        {data?.direction_public_title}
      </DescTitle>
      <DescSubTitle>
        {data?.direction_public_title_train}
      </DescSubTitle>
        {data?.direction_public_desc_train?.split("\n")?.map((value, index) => {
          return (
            <div key={index}>
              {value}
              <br />
            </div>
          );
        })}
        <br/>
      <DescSubTitle>
        {data?.direction_public_title_bus}
      </DescSubTitle>
    {data?.direction_public_desc_bus}
       <br/>
   <a href={data?.naver_link_bus ?? "#"} target="_blank">
        <Image src="./assets/LocationMap.png" />
      </a>
      <DescSubTitle>
        {data?.direction_public_call_title}
      </DescSubTitle>
        {data?.direction_public_call_desc}
        <br/><br/>
            {data?.direction_caution}
      </Content>
    </Wrapper>
  );
}
