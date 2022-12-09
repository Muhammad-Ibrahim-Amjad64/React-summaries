import { useState, useCallback } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;


// TO SEND HTTP GET REQUEST USING THAT HOOK IMPLEMENT THESE STEPS 

// * define 

const {error,isLoading,sendRequest:fetchTasks} = useHttp()

// * use the fetch tasks function like this in a handler or a use Effect if you want to load immidiatly 

// sample transformData

const transformData = useCallback((tasksObject)=>{
  
  const loadedTasks = [];
   for (const taskKey in tasksObject) {
     loadedTasks.push({ id: taskKey, text: tasksObject[taskKey].text });
   }
   setTasks(loadedTasks)
   
 },[])

// ye only when , When you want to fetch when the component is mounted 
useEffect(() => {
    fetchTasks({ url:"https://react-http-prectice-default-rtdb.firebaseio.com/tasks.json"},transformData);
    
  }, [fetchTasks]);  // isko hmne dependency daal dia ha islia hme se callback wala jugar krna pr rha ha 
//------------------------------------------------------------------------
// to fetch tasks on buton click 
const fetchdata=()=>{
    fetchTasks({ url:"https://react-http-prectice-default-rtdb.firebaseio.com/tasks.json"},transformData);
//------------------------------------------------------------------------    


}

// * then manae the state of errors ad isLoading 

// to manage is loading state use the is loading state to display a pragraph of loading.....

// to handle error use try catch block in the component that use are using the 

// like this 

import { useEffect, useState } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';


  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;





// TO SEND HTTP POST USING THST HOOK IMPLEMENT THESE STEPS 



// load that hook into the component like this 

const {error,isLoading,sendRequest:fetchTasks} = useHttp()


// then  on clicking some button handler call the fetch method like this 


const enterTaskHandler = async (taskText) => {

  sendTaskRequest({
    url:"https://react-http-prectice-default-rtdb.firebaseio.com/tasks.json",
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({text:taskText})

  },createTask.bind(null,taskText))



  // Create task method ( use this method to waht ever you want to do with the posted data)

  const createTask = (taskText, taskData)=> {
    console.log("aaja")
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText }; // the task text is not avalible here we can nest that function into entertask handler or enter enter task text as a parameter  
  
    props.onAddTask(createdTask);
  
  }