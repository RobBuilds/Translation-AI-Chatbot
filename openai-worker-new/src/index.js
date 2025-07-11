import OpenAI from "openai";


export default {
	async fetch(request, env) {
		if (request.method === "OPTIONS"){
			return new Response(null, {
				headers: {
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "POST, OPTIONS",
					"Access-Control-Allow-Headers": "Content-Type"
				}
			});
	}
		if (request.method !== "POST") {
			return new Response("Method not allowed", {status: 405});
		}
		const { message } = await request.json();
		const client = new OpenAI({
			apiKey: env.REACT_APP_OPENAI_API_KEY,
			baseURL: "https://gateway.ai.cloudflare.com/v1/d5dc49bf02deef67e4383157fde6553f/ai-translation/"
		});

		const response = await client.chat.completions.create({
			model: "gpt-4",
			messages: [
				{
					role: "system",
					content: "you are a multi lingual translator"
				},
				{
					role: "user",
					content: message
				}
			]

		})
		return new Response(JSON.stringify({
			reply: response.choices[0].message.content
		}), {
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*"
			}
		});

	},
};
