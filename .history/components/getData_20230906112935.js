export default getDataForm {

   
   export default async function getData () {
      try {
         const response = await fetch('/api/addStock', {
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

}