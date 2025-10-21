import Stripe from "stripe";
import {getBaseUrl} from "../../../utils/getBaseUrl.js"


const API_KEY = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY
// const stripe = new Stripe(API_KEY);  //for dev
const stripe = new Stripe(API_KEY, {
    apiVersion:  '2025-09-30'
});  //for prod

export async function POST(request) {
    try {
        const { lineItems } = await request.json();
        console.log(lineItems);
        const baseURL = getBaseUrl();
        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            line_items: lineItems,
            success_url: baseURL + '/success',
            cancel_url: baseURL + '/'
        })
        return Response.json(session)
    } catch (err) {
        console.error('Error creating cart checkout ', err.message)
        return Response.json({ error: 'Failed to create stripe checkout page' })
    }

}