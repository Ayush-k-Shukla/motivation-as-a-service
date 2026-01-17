import fs from 'fs';
import path from 'path';

const positiveTemplates = [
    "Believe in the magic of {noun}.",
    "You are capable of {adjective} things.",
    "Every day is a new {noun}.",
    "Keep pushing, you are {adjective}.",
    "Success is {verb} your {noun}.",
    "Your potential is {adjective}.",
    "Don't stop until you are {adjective}.",
    "Dream big and {verb}.",
    "You have the power to {verb}.",
    "Be the {noun} you want to see."
];
const positiveNouns = ["dreams", "future", "hope", "light", "beginning", "journey", "success", "victory", "growth", "magic"];
const positiveAdjectives = ["amazing", "limitless", "unstoppable", "wonderful", "great", "powerful", "brilliant", "fearless", "strong", "resilient"];
const positiveVerbs = ["achieve", "conquer", "create", "inspire", "shine", "grow", "win", "succeed", "fly", "soar"];

const brutalQuotes = [
    "Your code is bad.", "No one cares.", "Give up now.", "It's too late.", "You are average.",
    "Failure is inevitable.", "Why bother?", "Just stop.", "Go home.", "Try harder.",
    "Not good enough.", "Mediocrity is key.", "Expect disappointment.", "Hope is a lie.", "Life is hard.",
    "You will fail.", "Accept defeat.", "Lower your standards.", "It won't work.", "Start over.",
    "Nobody is watching.", "You are replaceable.", "Money talks.", "Dreams die.", "Reality bites."
];

const developerThings = ["bug", "feature", "deployment", "commit", "merge", "branch", "repo", "stack", "server", "database", "API", "frontend", "backend", "variable", "function", "class", "object", "array", "loop", "recursion"];
const developerActions = ["fixed", "broke", "deployed", "reverted", "ignored", "hacked", "documented", "tested", "debugged", "refactored"];
const developerResults = ["works", "fails", "crashes", "hangs", "loops", "returns null", "throws error", "compiles", "runs", "segfaults"];

const corporateBuzzwords = ["synergy", "bandwidth", "leverage", "paradigm", "ecosystem", "vertical", "horizontal", "matrix", "pipeline", "roadmap"];
const corporateActions = ["circle back", "drill down", "touch base", "ping", "escalate", "align", "brainstorm", "ideate", "onboard", "offboard"];
const corporateOutcomes = ["value add", "low hanging fruit", "win-win", "best practice", "core competency", "game changer", "next level", "deep dive", "hard stop", "action item"];

const indianRelatives = ["Sharma ji", "Gupta ji", "Verma ji", "Mishra ji", "Neighbor", "Auntie", "Uncle", "Boss", "Teacher", "Principal"];
const indianComparison = ["ka ladka", "ki ladki", "ka beta", "ki beti", "ka dog", "ka car", "ka house", "ka job", "ka salary", "ka marks"];
const indianObsessions = ["marks", "government job", "marriage", "engineering", "medical", "USA visa", "MBA", "FD", "gold", "property"];

function getRandom(arr: string[]) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generatePositive() {
    const t = getRandom(positiveTemplates);
    return t.replace('{noun}', getRandom(positiveNouns))
            .replace('{adjective}', getRandom(positiveAdjectives))
            .replace('{verb}', getRandom(positiveVerbs));
}

function generateBrutal() {
    return getRandom(brutalQuotes) + (Math.random() > 0.5 ? " Really." : "");
}

function generateDeveloper() {
    return `When your ${getRandom(developerThings)} ${getRandom(developerActions)}, it ${getRandom(developerResults)}.`;
}

function generateCorporate() {
    return `We need to ${getRandom(corporateActions)} to ${getRandom(corporateActions)} the ${getRandom(corporateBuzzwords)} for ${getRandom(corporateOutcomes)}.`;
}

function generateIndian() {
    return `Dekho, ${getRandom(indianRelatives)} ${getRandom(indianComparison)} has ${getRandom(indianObsessions)}.`;
}

const quotes: any[] = [];

for (let i = 0; i < 110; i++) quotes.push({ text: generatePositive(), category: 'positive' });
for (let i = 0; i < 110; i++) quotes.push({ text: generateBrutal(), category: 'brutal' });
for (let i = 0; i < 110; i++) quotes.push({ text: generateDeveloper(), category: 'developer' });
for (let i = 0; i < 110; i++) quotes.push({ text: generateCorporate(), category: 'corporate' });
for (let i = 0; i < 110; i++) quotes.push({ text: generateIndian(), category: 'indian' });

const content = `export interface Quote {
    text: string;
    category: 'positive' | 'brutal' | 'developer' | 'corporate' | 'indian';
}

export const quotes: Quote[] = ${JSON.stringify(quotes, null, 4)};
`;

const targetPath = path.join(__dirname, '../src/data/quotes.ts');
// Ensure directory exists
const dir = path.dirname(targetPath);
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

fs.writeFileSync(targetPath, content);
console.log('Generated quotes.ts with ' + quotes.length + ' quotes.');
