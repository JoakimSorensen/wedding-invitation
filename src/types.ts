type Data = {
  date: string;
  location: string;
  address: string;
  direction_public_title: string; 
  direction_public_desc: string;
  direction_public_call:string;
  direction_caution:string;
  gretting: string;
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
