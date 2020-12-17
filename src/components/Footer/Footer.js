import React from "react";
import { Button } from "../../globalStyles";
import {
	FaFacebook,
	FaInstagram,
	FaYoutube,
	FaTwitter,
	FaLinkedin,
} from "react-icons/fa";
import {
	FooterContainer,
	FooterSubscription,
	FooterSubHeading,
	FooterSubText,
	FormInput,
	Form,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinksItems,
	FooterLinksTitle,
	FooterLink,
	SocialMediaWrap,
	SocialMedia,
	SocialIconLink,
	SocialLogo,
	WebsiteRights,
	SocialIcons,
} from "./Footer.elements";

const Footer = () => {
	return (
		<FooterContainer>
			<FooterSubscription>
				<FooterSubHeading>
					Join our exclusive membership to receive the latest news and trends
				</FooterSubHeading>
				<FooterSubText>You can unsubscribe at any time.</FooterSubText>
				<Form>
					<FormInput name='email' type='email' placeholder='Email address' />
					<Button fontBig>Subscribe</Button>
				</Form>
			</FooterSubscription>
			<FooterLinksContainer>
				<FooterLinksWrapper>
					<FooterLinksItems>
						<FooterLinksTitle>About Us</FooterLinksTitle>
						<FooterLink to='/sign-up'>How it works</FooterLink>
						<FooterLink to='/Careers'>Testimonials</FooterLink>
						<FooterLink to='/Investors'>Careers</FooterLink>
						<FooterLink to='/Terms of Service'>Terms of Service</FooterLink>
					</FooterLinksItems>
					<FooterLinksItems>
						<FooterLinksTitle>Contact Us</FooterLinksTitle>
						<FooterLink to='/sign-up'>How it works</FooterLink>
						<FooterLink to='/Careers'>Testimonials</FooterLink>
						<FooterLink to='/Investors'>Careers</FooterLink>
						<FooterLink to='/Terms of Service'>Terms of Service</FooterLink>
					</FooterLinksItems>
				</FooterLinksWrapper>
				<FooterLinksWrapper>
					<FooterLinksItems>
						<FooterLinksTitle>Videos</FooterLinksTitle>
						<FooterLink to='/sign-up'>How it works</FooterLink>
						<FooterLink to='/Careers'>Testimonials</FooterLink>
						<FooterLink to='/Investors'>Careers</FooterLink>
						<FooterLink to='/Terms of Service'>Terms of Service</FooterLink>
					</FooterLinksItems>
					<FooterLinksItems>
						<FooterLinksTitle>Social Media</FooterLinksTitle>
						<FooterLink to='/sign-up'>How it works</FooterLink>
						<FooterLink to='/Careers'>Testimonials</FooterLink>
						<FooterLink to='/Investors'>Careers</FooterLink>
						<FooterLink to='/Terms of Service'>Terms of Service</FooterLink>
					</FooterLinksItems>
				</FooterLinksWrapper>
			</FooterLinksContainer>
			<SocialMediaWrap>
				<SocialLogo to='/'>
					{/* <SocialIcons /> */}
					ULTRA
				</SocialLogo>
				<WebsiteRights>ULTRA © 2020</WebsiteRights>
				<SocialIcons>
					<SocialIconLink href='/' target='_blank' aria-label='Facebook'>
						<FaFacebook />
					</SocialIconLink>
					<SocialIconLink href='/' target='_blank' aria-label='Instagram'>
						<FaInstagram />
					</SocialIconLink>
					<SocialIconLink
						href={"https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q"}
						target='_blank'
						aria-label='Youtube'
						rel='noopener noreferrer'
					>
						<FaYoutube />
					</SocialIconLink>
					<SocialIconLink href='/' target='_blank' aria-label='Twitter'>
						<FaTwitter />
					</SocialIconLink>
					<SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
						<FaLinkedin />
					</SocialIconLink>
				</SocialIcons>
			</SocialMediaWrap>
			<SocialMedia></SocialMedia>
		</FooterContainer>
	);
};

export default Footer;
