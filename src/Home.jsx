import './Home.css'
import Header from './components/home/Header';
import Main from './components/home/Main';
import CardSection from './components/home/CardSection';
import { useState, useEffect } from 'react';
import Footer from './components/home/Footer';

function Home() {
    const [cards, setCards] = useState([]);
    const [categories, setCategories] = useState([]);
    console.log(cards)

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
    
    return (
        <>
        <Header />
        <Main />
        {
            categories &&
            <CardSection categories={categories} >
            </CardSection>
        }
        <Footer />
        </>
    );
}

export default Home;
