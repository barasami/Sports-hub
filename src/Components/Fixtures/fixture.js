import axios from 'axios';

const Url='https://football98.p.rapidapi.com/premierleague/fixtures'

const options = {
  headers: {
    'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
    'X-RapidAPI-Host': 'football98.p.rapidapi.com'
  }
};

export const myFixture=async()=>{
    try{
        const data=await axios.get(Url,options)
        return data
    }
    catch(err){
        console.log(err);
    }
}