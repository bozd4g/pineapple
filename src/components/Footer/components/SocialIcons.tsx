import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faMedium, faLinkedin, faSpotify, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Grid } from '@material-ui/core';
import './index.css';

interface ISocialIconsProps {
   className?: string;
}
class SocialIcons extends React.Component<ISocialIconsProps> {
   private readonly links = [
      {
         id: 'facebook',
         icon: faFacebook,
         href: '#',
      },
      {
         id: 'instagram',
         icon: faInstagram,
         href: '#',
      },
      {
         id: 'twitter',
         icon: faTwitter,
         href: '#',
      },
      {
         id: 'medium',
         icon: faMedium,
         href: '#',
      },
      {
         id: 'linkedIn',
         icon: faLinkedin,
         href: '#',
      },
      {
         id: 'spotify',
         icon: faSpotify,
         href: '#',
      },
      {
         id: 'github',
         icon: faGithub,
         href: '#',
      },
      {
         id: 'email',
         icon: faEnvelope,
         href: '#',
      },
   ];

   getIcons = () => {
      return this.links.map((link: any) => {
         return (
            <Grid direction="row" xs>
               <a href={link.href} rel="noopener noreferrer" target="_blank">
                  <FontAwesomeIcon className={'icon ' + link.id} size="3x" icon={link.icon} />
               </a>
            </Grid>
         );
      });
   };

   render() {
      return <Grid container>{this.getIcons()}</Grid>;
   }
}

export default SocialIcons;
