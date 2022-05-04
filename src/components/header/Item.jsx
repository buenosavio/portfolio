import { useNavigate } from "react-router-dom";
import { Li } from "./Header.styles";

const Item = ({description, path}) => {
  
  const navigate = useNavigate()

  return(
    <Li onClick={() => navigate(`${path}`)}>{description}</Li>
  )
}

export default Item;