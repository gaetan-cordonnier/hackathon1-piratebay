import { Link } from "react-router-dom";
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
        <Link to="/">
          <ButtonReturn>Return safe place</ButtonReturn>
        </Link>
      </Body>
      <BackImage src={backgroundImage} />
    </>
  );
}
