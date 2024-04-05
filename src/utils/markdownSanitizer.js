const marked = require('marked');
const sanitizeHtmlLibary = require('sanitize-html');
const TurndownService = require('turndown');
const turndown = require('turndown');

function sanitizeMarkdownContent(markdownContent) {

    const turndownService = new TurndownService();

    //1. Convert markdown to html
    const convertedHtml = marked.parse(markdownContent);

    //2. Sanitize html
    const sanitizedHtml = sanitizeHtmlLibary(convertedHtml, {
        allowedTags: sanitizeHtmlLibary.defaults.allowedTags.concat(['img'])
    })

    //3. Convert the sanitized html back to markdown
    const sanitizeMarkdown = turndownService.turndown(sanitizedHtml)

    return sanitizeMarkdown
}

module.exports = sanitizeMarkdownContent;
