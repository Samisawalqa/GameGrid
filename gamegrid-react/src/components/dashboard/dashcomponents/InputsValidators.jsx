export function validateInput(value, type) {
    let isValid = false;
    let message = '';

    switch (type) {
        case 'fullname':
            if (typeof value !== 'string' || value.trim() === '') {
                message = 'Full name must be a non-empty string.';
                break;
            }
            const parts = value.trim().split(' ');
            if (parts.length !== 2) {
                message = 'Full name must consist of exactly two parts: first name and last name.';
                break;
            }
            const [firstName, lastName] = parts;
            if (!/^[A-Za-z]+$/.test(firstName) || !/^[A-Za-z]+$/.test(lastName)) {
                message = 'Names must contain only alphabetic characters.';
                break;
            }
            isValid = true;
            message = 'Valid full name.';
            break;

        case 'username':
            if (typeof value !== 'string' || value.trim() === '') {
                message = 'Username must be a non-empty string.';
                break;
            }
            if (!/^[A-Za-z0-9_]{3,15}$/.test(value.trim())) {
                message = 'Username must be 3-15 characters long and contain only letters, numbers, and underscores.';
                break;
            }
            isValid = true;
            message = 'Valid username.';
            break;

        case 'email':
            if (typeof value !== 'string' || value.trim() === '') {
                message = 'Email must be a non-empty string.';
                break;
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value.trim())) {
                message = 'Invalid email format.';
                break;
            }
            isValid = true;
            message = 'Valid email.';
            break;

        case 'password':
            if (typeof value !== 'string' || value.trim() === '') {
                message = 'Password must be a non-empty string.';
                break;
            }

            // Check password length (at least 8 characters)
            if (value.length < 8) {
                message = 'Password must be at least 8 characters long.';
                break;
            }

            // Check for uppercase letters
            if (!/[A-Z]/.test(value)) {
                message = 'Password must contain at least one uppercase letter.';
                break;
            }

            // Check for lowercase letters
            if (!/[a-z]/.test(value)) {
                message = 'Password must contain at least one lowercase letter.';
                break;
            }

            // Check for numbers
            if (!/[0-9]/.test(value)) {
                message = 'Password must contain at least one number.';
                break;
            }

            // Check for special characters
            if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
                message = 'Password must contain at least one special character.';
                break;
            }

            isValid = true;
            message = 'Valid password.';
            break;

        case 'address':
            isValid = true;
            break;

        case 'role':
            isValid = true;
            break;

        default:
            message = 'Invalid validation type.';
            break;
    }

    return [isValid, message];
}
