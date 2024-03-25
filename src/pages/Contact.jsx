import ContactForm from "../components/ContactForm";
import PageContent from "../components/PageContent";

const ContactPage = () => {
	return (
		<>
			<PageContent title="Contact Me!">
				<p>
					I enjoy working on projects related to Web and Software Development.
					If you'd like to work together, be sure to fill out the contact form!
				</p>
				<ContactForm />
			</PageContent>
		</>
	);
};

export default ContactPage;
