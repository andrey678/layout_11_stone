// Компоненты со стилями
import { StyledMenu } from '../Menu/Menu';
// Компоненты
import SocialMenuItem from '../SocialMenuItem/SocialMenuItem';

const SocialMenu = ({ options, children }) => {
  const socialLinks = options.map((socialOption) => {
    return (
      <SocialMenuItem key={socialOption.name}>
        <a href={`${socialOption.url}`}>
          <img
            src={socialOption.imgPath}
            alt={`Stone ${socialOption.name} link`}
          />
        </a>
      </SocialMenuItem>
    );
  });
  return (
    <StyledMenu {...children}>
      <ul>{socialLinks}</ul>
    </StyledMenu>
  );
};
export default SocialMenu;
