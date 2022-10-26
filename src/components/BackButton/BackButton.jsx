import { BackBtn } from "./styles";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const BackButton = () => {

  const navegate = useNavigate();  

  return (
    <BackBtn onClick={() => navegate(-1)}>
        <BiArrowBack />
    </BackBtn>
  )
}

export default BackButton