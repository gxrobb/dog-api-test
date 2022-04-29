import { useEffect, useState } from 'react';
import DogCard from './DogCard';
const API_BASE = process.env.REACT_APP_API_BASE


export default function DogsList() {

	const [dogs, setDogs] = useState([]);
	// let dogData = [];
	// const [data, setData] = useState([]);

	useEffect(() => {
		fetch(`${API_BASE}/breeds/list/all`)
			.then(res => res.json())
			.then(json => setDogs(Object.keys(json.message)))
	}, [])

	return (
		<div class="dogList">
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