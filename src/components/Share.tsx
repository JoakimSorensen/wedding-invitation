import { LinkOutlined, MessageFilled } from "@ant-design/icons";
import { RWebShare } from "react-web-share";
import { styled } from "@stitches/react";
import { Button, Divider, message } from "antd";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import Wrapper from "@/components/Wrapper";
import Header from "./Header";

declare global {
  interface Window {
    Kakao: any;
  }
}

const Title = styled("p", {
  fontFamily: 'bookkMJ, sans-serif',
  fontSize: "1.4em",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
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

type ShareProps = {
  data?: Data;
};

export default function Share({ data }: ShareProps) {
  const [shareCount, setShareCount] = useState<number>(0);

  useEffect(() => {
    if (shareCount !== 0) {
      window.Kakao.Link.createDefaultButton({
        objectType: "feed",
        container: "#sendKakao",
        content: {
          title: `${data?.groom?.name}❤${data?.bride?.name} 결혼식에 초대합니다`,
          description: "아래의 '청첩장 열기' 버튼을 눌러 읽어주세요🤵👰",
          imageUrl: data?.kakaotalk?.share_image,
          link: {
            mobileWebUrl: data?.kakaotalk?.wedding_invitation_url,
            webUrl: data?.kakaotalk?.wedding_invitation_url,
          },
        },
        buttons: [
          {
            title: "청첩장 열기",
            link: {
              mobileWebUrl: data?.kakaotalk?.wedding_invitation_url,
              webUrl: data?.kakaotalk?.wedding_invitation_url,
            },
          },
        ],
        installTalk: true,
      });
      setTimeout(() => {
        document.getElementById("sendKakao")?.click();
        message.success("카카오톡으로 청첩장을 공유합니다!");
      }, 100);
    } else {
      try {
        window.Kakao.init(data?.kakaotalk?.api_token);
      } catch {}
    }
  }, [shareCount]);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Header title={"청첩장 공유하기"} imgType={"flower"}/>
      </Divider>
      <CopyToClipboard text={data?.kakaotalk?.wedding_invitation_url ?? ""}>
      <RWebShare data={{title: "Share Jiyeon & Joakim's wedding invitation", url: data?.kakaotalk?.wedding_invitation_url ?? ""}}>
        <LinkShareButton
          style={{ margin: 8 }}
          icon={<LinkOutlined />}
          size="large"
        >
          링크로 공유하기
        </LinkShareButton>
      </RWebShare>
      </CopyToClipboard>
    </Wrapper>
  );
}
