export default function FormBottom() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col gap-3 mb-5">
                <label>How did you hear about me?</label>
                <select name="source" required className="flex flex-col p-2 bg-[#272727]">
                    <option value="" disabled selected>Select</option>
                    <option value="Instagram">Instagram</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Referral">Referral</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <button type="submit" className="bg-warm-orange font-medium text-lg px-5 py-2 rounded-lg">
                Let&apos;s Connect!
            </button>
        </div>
    );
}