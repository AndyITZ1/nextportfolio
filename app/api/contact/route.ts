import { mailOptions, transporter } from "@/config/nodemailer";

interface ContactFields {
    name: string,
    email: string,
    subject: string,
    message: string
}

const CONTACT_FIELDS: ContactFields = {
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message"
}

const generateEmailMessage = (data : ContactFields) => {
 const stringData = Object.entries(data).reduce((str, [key, val]) => str += `${CONTACT_FIELDS[key as keyof ContactFields]}: \n${val} \n \n`, "");

 const htmlData = Object.entries(data).reduce((str, [key, val]) => str += `<h1>${CONTACT_FIELDS[key as keyof ContactFields]}</h1><p>${val}</p>`, "");

 return {
    text: stringData,
    html: htmlData
 }
}

export async function POST(request: Request) {
    const body = await request.json();
    const data = body.values;
    console.log(data);

    try {
        await transporter.sendMail({
            ...mailOptions,
            ...generateEmailMessage(data),
            subject: data.subject,
        });
        return new Response(JSON.stringify({ success: true }), {
            status: 200,
        })
    } 
    catch (error) {
        console.log(error);
        return new Response(String(error),  {
            status: 400,
        })
    }
}