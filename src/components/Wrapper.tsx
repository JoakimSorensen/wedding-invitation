import { styled } from "@stitches/react";

const WrapperDiv = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
  textAlign: "center",
});

export default function  Wrapper({ children }: any) { return <WrapperDiv>{children}</WrapperDiv> };
