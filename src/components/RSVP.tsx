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
  fontFamily: 'bookkMJ, sans-serif',
  fontSize: "2.4vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const Content = styled("div", {
  fontFamily: 'bookkMJ, sans-serif',
  fontSize: "2vh",
  lineHeight: 2,
  opacity: 0.75,
  marginBottom: 16,
  padding: "1em",
  width: "90%",
  textAlign: "center",
});

const Image = styled("img", {
  width: "30%",
  maxWidth: 1024,
});

const GoogleLink = styled("a", {
    fontFamily: 'bookkMJ, sans-serif',
    fontSize: "1.7vh",
    opacity: 0.75,
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
        <Image src="./assets/google_form_QR.png" />
        <br/>
        <GoogleLink href="https://forms.gle/Dmbji9v2VdcVfwnJ7" target="_blank">참석 여부/RSVP</GoogleLink>
        <Content>
        {data?.rsvp?.split("\n")?.map((value, index) => {
          return (
            <div key={index}>
              {value}
              <br />
            </div>
          );
        })}
        </Content>
    </Wrapper>
  );
}
