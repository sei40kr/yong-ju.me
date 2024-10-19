import { cache } from "@solidjs/router";

export const getResume = cache(
  async () =>
    await ((
      await fetch("http://jsonresume.yong-ju.me/resume.json")
    ).json() as Promise<Resume>),
  "resume",
);
