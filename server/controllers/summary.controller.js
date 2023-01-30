// const { Configuration, OpenAiAPI } = require("openai");

// const configuration = new Configuration({
//     apiKey: process.env.OPEN_AI_API_KEY
// })

// const openai = new OpenAiAPI(configuration);

// const generateSummary = async (req, res) => {
//     try {
//         const response = await openai.createCompletion({
//             model: "text-davinci-003",
//             prompt: "Example text for now",
//             temperature: 0.7,
//             max_tokens: 60,
//             top_p: 1.0,
//             frequency_penalty: 0.0,
//             presence_penalty: 1,
//         })

//         const summary = response.data.data[0];

//         res.status(200).json({
//             success: true,
//             data: summary,
//         })

//     } catch (error) {
//         res.status(400).json({
//             success: false,
//             error: 'Summary could not be generated'
//         })
//     }
// }

// module.exports = { generateSummary }