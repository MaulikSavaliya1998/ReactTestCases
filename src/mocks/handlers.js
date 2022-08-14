// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.post("http://localhost:5000/addcomment", (req, res, ctx) => {
    // sessionStorage.setItem("is-authenticated", "true");
    return res(ctx.json({ id: Date.now(), text: req.body.text }));
  }),
];
