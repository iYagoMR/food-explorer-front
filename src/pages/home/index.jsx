import { Container, Banner, DishSection } from './styles';

import { DishCard } from '../../components/DishCard';
import { Bottom } from '../../components/Bottom'
import { Header } from '../../components/Header';

import BannerImg from '../../assets/banner-img.png'

import dishPlaceholderImg from '../../assets/plates/Mask group-10.png'

export function Home(){
    return(
        <Container>
            <Header/>
            <main>
                <Banner>
                    <img src={BannerImg} alt="banner image mshowing french macarons, strawberries and bluebeeries" />
                    <div>
                        <h2>Unparalleled flavors</h2>
                        <p>Feel the care of the preparation<br/>with selected ingredients.</p>
                    </div>
                </Banner>
                <DishSection>
                    <h2>Meals</h2>
                    <div>
                        <DishCard 
                            pictureUrl={dishPlaceholderImg} 
                            price="49.97"
                            title="Ravanello Salad"
                        />
                    </div>
                </DishSection>

            </main>
            <Bottom/>
        </Container>
    )
}