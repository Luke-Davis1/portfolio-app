import { Form, useNavigation, json, redirect } from "react-router-dom";
import classes from "./ContactForm.module.css";
import useInput from "../hooks/useInput";
import Modal from "./UI/Modal";
import { useState } from "react";

const ContactForm = () => {
	const [modalIsShowing, setModalIsShowing] = useState(false);
	// React Hooks
	const navigation = useNavigation();

	// Phone pattern
	const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

	// Email pattern
	const emailRegex =
		/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

	// Custom hooks for fields
	// Contact Name
	const {
		value: enteredContactName,
		isValid: enteredContactNameIsValid,
		hasError: contactNameHasError,
		valueChangeHandler: contactNameChangeHandler,
		inputBlurHandler: contactNameBlurHandler,
		reset: resetContactName,
	} = useInput((value) => value.trim() !== "");

	// Company Name
	const {
		value: enteredCompanyName,
		isValid: enteredCompanyIsValid,
		hasError: companyHasError,
		valueChangeHandler: companyNameChangeHandler,
		inputBlurHandler: companyNameBlurHandler,
		reset: resetCompanyName,
	} = useInput((value) => value.trim() !== "");

	// Phone number
	const {
		value: enteredPhoneNum,
		isValid: enteredPhoneNumIsValid,
		hasError: phoneHasError,
		valueChangeHandler: phoneNumChangeHandler,
		inputBlurHandler: phoneNumBlurHandler,
		reset: resetPhoneNum,
	} = useInput((value) => phoneRegex.test(value));

	// Email
	const {
		value: enteredEmail,
		isValid: enteredEmailIsValid,
		hasError: emailHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmail,
	} = useInput((value) => emailRegex.test(value));

	// Message box
	const {
		value: enteredMessage,
		isValid: enteredMessageIsValid,
		hasError: messageHasError,
		valueChangeHandler: messageChangeHandler,
		inputBlurHandler: messageBlurHandler,
		reset: resetMessage,
	} = useInput((value) => value.trim() !== "");

	// Form Validity
	let formIsValid = false;
	if (
		enteredContactNameIsValid &&
		enteredCompanyIsValid &&
		enteredEmailIsValid &&
		enteredPhoneNumIsValid &&
		enteredMessageIsValid
	) {
		// All values are valid
		formIsValid = true;
	}

	// Set up variable to track if form is submitting
	const isSubmitting = navigation.state === "submitting";

	// Classes for inputs
	// Contact Name classes
	const contactNameClasses = contactNameHasError
		? `${classes["form-control"]} ${classes.invalid}`
		: `${classes["form-control"]}`;

	// Company classes
	const companyNameClasses = companyHasError
		? `${classes["form-control"]} ${classes.invalid}`
		: `${classes["form-control"]}`;

	// Email classes
	const emailClasses = emailHasError
		? `${classes["form-control"]} ${classes.invalid}`
		: `${classes["form-control"]}`;

	// Phone Classes
	const phoneClasses = phoneHasError
		? `${classes["form-control"]} ${classes.invalid}`
		: `${classes["form-control"]}`;

	// Message Classes
	const messageClasses = messageHasError
		? `${classes["form-control"]} ${classes.invalid}`
		: `${classes["form-control"]}`;

	// Handlers for form actions
	const clearHandler = async () => {
		// Reset everything
		resetContactName();
		resetCompanyName();
		resetPhoneNum();
		resetEmail();
		resetMessage();

		// Hide modal
		setModalIsShowing(false);
	};

	const displayModalHandler = () => {
		setModalIsShowing(true);
	};

	// Form element
	return (
		<>
			<h2 className={classes.contact}>Let's Connect!</h2>
			<Form method="POST" className={classes.form}>
				<div className={classes["control-group"]}>
					<div className={contactNameClasses}>
						<label htmlFor="name">Contact Name</label>
						<input
							id="name"
							type="text"
							name="name"
							required
							placeholder="Enter name"
							onChange={contactNameChangeHandler}
							onBlur={contactNameBlurHandler}
							value={enteredContactName}
						/>
						{contactNameHasError && (
							<p className={classes["error-text"]}>
								Contact Name must not be empty!
							</p>
						)}
					</div>
					<div className={companyNameClasses}>
						<label htmlFor="company">Company Name</label>
						<input
							id="company"
							type="text"
							name="company"
							required
							placeholder="Enter company name"
							value={enteredCompanyName}
							onChange={companyNameChangeHandler}
							onBlur={companyNameBlurHandler}
						/>
						{companyHasError && (
							<p className={classes["error-text"]}>
								Company name must not be empty! If no company name, enter "NA"
							</p>
						)}
					</div>
					<div className={phoneClasses}>
						<label htmlFor="phone">Phone Number</label>
						<input
							id="phone"
							type="tel"
							name="phone"
							required
							placeholder="Enter number"
							value={enteredPhoneNum}
							onChange={phoneNumChangeHandler}
							onBlur={phoneNumBlurHandler}
						/>
						{phoneHasError && (
							<p className={classes["error-text"]}>
								Phone number must be valid! Be sure to add dashes!
							</p>
						)}
					</div>
					<div className={emailClasses}>
						<label htmlFor="email">Email</label>
						<input
							id="email"
							type="email"
							name="email"
							required
							placeholder="Enter email"
							value={enteredEmail}
							onChange={emailChangeHandler}
							onBlur={emailBlurHandler}
						/>
						{emailHasError && (
							<p className={classes["error-text"]}>Email must be valid!</p>
						)}
					</div>
					<div className={messageClasses}>
						<label htmlFor="message">Message</label>
						<textarea
							id="message"
							name="message"
							rows="5"
							required
							placeholder="Enter message"
							value={enteredMessage}
							onChange={messageChangeHandler}
							onBlur={messageBlurHandler}
						/>
						{messageHasError && (
							<p className={classes["error-text"]}>Message cannot be empty!</p>
						)}
					</div>
				</div>
				<div className={classes.actions}>
					<button type="button" onClick={clearHandler}>
						Clear
					</button>
					<button
						disabled={isSubmitting || !formIsValid}
						className={classes.submit}
						onClick={displayModalHandler}
					>
						{isSubmitting ? "Sending..." : "Send"}
					</button>
				</div>
			</Form>
			{modalIsShowing && (
				<Modal onClose={clearHandler}>
					<p>Contact information has been sent!</p>
					<button onClick={clearHandler} className={classes.close}>
						Close
					</button>
				</Modal>
			)}
		</>
	);
};

export default ContactForm;

export async function newContactAction({ request, params }) {
	const method = request.method;

	const data = await request.formData();

	const contactData = {
		contactName: data.get("name"),
		companyName: data.get("company"),
		phoneNum: data.get("phone"),
		email: data.get("email"),
		message: data.get("message"),
	};

	let url =
		"https://portfolio-app-30612-default-rtdb.firebaseio.com/contacts.json";

	const response = await fetch(url, {
		method: method,
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(contactData),
	});

	if (!response.ok) {
		throw json({ message: "Could not save contact info." }, { status: 500 });
	}

	return redirect("../contact");
}
