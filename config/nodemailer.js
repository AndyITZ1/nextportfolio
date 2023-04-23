import nodemailer from "nodemailer";
import { google } from "googleapis";

const OAuth2 = google.auth.OAuth2;

const email = process.env.NEXT_PUBLIC_EMAIL;
const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
const client_secret = process.env.NEXT_PUBLIC_CLIENT_SECRET;
const refresh_token = process.env.NEXT_PUBLIC_REFRESH_TOKEN;

const OAuth2_client = new OAuth2(client_id, client_secret);
OAuth2_client.setCredentials({ refresh_token: refresh_token });

const access_token = OAuth2_client.getAccessToken();

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        type: "OAuth2",
        user: email,
        clientId: client_id,
        clientSecret: client_secret,
        refreshToken: refresh_token,
        accessToken: access_token,
    }
})

export const mailOptions = {
    from: email,
    to: email,
};