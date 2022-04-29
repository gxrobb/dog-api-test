import { useEffect, useState } from 'react';

export default function DogCard({name}) {
	const [url, setUrl] = useState('');

	useEffect(() => {
		const API_BASE = process.env.REACT_APP_API_BASE
		
		fetch(`${API_BASE}/breed/${name}/images/random`)
			.then(async res => {
				const json = await res.json();

				if(!res.ok) {
					const err = res.status
					return Promise.reject(err)
				} 

				setUrl(json.message)

			})
			.catch(error => {
				console.error('There was an error!', error);
			});

	}, [])

	return (
		<section className='dogCard'>
			<img src={url} className="dogCardImage" alt={name}/>
			<p>{name}</p>
		</section>
	)
}
    