import 'dotenv/config'
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

export const generate = async (prompt: string, model = 'text-davinci-003', suffix = '', temperature = 1, max_tokens = 100, top_p = 1, frequency_penalty = 0, presence_penalty = 0) => {
  let msg = ''

  while (true) {
    const res = await apiGenerate(prompt, model, suffix, temperature, max_tokens === 10000 ? 100 : max_tokens, top_p, frequency_penalty, presence_penalty)
    msg += res.data.choices[0].text

    if (res.data.choices[0].finish_reason === 'stop' || max_tokens != 10000) break
  }

  return msg
}

const apiGenerate = async (prompt: string, model = 'text-davinci-003', suffix = '', temperature = 1, max_tokens = 100, top_p = 1, frequency_penalty = 0, presence_penalty = 0) =>
  await openai.createCompletion({
    model,
    prompt,
    suffix,
    temperature,
    max_tokens,
    top_p,
    frequency_penalty,
    presence_penalty
  })
