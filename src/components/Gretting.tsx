import { styled } from "@stitches/react";
import { Divider } from "antd";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
});

const Title = styled("p", {
  fontFamily: 'bookkMJ, sans-serif',
  fontSize: "1.4em",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const Content = styled("div", {
  fontFamily: 'bookkMJ, sans-serif',
  fontSize: "1em",
  lineHeight: 2,
  opacity: 0.75,
  marginBottom: 16,
  width: "100%",
  textAlign: "center",
});

const ContentSorry = styled("div", {
  fontFamily: 'bookkMJ, sans-serif',
  fontSize: "1em",
  lineHeight: 2,
  opacity: 0.75,
  marginTop: "2em",
  marginBottom: "1.5em",
  width: "100%",
  textAlign: "center",
});

const GroomBride = styled("p", {
  fontFamily: 'bookkMJ, sans-serif',
  fontSize: "1em",
  lineHeight: 2,
  opacity: 0.85,
  marginBottom: 0,
  width: "100%",
  textAlign: "center",
});

const EngName = styled("span", {
  fontFamily: "'Times New Roman', serif",
});

type GrettingProps = {
  data?: Data;
};

export default function Gretting({ data }: GrettingProps) {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>결혼합니다</Title>
      </Divider>
      <Content>
        {data?.gretting?.split("\n")?.map((value, index) => {
          return (
            <div key={index}>
              {value}
              <br />
            </div>
          );
        })}
      </Content>
      <ContentSorry>
        {data?.greeting_sorry?.split("\n")?.map((value, index) => {
          return (
            <div key={index}>
              {value}
              <br />
            </div>
          );
        })}
      </ContentSorry>

      <GroomBride>
        <EngName>{data?.groom?.parents?.father?.name}</EngName>의 장남 ·{" "}
        <EngName>{data?.groom?.parents?.mother?.name}</EngName>의 장남
        <br/><EngName>{data?.groom?.name_swedish}</EngName>
        <br />
        {data?.bride?.parents?.father?.name} ·{" "}
        {data?.bride?.parents?.mother?.name}의 장녀 {data?.bride?.name}
      </GroomBride>
    </Wrapper>
  );
}
