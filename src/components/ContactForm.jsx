import emailjs from '@emailjs/browser';

export default function ContactForm() {

    emailjs.init({
        publicKey: 'MPClBf74aS5N3-fKY',
        blockHeadless: true,
        limitRate: {
            // Set the limit rate for the application
            id: 'app',
            // Allow 1 request per 10s
            throttle: 10000,
        },
    });


    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_js6x35h', 'template_pdz3jec', e.target).then(() => { 
            document.getElementById('sentAlert').classList.toggle('active');
            setTimeout(() => {
                document.getElementById('sentAlert').classList.toggle('active');
            }, 3000);

            
            return false;
         }, (error) => {
            console.error(error);
        });
    }

    return (<form id="contact-form" onSubmit={sendEmail}>
        <div className="md:w-1/2 flex flex-col float-start text-left px-10">
            <label>Name:</label>
            <input id="name" name="name" ></input>
            <label>Phone Number:</label>
            <input id="phone" name="phone" type="tel" ></input>
            <label>Email:</label>
            <input id="email" name="email" type="email" ></input>
        </div>
        <div className="md:w-1/2 flex flex-col text-left px-10">
            <label>Message:</label>
            <textarea name="message" rows="10" id="message"></textarea>
        </div>
        <div className="w-full text-center text-lg">
            <button type="submit" className="bg-slate-600 px-10 py-2 mt-10 rounded"> Send </button>
        </div>

    </form>)
}