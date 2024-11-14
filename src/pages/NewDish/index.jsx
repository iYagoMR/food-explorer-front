import { Container } from './styles';

import { PageSection } from '../../components/PageSection';
import { TagAdd } from '../../components/TagAdd';
import { TagItem } from '../../components/TagItem';
import { SelectInput } from '../../components/SelectInput';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Bottom } from '../../components/Bottom';
import { Input } from '../../components/Input';
import { UploadInput } from '../../components/UploadInput';

import { api } from '../../services/api'

import { PiUploadSimpleFill } from "react-icons/pi";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function NewDish(){
    const [ name, setName ] = useState("");
    const [ price, setPrice ] = useState(0);
    const [ description, setDescription ] = useState("");
    const [ category, setCategory ] = useState("meal");

    const [ ingredients, setIngredients ] = useState([]);
    const [ newIngredient, setNewIngredient] = useState("");
    
    const [ pictureFile, setPictureFile ] = useState(null);

    const navigate = useNavigate();

    // function handlePicture(event){
    //     const file = event.e.files[0];
    //     setPictureFile(file);

    //     const imagePreview = URL.createObjectURL(file);
    //     setPicture(imagePreview);
    // }

    function handleAddIngredient(){
        setIngredients(prevState => [...prevState, newIngredient]);
        setNewIngredient("");
    }

    function handleRemoveIngredient(deleted) {
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
    }

    async function handleCreateDish(){
        // if(!pictureFile){
        //     return alert("You need to add a picture.")
        // }
        if(!pictureFile){
            return alert("You need to add a picture")
        }
        if(!name){
            return alert("You need to add a name")
        }
        if(!price){
            return alert("You need to add a price")
        }
        if(!category){
            return alert("You need to select a category")
        }
        if(newIngredient != ""){
            return alert("You filled an ingredient but forgot to click the plus icon")
        }
        if(ingredients.length < 1){
            return alert("You need to add at least one ingredient")
        }
        if(!description){
            return alert("You need to add a description")
        }

        const formData = new FormData();
        formData.append("picture", pictureFile);
        formData.append("name", name);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("ingredients", JSON.stringify(ingredients));

        try{
            await api.post("/dishes", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });

            navigate("/")
            alert("New dish created successfully");
        }catch(error){
            alert("Failed to create new dish. Please try again.");
            console.log(error);
        }
    }

    return (
        <Container>
            <Header/>
            <main>
                <PageSection title="New dish"/>
                <UploadInput 
                    name="dishPicture"
                    label="Dish picture"
                    placeholder="Select the dish picture"
                    icon={PiUploadSimpleFill}
                    onChange={e => setPictureFile(e.target.files[0])}
                />
                <Input
                    placeholder="Ex.: Ceaser salad"
                    label="Name"
                    name="Name"
                    type="text"
                    onChange={e => setName(e.target.value)}
                />
                <SelectInput
                    label="Category"
                    name="category"
                    options={[
                        <option key="1" value="meal">Meal</option>,
                        <option key="2" value="salad">Salad</option>,
                        <option key="3" value="dessert">Dessert</option>
                    ]}
                    onChange={e => setCategory(e.target.value)}
                />

                <TagAdd
                    label="Ingredients"
                >
                    {
                        ingredients.map((ingredient, index) => (
                            <TagItem
                                isNew
                                key={String(index)}
                                value={ingredient}
                                onClick={() => handleRemoveIngredient(ingredient)}
                            />
                        ))
                    }
                    <TagItem
                        placeholder="Add"
                        value={newIngredient}
                        onChange={e => setNewIngredient(e.target.value)}
                        onClick={handleAddIngredient}
                    />
                </TagAdd>

                <Input
                    name="price"
                    placeholder="Ex.: 21"
                    label="Price"
                    type="number"
                    onChange={e => setPrice(e.target.value)}
                />
                <Input
                    isTextArea
                    name="description"
                    placeholder="Ex.: Briefly describe the dish, include its ingredients and composition"
                    label="Description"
                    type="text"
                    onChange={e => setDescription(e.target.value)}
                />
                <Button
                    title="Save"
                    onClick={handleCreateDish}
                />
            </main>
            <Bottom/>
        </Container>
    )
}