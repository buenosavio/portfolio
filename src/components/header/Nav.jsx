import { useNavigate } from "react-router-dom"
import { Button } from "../../Global.styles"
import { Ul, RightItems } from "./Header.styles"
import Item from "./Item"

const Nav = () => {

  const navigate = useNavigate();

  return(
    <nav>
      <Ul>
        <Item description='Início' path='/'/>
        <RightItems>
          <Item description='Projetos' path='/project'/>
          <Button onClick={() => navigate('/contact')}>Contato</Button>
        </RightItems>
      </Ul>
    </nav>
  )
}

export default Nav