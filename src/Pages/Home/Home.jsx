import React, { useState } from 'react'
import ExploreProducts from '../../Components/ExploreProducts/ExploreProducts'

const Home = () => {

    const[category,setCategory] = useState("phone");
    
    const[title, setTitle] = useState("Mobile Phones");

  return (
   <>
   <ExploreProducts category={category} setCategory={setCategory} title={title} setTitle={setTitle} />
   </>
  )
}

export default Home