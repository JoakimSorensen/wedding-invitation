import { styled } from "@stitches/react";
import { Divider } from "antd";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
  paddingBottom: 42,
  textAlign: "center",
});

const Title = styled("p", {
  fontSize: "2.4vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const DescTitle = styled("p", {
  fontSize: "2.4vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const DescSubTitle = styled("p", {
  fontSize: "2vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: "0",
  marginTop: "2em",
});


const Content = styled("div", {
  fontSize: "2vh",
  lineHeight: 2,
  opacity: 0.75,
  marginBottom: 16,
  padding: "1em",
  width: "90%",
  textAlign: "center",
});

const Image = styled("img", {
  width: "75%",
  maxWidth: 1024,
});

type LocationProps = {
  data?: Data;
};

export default function Location({ data }: LocationProps) {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>오시는 길</Title>
      </Divider>
      <Content>
        {data?.address}
      </Content>
      <a href={data?.naver_link ?? "#"} target="_blank">
        <Image src="./assets/LocationMap.png" />
      </a>
      <Content>
      <DescTitle>
        {data?.direction_public_title}
      </DescTitle>
      <DescSubTitle>
        {data?.direction_public_title_train}
      </DescSubTitle>
        {data?.direction_public_desc_train}
        <br/>

      <DescSubTitle>
        {data?.direction_public_title_bus}
      </DescSubTitle>
    {data?.direction_public_desc_bus}
       <br/>
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
