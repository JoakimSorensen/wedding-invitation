import { styled } from "@stitches/react";

const WrapperDiv = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  backgroundPosition: "center",
  width: "100%",
  textAlign: "center",
});

export default function  Wrapper({ children }: any) { return <WrapperDiv>{children}</WrapperDiv> };
