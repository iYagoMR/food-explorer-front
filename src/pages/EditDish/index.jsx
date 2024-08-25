import { Container } from './styles';

import { PageSection } from '../../components/PageSection';
import { TagAdd } from '../../components/TagAdd';
import { TagItem } from '../../components/TagItem';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Bottom } from '../../components/Bottom';
import { Input } from '../../components/Input';
import { SelectInput } from '../../components/SelectInput';
import { UploadInput } from '../../components/UploadInput';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api'

import { PiUploadSimpleFill } from "react-icons/pi";

export function EditDish(){

    const [ name, setName ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ category, setCategory ] = useState("");

    const [ ingredients, setIngredients ] = useState([]);
    const [ newIngredient, setNewIngredient] = useState("");
    
    const [ pictureFile, setPictureFile ] = useState(null);

    //Previous data of the dish
    const [data, setData] = useState(null);

    const navigate = useNavigate();
    const params = useParams();

    function handleAddIngredient(){
        setIngredients(prevState => [...prevState, newIngredient]);
        setNewIngredient("");
    }

    function handleRemoveIngredient(deleted) {
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
    }

    useEffect(() => {
        async function fetchDish(){
          const response = await api.get(`/dishes/${params.id}`);
        
          setData(response.data);
          setIngredients(response.data.ingredients.map(ingredient => ingredient.name));
          setCategory(response.data.category);
          setDescription(response.data.description);
          setPrice(response.data.price);
          setName(response.data.name);
        }

        fetchDish();
    }, []);

    async function handleDishUpdate(){
        
        const formData = new FormData();
        formData.append("picture", pictureFile);
        formData.append("name", name);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("ingredients", JSON.stringify(ingredients));
        
        try{
            await api.put(`/dishes/${data.id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                } 
            });

            navigate("/")
            alert("Dish edited successfully");
        }catch(error){
            alert(error);
            //alert("Failed to edit dish. Please try again.");
        }
    }

    return(
        <Container>
            <Header/>
            {
                data &&

                <main>
                    <PageSection title="Edit dish"/>
                    <UploadInput 
                        label="Dish picture"
                        placeholder="Select the dish picture"
                        icon={PiUploadSimpleFill}
                        onChange={e => setPictureFile(e.target.files[0])}
                    />
                    <Input
                        label="Name"
                        placeholder="Ex.: Ceaser salad"
                        value={name}
                        type="text"
                        onChange={e => setName(e.target.value)}
                    />
                    <SelectInput 
                        label="Category" 
                        name="category"
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                        options={[
                            <option key="1" value="meal">Meal</option>,
                            <option key="2" value="salad">Salad</option>,
                            <option key="3" value="dessert">Dessert</option>
                        ]}
                    />
                    <TagAdd label="Ingredients">
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
                        value={price}
                        placeholder="Ex.: 21"
                        label="Price"
                        type="text"
                        onChange={e => setPrice(e.target.value)}
                    />
                    <Input
                        isTextArea
                        value={description}
                        placeholder="Ex.: Briefly describe the dish, include its ingredients and composition"
                        label="Description"
                        type="text"
                        onChange={e => setDescription(e.target.value)}
                    />
                    <div>
                        <Button
                            title="Delete dish"
                        />
                        <Button
                            title="Save changes"
                            onClick={handleDishUpdate}
                        />
                    </div>
                </main>
            }
            <Bottom/>
        </Container>
    )
}