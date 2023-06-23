import axios from 'axios';



export const squadNews=async()=>{
    try{
        const data=await axios.get()
        return data
    }
    catch(err){
        console.log(err);
    }
}