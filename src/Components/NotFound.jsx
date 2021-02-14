import backgroundImage from "../images/notFoundPlayMobileResize.jpg";
import {
  BackImage,
  MessageError,
  Body,
  ButtonReturn,
} from "../ComponentsStyled/NotFoundStyled";
export default function NoteFound() {
  return (
    <>
      <Body>
        <MessageError>Boh! Did we get lost, little boy?</MessageError>
        <ButtonReturn>Return safe place</ButtonReturn>
      </Body>
      <BackImage src={backgroundImage} />{" "}
    </>
  );
}
