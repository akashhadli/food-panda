const HeadlineCards = () => {
	const foods = [
		{
			src: 'https://images.unsplash.com/photo-1564759077036-3def242e69c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
			p1: "Sun's Out, BOGO's Out",
			p2: 'Through 8/26',
		},
		{
			src: 'https://images.unsplash.com/photo-1518830686998-b8847466b372?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dGFjb3MlMjBhbmQlMjBmcmllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
			p1: 'Summer Savings',
			p2: 'Limited Time Offer',
		},
		{
			src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
			p1: 'Fuel Your Day',
			p2: 'Healthy Options Available',
		},
	];

	return (
		<div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
			{/* Card */}
			{foods.map((el, i) => (
				<div className='rounded-xl relative' key={i}>
					{/* overlay */}
					<div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
						<p className='font-bold text-2xl px-2 pt-4'>{el.p1}</p>
						<p className='px-2'>{el.p2}</p>
						<button className='border-white bg-white text-black mx-2 absolute bottom-4'>
							Order Now
						</button>
					</div>
					<img
						className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
						src={el.src}
						alt='/'
					/>
				</div>
			))}
		</div>
	);
};

export default HeadlineCards;
