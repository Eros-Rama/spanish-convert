import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function generateProverb() {
    try {
        const completion = await openai.chat.completions.create({
            messages: [
                { role: 'system', content: 'Eres un sabio que siempre tiene un refrán a mano. con conocimiento del refranero español.' },
                { role: 'user', content: 'Dime un refrán.' },
            ],
            model: 'gpt-3.5-turbo',
            temperature: 0.7,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        });
        const proverb = completion.choices[0].message.content;
        console.log("Generated Proverb: ", proverb);

        return proverb;
    } catch (error) {
        console.error(error);
        throw new Error('Error generating proverb: ', error.message);
    }
}