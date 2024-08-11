import { styled } from "@stitches/react";
import { Divider } from "antd";
import Wrapper from "@/components/Wrapper";
import Header from "./Header";

const Content = styled("div", {
  fontSize: "1em",
  lineHeight: 2,
  opacity: 0.75,
  marginBottom: 0,
  padding: "1em",
  width: "90%",
  textAlign: "center",
});

const Image = styled("img", {
  width: "30%",
  maxWidth: 1024,
});

const GoogleLink = styled("a", {
    fontSize: "1em",
    opacity: 0.75,
});

const GodicTxt = styled("span", {
  fontFamily: 'bookkGodic, sans-serif !important',
});

type RSVPProps = {
  data?: Data;
};

export default function RSVP({ data } : RSVPProps) {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Header title={"참석 여부/RSVP"} imgType={"flower"}/>
      </Divider>
        <Image src="./assets/google_form_QR.png" />
        <br/>
        <GoogleLink href="https://forms.gle/Dmbji9v2VdcVfwnJ7" target="_blank">
            <GodicTxt>참석 여부/RSVP</GodicTxt>
        </GoogleLink>
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
