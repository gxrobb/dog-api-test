import { useEffect, useState } from 'react';

export default function DogCard({name}) {
	const [url, setUrl] = useState('');

	useEffect(() => {
		const API_BASE = process.env.REACT_APP_API_BASE

		fetch(`${API_BASE}/breed/${name}/images/random`)
			.then(res => res.json())
			.then(json => setUrl(json.message))
	}, [])

	return (
		<section className='dogCard'>
			<img src={url} className="dogCardImage" alt={name}/>
			<p>{name}</p>
		</section>
	)
}
    