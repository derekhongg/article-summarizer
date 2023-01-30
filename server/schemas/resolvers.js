const { AuthenticationError } = require("apollo-server-express");
const { User, Summary } = require('../models');
const { signToken } = require("../utils/auth.js");
const {generateSummary} = require('../controllers/summary.controller')
// resolvers are where we defined how we want to query our data

// const { Configuration, OpenAiAPI } = require("openai");

// const configuration = new Configuration({
//     apiKey: process.env.OPEN_AI_API_KEY
// })

// const openai = new OpenAiAPI(configuration);

const resolvers = {
  Query: {
    user: async (parent, {userId}, context) => {
      if (context.user) {
        User.findOne({_id: userId})
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    users: async () => {
      return User.find();
    }, 

    summary: async (parent, {summaryId}) => {
      return Summary.findOne({_id: summaryId})
    }, 

    summaries: async () => {
      return Summary.find();
    }, 

  },
  Mutation: {
    register: async (parent, { name, email, password, confirmPassword }) => {
      const user = await User.create({ name, email, password, confirmPassword});
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },

    generateSummary: async(parent, args, context) => {
      try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "Example text for now",
            temperature: 0.7,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 1,
        })

        const summaryData = response.data.data[0];

        const createdSummary = Summary.create({
          title: args.title,
          content: summaryData
        })

        return createdSummary;

    } catch (error) {
        res.status(400).json({
            success: false,
            error: 'Summary could not be generated'
        })
    }
    }
  },
};

module.exports = resolvers;