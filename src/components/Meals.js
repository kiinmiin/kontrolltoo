import { useEffect, useState } from "react"

const Meals = (props) => {
    const [meals, setMeals] = useState(null); 
    
    useEffect(() => {
        fetch('http://localhost:3001/meals')
        .then(res => res.json())
        .then(meal => setMeals(meal))
    })

    console.log(meals)
    return (
        <ul id="meals">
            { 
                //<li><MealItem /></li>
            }
        </ul>
    )
}

export default Meals