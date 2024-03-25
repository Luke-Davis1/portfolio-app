import { Form, useNavigation } from "react-router-dom";

const ContactForm = () => {
	// React Hooks
	const navigation = useNavigation();

	// Set up variable to track if form is submitting
	const isSubmitting = navigation.state === "submitting";

	// Handlers for form actions
	const clearHandler = () => {};

	// Form element
	return (
		<Form method="POST">
			<p>
				<label htmlFor="name">Contact Name</label>
				<input
					id="name"
					type="text"
					name="name"
					required
					placeholder="Enter name"
				/>
			</p>
			<p>
				<label htmlFor="company">Company Name</label>
				<input
					id="company"
					type="text"
					name="company"
					required
					placeholder="Enter company name"
				/>
			</p>
			<p>
				<label htmlFor="phone">Phone Number</label>
				<input
					id="phone"
					type="tel"
					name="phone"
					required
					placeholder="Enter number (***)-***-****"
				/>
			</p>
			<p>
				<label htmlFor="email">Email</label>
				<input
					id="email"
					type="email"
					name="email"
					required
					placeholder="Enter email"
				/>
			</p>
			<p>
				<label htmlFor="message">Message</label>
				<textarea
					id="message"
					name="message"
					rows="5"
					required
					placeholder="Enter message"
				/>
			</p>
			<div>
				<button type="button" onClick={clearHandler}>
					Clear
				</button>
				<button disabled={isSubmitting}>
					{isSubmitting ? "Sending..." : "Send"}
				</button>
			</div>
		</Form>
	);
};

export default ContactForm;
