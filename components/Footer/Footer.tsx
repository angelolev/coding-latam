import React, { useEffect } from 'react';
import { socialNetworks } from '../../utils';
import { SocialIcon } from '../SocialIcon';
export interface FooterInterface {}

const Footer : React.FC<FooterInterface> = () => {
	const getYear = () => {
		const d = new Date();
		return d.getFullYear();
	  };
	
	  useEffect(() => {
		getYear();
	  }, []);
	  
	return (
		<footer className="footer">
		  <div className="container">
			<div className="footer__social">
			  {socialNetworks.map((item) => (
				<SocialIcon key={item.id} link={item.link} name={item.name} />
			  ))}
			</div>
			<div className="footer__content">
			  <p>© Coding Latam {getYear()} - Todos los derechos reservados</p>
			</div>
		  </div>
		</footer>
	  );
};

export default Footer