import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { getDocs, collection } from "../config/firebase";


export const Added = () => {
 const [ taskList, setTaskList ] = useState([]);

 const taskCollectionRef = collection(db, "priority");

 const getTaskList = async () => {

    try{

        const data = await getDocs(taskCollectionRef);
        const filteredData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));

        setTaskList(filteredData);
    } catch (err) {

        console.error(err);
    }
 };

 useEffect(() => {
    getTaskList();
 }, []);





 

    

    

    return(
       <div>
        {taskList.map((priority) => (
        <div>
        <h1> {priority.title}</h1>
        <h1>{priority.deadline}</h1>
        <h1>{priority.description}</h1>
       </div>
        ))}
        </div>

   
    )
}