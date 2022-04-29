import { useEffect, useState } from 'react';
import DogCard from './DogCard';
const API_BASE = process.env.REACT_APP_API_BASE


export default function DogsList() {

	const [dogs, setDogs] = useState([]);

	useEffect(() => {
		
		fetch(`${API_BASE}/breeds/list/all`)
			.then(async res => {
				const json = await res.json();
				if(!res.ok) {
					const err = res.status
					return Promise.reject(err)
				} 

				setDogs(Object.keys(json.message));

			})
			.catch(error => {
					console.error('There was an error!', error);
			});
			
	}, [])

	return (
		<div className="dogList">
			<h3>Dog Breeds</h3>
			<div className="dogListWrapper">
				{ dogs.map(dog => {
					return (
						<DogCard key={dog} name={dog}/>
					)})
				}
			</div>
		</div>
	)
}