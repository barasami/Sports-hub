import axios from 'axios';

const Url='https://transfermarket.p.rapidapi.com/search'

const options = {
  params: {
    query: 'chelsea',
    domain: 'de'
  },
  headers: {
    'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
    'X-RapidAPI-Host': 'transfermarket.p.rapidapi.com'
  }
};


export const nRomours=async()=>{
    try{
        const data=await axios.get(Url,options)
        return data
    }
    catch (err){
        console.log(err);
    }
}