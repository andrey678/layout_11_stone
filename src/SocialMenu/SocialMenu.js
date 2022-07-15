// Изображения
import FacebookLogo from "../img/icons/Header/SocialMenuIcons/facebook.svg";
import TwitterLogo from "../img/icons/Header/SocialMenuIcons/twitter.svg";
// Компоненты со стилями
import { StyledMenu } from "../Menu/Menu";
// Компоненты
import SocialMenuItem from "../SocialMenuItem/SocialMenuItem";


const socialMenuOptions = [
    { name: 'facebook', url: 'https://www.facebook.com', img: FacebookLogo },
    { name: 'twitter', url: 'https://www.twitter.com', img: TwitterLogo }
];

const socialLinks = socialMenuOptions.map(socialOption => {
    return (
        <SocialMenuItem key={socialOption.name}>
            <a href={`${socialOption.url}`}>
                <img src={socialOption.img} alt={`Stone ${socialOption.name} link`} />
            </a>
        </SocialMenuItem>
    )
});

const SocialMenu = (props) => {
    return (
        <StyledMenu {...props}>
            <ul>
                {socialLinks}
            </ul>
        </StyledMenu>
    );
}
export default SocialMenu;