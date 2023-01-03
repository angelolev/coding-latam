import React from 'react';
import Image from 'next/image'

interface HeroInterface {
	image: string;
    title: string;
}

const Hero : React.FC<HeroInterface> = ({ image, title }) => {
	return (
		<header className="hero">
		  <div className="hero__content">
			<div className="hero__image">
				<Image src={`/images/${image}`} width={200} height={203} alt="Hero" />
			</div>
			<div className="hero__text">
			  <h1>{title}</h1>
			</div>
		  </div>
		</header>
	)}

export default Hero;
