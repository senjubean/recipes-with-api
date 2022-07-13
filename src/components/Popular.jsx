import {React, useEffect, useState} from 'react'

  const Popular = () => {

      const [popular, setPopular] = useState([]);

        useEffect(()=> {
            getPopular();
        },[])

        const getPopular = async () => {
          const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`)
          const data = await response.json();
          console.log(data.recipes)
          setPopular(data.recipes)

          
          }

  return (
    <div>
      {popular.map((recipe)=>{
        return (
          <div id={recipe.id}>{recipe.title}</div>
        )
      })}
    </div>
  )
}

export default Popular