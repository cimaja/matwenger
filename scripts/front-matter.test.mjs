import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import test from 'node:test';
import { parseFrontMatter } from '../lib/front-matter.ts';

test('parses nested project metadata and preserves Markdown', () => {
  const source = '---\ntitle: Test\nyear: 2026\ntags: [Design, Web]\ngallery:\n  - src: /image.png\n    alt: Example\n---\n# Project\n\nBody.\n';
  const result = parseFrontMatter(source);
  assert.deepEqual(result.data, {
    title: 'Test',
    year: 2026,
    tags: ['Design', 'Web'],
    gallery: [{ src: '/image.png', alt: 'Example' }],
  });
  assert.equal(result.content, '# Project\n\nBody.\n');
});

test('handles Markdown without metadata', () => {
  const result = parseFrontMatter('# Plain Markdown\n');
  assert.deepEqual(result.data, {});
  assert.equal(result.content, '# Plain Markdown\n');
});

test('rejects invalid YAML and executable YAML tags', () => {
  assert.throws(() => parseFrontMatter('---\ntags: [unterminated\n---\n'));
  assert.throws(() => parseFrontMatter('---\nvalue: !!js/function "function () {}"\n---\n'));
});

test('requires metadata to be a mapping and accepts empty metadata', () => {
  assert.deepEqual(parseFrontMatter('---\n# Empty\n---\nBody').data, {});
  assert.throws(() => parseFrontMatter('---\n- list item\n---\n'));
  assert.throws(() => parseFrontMatter('---\nscalar\n---\n'));
});

test('reads every existing project', () => {
  const directory = new URL('../content/projects/', import.meta.url);
  const files = readdirSync(directory).filter(file => file.endsWith('.md'));
  assert.ok(files.length > 0);
  for (const file of files) {
    const { data, content } = parseFrontMatter(readFileSync(new URL(file, directory), 'utf8'));
    assert.equal(typeof data.title, 'string', file);
    assert.ok(Array.isArray(data.tags), file);
    assert.ok(content.trim().length > 0, file);
  }
});
