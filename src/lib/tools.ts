export interface Tool {
    name: string;
    href: string;
    category: "Cleaning" | "Transform" | "Encode / Decode" | "Data" | "Filter";
    description: string;
}

export const tools: Tool[] = [
    // Cleaning
    { name: "Plain Text Converter", href: "/", category: "Cleaning", description: "Strip all formatting and styles from any text block." },
    { name: "Whitespace Visualizer", href: "/whitespace-visualizer", category: "Cleaning", description: "Make invisible spaces and tabs visible for easy formatting." },
    { name: "Extra Spaces", href: "/remove-extra-spaces", category: "Cleaning", description: "Remove redundant spaces and normalize text spacing." },
    { name: "All Spaces", href: "/remove-all-spaces", category: "Cleaning", description: "Completely purge all spaces from your text string." },
    { name: "Blank Lines", href: "/remove-blank-lines", category: "Cleaning", description: "Remove empty or whitespace-only lines from your content." },
    { name: "HTML Tags", href: "/strip-html-tags", category: "Cleaning", description: "Extract pure text content by stripping all HTML markup." },
    { name: "Strip Emojis", href: "/strip-emojis", category: "Cleaning", description: "Remove all icons and emojis to get clean alphanumeric text." },
    
    // Transform
    { name: "Case Converter", href: "/case-converter", category: "Transform", description: "Switch between UPPERCASE, lowercase, Title Case, and more." },
    { name: "Markdown Strip", href: "/markdown-to-plain-text", category: "Transform", description: "Convert Markdown syntax into clean, readable plain text." },
    { name: "Fix PDF Breaks", href: "/fix-pdf-line-breaks", category: "Transform", description: "Repair broken sentences caused by PDF copy-pasting." },
    { name: "Decode HTML Entities", href: "/decode-html-entities", category: "Transform", description: "Convert entities like &amp; back into normal characters." },
    { name: "Slugify / Desluggify", href: "/slug-generator", category: "Transform", description: "Create URL-friendly slugs or turn slugs back into titles." },
    { name: "Sort Lines", href: "/sort-lines", category: "Transform", description: "Organize your lists alphabetically or by line length." },
    { name: "Add Prefix / Suffix", href: "/add-prefix-suffix", category: "Transform", description: "Bulk add text to the start or end of every single line." },
    { name: "Line Numberer", href: "/line-numberer", category: "Transform", description: "Automatically add sequence numbers to each line of text." },
    { name: "Find and Replace", href: "/find-and-replace", category: "Transform", description: "Search for specific patterns and replace them instantly." },
    
    // Encode / Decode
    { name: "Base64 Encoder", href: "/base64-converter", category: "Encode / Decode", description: "Convert text into Base64 format for secure data transfer." },
    { name: "Base64 Decoder", href: "/base64-converter", category: "Encode / Decode", description: "Decode Base64 strings back into human-readable text." },
    { name: "URL Encoder", href: "/url-converter", category: "Encode / Decode", description: "Make text URL-safe by encoding special characters." },
    { name: "URL Decoder", href: "/url-converter", category: "Encode / Decode", description: "Turn percent-encoded URLs back into plain text strings." },
    
    // Data
    { name: "JSON Formatter", href: "/json-formatter", category: "Data", description: "Pretty-print messy JSON strings into readable structures." },
    { name: "JSON Minifier", href: "/json-minifier", category: "Data", description: "Compress JSON data by removing all unnecessary whitespace." },
    { name: "JSON ↔ CSV", href: "/json-csv-converter", category: "Data", description: "Convert between JSON arrays and CSV data tables easily." },
    { name: "Remove Duplicate Lines", href: "/remove-duplicate-lines", category: "Data", description: "Filter out identical lines from your data list instantly." },
    { name: "Remove Duplicate Paragraphs", href: "/remove-duplicate-paragraphs", category: "Data", description: "Clean up long-form content by removing repeated sections." },
    { name: "Remove Duplicate Words", href: "/remove-duplicate-words", category: "Data", description: "Purge repeated words within sentences for cleaner text." },
    { name: "Remove Duplicate Sentences", href: "/remove-duplicate-sentences", category: "Data", description: "Identify and remove identical sentences from your text." },
    { name: "Remove Commas", href: "/remove-commas", category: "Data", description: "Remove all commas from your CSV or formatted data strings." },
    
    // Filter
    { name: "Redact Sensitive Info", href: "/redact-sensitive-info", category: "Filter", description: "Automatically hide emails, phone numbers, and IP addresses." },
    { name: "Character Frequency", href: "/character-frequency", category: "Filter", description: "Analyze the distribution of characters in your text block." },
    { name: "Strip Links", href: "/strip-links-urls", category: "Filter", description: "Remove all hyperlinks and URLs from your content block." },
    { name: "Strip Emails", href: "/strip-email-addresses", category: "Filter", description: "Purge all email contact information from your text files." },
    { name: "Strip Symbols", href: "/remove-numbers-special-characters", category: "Filter", description: "Remove non-alphanumeric characters and special symbols." },
    { name: "Twitter Trimmer", href: "/text-trimmer", category: "Filter", description: "Truncate text to fit within the 280-character limit." },
    { name: "SMS Trimmer", href: "/text-trimmer", category: "Filter", description: "Ensure your message stays within the 160-character limit." },
    { name: "LinkedIn Trimmer", href: "/text-trimmer", category: "Filter", description: "Format and trim posts for optimal LinkedIn sharing." },
    { name: "Word Truncator", href: "/text-trimmer", category: "Filter", description: "Cut off text after a specific number of words or chars." }
];
