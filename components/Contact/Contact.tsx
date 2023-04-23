'use client';
import { useState } from "react";

import styles from "./Contact.module.scss"
import { Noto_Sans_KR } from "next/font/google"
import { sendMessage } from "@/lib/api";

const noto_sans_kr = Noto_Sans_KR({
    weight: ["400"],
    subsets: ["latin"]
});
 
const initValues = { 
    name: "",
    email: "",
    subject: "",
    message: "",
};

const initState = { values: initValues };

// Side Note: Next v13.3.0 doesn't prompts an error when using 'use client'
// Current workarounds downgrade to 13.2.4 or below or utilize arrow functions
const Contact = () => {
    const [state, setState] = useState(initState);
    const { values } = state;

    const handleChange = ({target} : any) => {
        setState((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [target.name]: target.value
            }
        }))
    };

    const onSubmit = async (e : any) => {
        e.preventDefault();
        try {
            await sendMessage(state);
            setState(initState);
        } 
        catch (error) {
            console.log(error);
        }
    }

    return (
        <form className={`${styles.cform}`} onSubmit={onSubmit}>
            <label htmlFor="cname">Name</label>
            <input className={`${noto_sans_kr.className}`} type="text" id="cname" name="name" value={values.name} onChange={handleChange}/>
            <label htmlFor="cemail">Email</label>
            <input className={`${noto_sans_kr.className}`} type="email" id="cemail" name="email" value={values.email} onChange={handleChange} />
            <label htmlFor="csubject">Subject</label>
            <input className={`${noto_sans_kr.className}`} type="text" id="csubject" name="subject" value={values.subject} onChange={handleChange} />
            <label htmlFor="cmessage">Message</label>
            <textarea className={`${noto_sans_kr.className}`} id="message" name="message" value={values.message} onChange={handleChange}></textarea>
            <button className={`${noto_sans_kr.className}`}type="submit">Send</button>
        </form>
    )
}

export default Contact;