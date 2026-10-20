import matter from 'gray-matter';
import { load, dump } from 'js-yaml';

export function parseFrontMatter(source: string) {
  return matter(source, {
    engines: {
      // gray-matter's default engine uses safeLoad/safeDump, removed in js-yaml 4.
      yaml: {
        parse: (text: string) => {
          const data = load(text);
          if (data == null) return {};
          if (typeof data !== 'object' || Array.isArray(data)) {
            throw new TypeError('Project front matter must be a YAML mapping');
          }
          return data;
        },
        stringify: (data: object) => dump(data),
      },
    },
  });
}
