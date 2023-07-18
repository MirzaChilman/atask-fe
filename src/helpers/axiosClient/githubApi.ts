import axios from "axios";

const placeholderApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization:
      "Bearer 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",
  },
});

export default placeholderApi;
