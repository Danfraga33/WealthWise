import React from 'react';

const PostData = () => {
   try {
      const response = await fetch('/api/addStocks', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(stock),
      });

      if (response.ok) {
         // window.location.reload();
         // router.push('/Portfolio');
         // setFormData(initialFormData);
         // Task added successfully, you can redirect or perform other actions.
      } else {
         // Handle the response when there's an error.
         console.log('Failure');
      }
   } catch (error) {
      console.error('Error adding stock:', error);
      // Handle any network or other errors.
   }
	return <div>PostData</div>;
};

export default PostData;
