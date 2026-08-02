/**
 * Validate Contact Form Request
 */

function validateContactRequest(contact) {

    const errors = [];

    // Name
    if (!contact.name || contact.name.length < 2) {
        errors.push("Name must contain at least 2 characters.");
    }

    // Email
    if (!contact.email) {
        errors.push("Email is required.");
    }
    else {

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(contact.email)) {
            errors.push("Invalid email address.");
        }
    }

    // Phone (Optional)

    if (contact.phone) {

        const phoneRegex =
            /^[0-9+\-\s()]{7,20}$/;

        if (!phoneRegex.test(contact.phone)) {
            errors.push("Invalid phone number.");
        }
    }

    // Company (Optional)

    if (contact.company && contact.company.length > 100) {
        errors.push("Company name is too long.");
    }

    // Service

    if (!contact.service) {
        errors.push("Please select a service.");
    }

    // Message

    if (!contact.message || contact.message.length < 10) {
        errors.push("Message must contain at least 10 characters.");
    }

    return {
    success: errors.length === 0,
    message:
        errors.length === 0
            ? "Validation successful."
            : errors.join(" "),
    errors
    };

}

module.exports = {
    validateContactRequest
};