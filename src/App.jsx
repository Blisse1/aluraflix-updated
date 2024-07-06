import './App.css'
import Header from './components/home/Header';
import Main from './components/home/Main';
import CardSection from './components/home/CardSection';
import { useState, useEffect } from 'react';


function App() {
    const [cards, setCards] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch("http://localhost:3000/data");
            const data = await res.json();
            setCards(data.cards);
            setCategories(data.categories);
        }
        getData();
    }, [])

    return (
        <>
        <Header />
        <Main />
        {
            categories &&
            <CardSection categories={categories} cards={cards} />
        }
        {
            //If you want to specify an
            //initial default value, you can use the defaultValue prop.
            /*
            * How do you create one versus the other? A component is controlled when you set the
            value property (of text inputs, textareas, and selects) or the checked property (of
                radio inputs and checkboxes).
            */
            // No olvidar hacerle build al proyecto lptm
            // The src/index.css should contain general styles, such as body, html, and so on, that are
//applicable to the whole page.
            // Also a good idea could be to prefix all class names used in
                /* MyComponent.js with MyComponent-. For example:
                .MyComponent-table {
                 border: 1px solid black;
                }
                .MyComponent-table-heading {
                 border: 1px solid black;
                }*/
            // When importing JavaScript files, you can omit the .js extension.
//You can use:
//import clone from '../modules/clone';
//Instead of:
//import clone from '../modules/clone.js'
        }
        </>
    );
}

export default App;
