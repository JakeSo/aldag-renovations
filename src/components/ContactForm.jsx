import { useState } from "react";
import emailjs from 'emailjs-com';

export default function ContactForm() {

     const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: ''})

    function updateForm(field, value) {
        setFormData({
            ...formData,
            [field]: value
        });
     }

     function sendEmail(e){
       e.preventDefaul();
       emailjs.sendForm('SERVICE_ID','contact_form',e.target,'USER_ID').then(() => {}, (error) => {

       });     
     }

    return (<form id="contact-form w-full" onSubmit={sendEmail}>
        <div className="md:w-1/2 flex flex-col float-start text-left px-10">
            <label>Name:</label>
            <input id="name" name="name" value={formData.name} onChange={(e) => updateForm('name',e.target.value )}></input>
            <label>Phone Number:</label>
            <input id="phone" name="phone" type="tel" value={formData.phone} onChange={(e) => updateForm('phone',e.target.value )} ></input>
            <label>Email:</label>
            <input id="email" name="email" type="email" value={formData.email} onChange={(e) => updateForm('email',e.target.value )}></input>
        </div>
        <div className="md:w-1/2 flex flex-col text-left px-10">
            <label>Message:</label>
            <textarea name="message" rows="10" id="message" value={formData.message} onChange={(e) => updateForm('message',e.target.value )}></textarea>
        </div>
        <div className="w-full text-center text-lg">
            <button type="submit" className="bg-slate-600 px-10 py-2 mt-10 rounded"> Send </button>
        </div>

    </form>)
}