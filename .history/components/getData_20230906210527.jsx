export default function GetData() {
	async function dataRetrieve() {
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
	return <button onClick={GetData}>Add New</button>;
}
