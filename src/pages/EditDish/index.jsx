import { Container } from './styles';

import { PageSection } from '../../components/PageSection';
import { IngredientAdd } from '../../components/IngredientAdd';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Bottom } from '../../components/Bottom';
import { Input } from '../../components/Input';
import { SelectInput } from '../../components/SelectInput';
import { UploadInput } from '../../components/UploadInput';

import { PiUploadSimpleFill } from "react-icons/pi";

export function EditDish(){
    return(
        <Container>
            <Header/>
            <main>
                <PageSection title="Edit dish"/>
                <UploadInput 
                    label="Dish picture"
                    placeholder="Select the dish picture"
                    icon={PiUploadSimpleFill}
                />
                <Input
                    placeholder="Ceaser salad"
                    label="Name"
                    type="text"
                />
                <SelectInput label="Type" />
                <IngredientAdd/>
                <Input
                    placeholder="$ 40.00"
                    label="Price"
                    type="text"
                />
                <Input
                    placeholder="The ceaser salad is interesting option for a hot sunny day"
                    label="Description"
                    type="text"
                />
                <div>
                    <Button
                        title="Delete dish"
                    />
                    <Button
                        title="Save changes"
                    />
                </div>
            </main>
            <Bottom/>
        </Container>
    )
}