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
  fontSize: "2vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const Content = styled("div", {
  fontSize: "1.75vh",
  lineHeight: 1.75,
  opacity: 0.75,
  marginBottom: 16,
  padding: "1em",
  width: "90%",
  textAlign: "center",
});

const Image = styled("img", {
  width: "50%",
  maxWidth: 1024,
});

type RSVPProps = {
  data?: Data;
};

export default function RSVP({ data } : RSVPProps) {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>참석 여부/RSVP</Title>
      </Divider>
        <Content>
        {'Text goes here!'}
        </Content>
        <Image src="./assets/google_form_QR.png" />
    </Wrapper>
  );
}
