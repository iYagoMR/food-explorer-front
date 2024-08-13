import { Container } from './styles';

import { PageSection } from '../../components/PageSection';
import { IngredientAdd } from '../../components/IngredientAdd';
import { IngredientTag } from '../../components/IngredientTag';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Bottom } from '../../components/Bottom';
import { Input } from '../../components/Input';
import { UploadInput } from '../../components/UploadInput';

import { PiUploadSimpleFill } from "react-icons/pi";

export function NewDish(){
    return (
        <Container>
            <Header/>
            <main>
                <PageSection title="New dish"/>
                <UploadInput 
                    label="Dish picture"
                    placeholder="Select the dish picture"
                    icon={PiUploadSimpleFill}
                />
                <Input
                    placeholder="Ex.: Ceaser salad"
                    label="Name"
                    type="text"
                />
                <SelectInput label="Type" />
                <IngredientAdd/>
                <Input
                    placeholder="$ 00.00"
                    label="Price"
                    type="text"
                />
                <Input
                    placeholder="Briefly describe the dish, include its ingredients and composition"
                    label="Description"
                    type="text"
                />
                <Button
                    title="Save"
                />
            </main>
            <Bottom/>
        </Container>
    )
}