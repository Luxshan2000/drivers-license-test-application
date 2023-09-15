import { fireEvent, render } from "@testing-library/react";
import SignUp from "../views/SignUp"; // Import SignUp correctly


describe("SignUp Form", () => { // Correct the typo in describe

    test('should provide name, email, password, confirm password', () => {
        
        const handleSubmit = jest.fn();
        const email = "test@example.com";
        const { getByLabelText, getByText } = render(<SignUp onSubmit={handleSubmit} />); // Use SignUp here, not FeedbackForm
        fireEvent.change(getByLabelText('Name'), { target: { value: 'Test User' } });
        fireEvent.change(getByLabelText('Email address'), { target: { value: 'test@example.com' } });
        fireEvent.change(getByLabelText('Password'), { target: { value: 'test123' } });
        fireEvent.change(getByLabelText('Re-enter password'), { target: { value: 'test123' } });

        fireEvent.click(getByText('Sign Up'));

        expect(handleSubmit).toHaveBeenCalled();
    });
});

