import { readFile } from "fs";
import * as yaml from "js-yaml";

export const loadYAML = (path: string) =>
  new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(yaml.load(data));
      }
    });
  });
