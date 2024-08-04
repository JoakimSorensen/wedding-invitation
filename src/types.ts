type Data = {
  date: string;
  location: string;
  address: string;
  naver_link: string;
  naver_link_bus: string;
  direction_public_title: string;
  direction_public_title_bus: string;
  direction_public_title_train: string;
  direction_public_desc_train: string;
  direction_public_desc_bus: string;
  direction_public_call_title:string;
  direction_public_call_desc:string;
  direction_caution:string;
  gretting: string;
  greeting_sorry: string;
  rsvp: string;
  groom: {
    name: string;
    name_swedish: string;
    account_number: string;
    parents: {
      mother: {
        name: string;
        account_number: string;
      };
      father: {
        name: string;
        account_number: string;
      };
    };
  };
  bride: {
    name: string;
    account_number: string;
    parents: {
      mother: {
        name: string;
        account_number: string;
      };
      father: {
        name: string;
        account_number: string;
      };
    };
  };
  kakaotalk: {
    api_token: string;
    wedding_invitation_url: string;
    share_image: string;
  };
};
