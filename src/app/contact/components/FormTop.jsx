function InputDiv({ label, required, inputType, inputName, inputId, inputPlaceholder }) {
    return (
        <div className="flex flex-col text-base font-normal">
            <label htmlFor={inputId}>
                {label}
                {required && <span className="text-primaryYellow text-warm-orange"> *</span>}
            </label>
            <input
                type={inputType}
                name={inputName}
                id={inputId}
                placeholder={inputPlaceholder}
                required={!!required}
                className="bg-[#272727] p-2 mt-2 mb-6"
            />
        </div>
    );
}

export default function FormTop() {
    return (
        <div>
            <InputDiv
                label="Your Name"
                required={true}
                inputType="text"
                inputName="name"
                inputId="name"
                inputPlaceholder="Your Name" />
            <InputDiv
                label="Your Organization's Name"
                required={true}
                inputType="text"
                inputName="organization"
                inputId="organization"
                inputPlaceholder="Your Organization's Name" />
            <InputDiv
                label="Your Email"
                required={true}
                inputType="email"
                inputName="email"
                inputId="email"
                inputPlaceholder="Your Email" />
            <InputDiv
                label="Your Contact"
                required={true}
                inputType="tel"
                inputName="contact"
                inputId="contact"
                inputPlaceholder="Your Contact" />
            <InputDiv
                label="Website/Social Media"
                required={false}
                inputType="url"
                inputName="social-media"
                inputId="social-media"
                inputPlaceholder="Your Social Media" />
        </div>
    );
}