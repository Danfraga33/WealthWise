export default function getData {
   async function getData () {
      try {
         const response = await fetch('./pages/api/getStocks', {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json',
            },
         });
         const data = await response.json();
         console.log(data);
      } catch (error) {
         console.error(error);
      }
   }
   return (
      <button onClick={getData}>Add New</button>
   )
   
}