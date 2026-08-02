class ContactRequest {
    constructor(data = {}) {
        this.name = data.name?.trim() || "";
        this.email = data.email?.trim().toLowerCase() || "";
        this.phone = data.phone?.trim() || "";
        this.company = data.company?.trim() || "";
        this.service = data.service?.trim() || "";
        this.message = data.message?.trim() || "";
    }

    toJSON() {
        return {
            name: this.name,
            email: this.email,
            phone: this.phone,
            company: this.company,
            service: this.service,
            message: this.message
        };
    }
}

module.exports = ContactRequest;