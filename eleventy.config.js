import { fromHighlighter } from '@shikijs/markdown-it'
import { createHighlighter, bundledLanguages } from "shiki";
import { transformerNotationDiff, transformerNotationHighlight, transformerNotationFocus } from '@shikijs/transformers'
import MarkdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';

export default async function (eleventyConfig) {

    const highlighter = await createHighlighter({
        themes: ["github-light", "github-dark"],
        langs: [
            bundledLanguages["c#"],
            bundledLanguages.css,
            bundledLanguages.docker,
            bundledLanguages.dotenv,
            bundledLanguages.html,
            bundledLanguages.javascript,
            bundledLanguages.json,
            bundledLanguages.liquid,
            bundledLanguages.powershell,
            bundledLanguages.razor,
            bundledLanguages.typescript
        ]
    });

	const shiki = fromHighlighter(highlighter, {
		 themes: {
            light: "github-light",
            dark: "github-dark"
        },
		transformers: [
			transformerNotationDiff({
				matchAlgorithm: 'v3',
			}),
			transformerNotationHighlight(),
			transformerNotationFocus(),

		]
	});

	const markdownItOptions = {
		html: true,
		breaks: true,
		linkify: true
	}

	const markdownLib = MarkdownIt(markdownItOptions)
		.use(markdownItAttrs)
		.use(shiki);

	eleventyConfig.setLibrary('md', markdownLib);
}