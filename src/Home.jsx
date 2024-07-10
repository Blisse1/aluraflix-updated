import './Home.css'
import Header from './components/home/Header';
import Main from './components/home/Main';
import CardSection from './components/home/CardSection';
import Footer from './components/home/Footer';
import { useState, useEffect, useRef } from 'react';
import EditForm from './components/home/EditForm';

function Home() {
    const [cards, setCards] = useState([]);
    const [categories, setCategories] = useState([]);
    const [dialogContent, setDialogContent] = useState();
    const dialogRef = useRef(null)

    useEffect(() => {
        const getData = async () => {
            const res = await fetch("http://localhost:3000/categories");
            const dataCategories = await res.json();
            setCategories(dataCategories);
            const resCards = await fetch("http://localhost:3000/cards");
            const dataCards = await resCards.json();
            setCards(dataCards);
        }
        getData();
    }, [])

    const handleDelete = async (id) => {
        const cardItem = cards.filter((item) => item.id !== id);
        setCards(cardItem);
        const API_URL = "http://localhost:3000/cards";
        const deleteOptions = {
            method: "DELETE",
        };
        const reqUrl = `${API_URL}/${id}`;
        await fetch(reqUrl, deleteOptions);
    };

    const handleEdit = async (newCard, id) => {
        const updatedList = cards.map((card) => card.id === id ? {...newCard, id} : card)
        setCards(updatedList)
        const response = await fetch(`http://localhost:3000/cards/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCard),
      });
        await response.json();
    };

    const toggleDialog = async({card}) => {
        setDialogContent(<EditForm cardTitle={card.titulo} categoriesList={categories} handleEdit={handleEdit} cardId={card.id}/>)
        if(!dialogRef.current){
            return;
        }
        dialogRef.current.hasAttribute("open")
            ? dialogRef.current.close()
            : dialogRef.current.showModal()
    };
    
    return (
        <>
        <Header addClass={"nonSelected"} addSecondClass={"onThisPage"}/>
        <Main />
        {
            categories &&
            <CardSection 
                categories={categories} 
                cards={cards} 
                handleDelete={handleDelete}
                toggleDialog={toggleDialog}/>
        }
        <dialog ref={dialogRef} style={{backgroundColor: "black"}}>{dialogContent}</dialog>
        <Footer />
        </>
    );
}

export default Home;
