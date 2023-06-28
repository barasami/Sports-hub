import axios from 'axios';



const options = {
    headers: {
      'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
      'X-RapidAPI-Host': 'football98.p.rapidapi.com'
    }
  };

export const tableNews=async(oldTable)=>{
    try{
        const data=await axios.get(`https://football98.p.rapidapi.com/${oldTable}/table`,options)
        return data
    }
    catch(err){
        console.log(err);
    }
}

