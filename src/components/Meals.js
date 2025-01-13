import { useEffect, useState } from "react"
import MealItem from './MealItem'

const Meals = (props) => {
    const [isFetching, setIsFetching] = useState(false) 
    const [meals, setMeals] = useState([])
    const [error, setError] = useState(null) 
    const [showError, setShowError] = useState(false) 

    useEffect(() => {
        const getMeals = async () => {
            setIsFetching(true)
            try {
                const response = await fetch('http://localhost:3001/meals')
                const responseData = await response.json()
                console.log('API Response:', responseData)
                if (!response.ok || !responseData) {
                    throw new Error('failed fetching data')
                }
                setMeals(responseData)
            } catch (error) {
                setError({
                    title: 'An error occurred!',
                    message: 'Failed fetching meals data, please try again later'
                })
                setShowError(true)
            } 
            setIsFetching(false)
        }
        getMeals()
    }, [])
    
    if (isFetching) {
        return <p>Loading meals...</p>
    }

    if (showError) {
        return <p>{error.title}: {error.message}</p>
    }

    return (
        <ul id="meals">
            {meals.length > 0 ? meals.map((meal) => (
                <MealItem key={meal.id} meal={meal} />
            )) : <p>No meals found.</p>}
        </ul>
    )
}

export default Meals
