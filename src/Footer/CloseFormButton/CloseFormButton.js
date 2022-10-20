import styled from 'styled-components';

const StyledCloseFormButton = styled.div`
  display: block;
  position: absolute;
  cursor: pointer;
  top: 5%;
  right: 5%;
  width: 25px;
  height: 25px;
  background: ${({ closeImgPath }) =>
    `url('${closeImgPath}') 0 0 / cover no-repeat `};
`;

const CloseFormButton = ({
  closeImgPath,
  children,
  handleClick = (f) => f,
}) => {
  return (
    <StyledCloseFormButton
      onClick={handleClick}
      closeImgPath={closeImgPath}
      {...children}
    />
  );
};
export default CloseFormButton;
