import { Link } from "react-router-dom";
import { Container } from "./styles";
import { Cart } from '../../components/Cart';
import { Header } from '../../components/Header';

export function NotFound() {
  const [ cartIsOpen, setCartIsOpen ] = useState(false);

  return (
    <Container>
      <Cart 
          cartIsOpen={cartIsOpen} 
          onCloseCart={() => setCartIsOpen(false)}
      />
      <Header onOpenCart={() => setCartIsOpen(true)}/>

      <h1>Página indisponível</h1>
      <Link to="/">voltar para o início</Link>
    </Container>
  )
}