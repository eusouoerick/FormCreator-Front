import * as R from 'react-share';
import { CardContainer, FormCard } from 'src/components/Form';
import { ShareContainer, LinkBox, BtnCopyLink, CopyMessage } from './styles';
import useFormResponse from './useFormResponse';

const FormResponse = () => {
  const { url, copyToClipboard, showMessage } = useFormResponse();

  return (
    <CardContainer>
      <FormCard>
        <ShareContainer>
          <R.FacebookShareButton url={url}>
            <R.FacebookIcon size={45} style={{ borderRadius: '5px' }} />
          </R.FacebookShareButton>
          <R.WhatsappShareButton url={url}>
            <R.WhatsappIcon size={45} style={{ borderRadius: '5px' }} />
          </R.WhatsappShareButton>
          <R.TelegramShareButton url={url}>
            <R.TelegramIcon size={45} style={{ borderRadius: '5px' }} />
          </R.TelegramShareButton>
          <R.TwitterShareButton url={url}>
            <R.TwitterIcon size={45} style={{ borderRadius: '5px' }} />
          </R.TwitterShareButton>
          <R.RedditShareButton url={url}>
            <R.RedditIcon size={45} style={{ borderRadius: '5px' }} />
          </R.RedditShareButton>
          <R.EmailShareButton url={url}>
            <R.EmailIcon size={45} style={{ borderRadius: '5px' }} />
          </R.EmailShareButton>
          <R.LinkedinShareButton url={url}>
            <R.LinkedinIcon size={45} style={{ borderRadius: '5px' }} />
          </R.LinkedinShareButton>
        </ShareContainer>

        <LinkBox>
          <div style={{ fontSize: '16px', marginLeft: '10px' }} translate='no'>
            {url}
          </div>
          <BtnCopyLink onClick={copyToClipboard}>Copy</BtnCopyLink>
          {showMessage && <CopyMessage>Copied</CopyMessage>}
        </LinkBox>
      </FormCard>
    </CardContainer>
  );
};

export default FormResponse;
