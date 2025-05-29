"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const sync_1 = require("csv-parse/sync");
// Helper to safely trim
const safe = (val) => (val ? val.trim() : '');
// Helper to safely parse array fields
const safeParseArray = (input, projectName, fieldName) => {
    if (!input)
        return [];
    try {
        const cleaned = input.trim()
            .replace(/^"(.*)"$/, '$1') // remove outer quotes if present
            .replace(/\\"/g, '"'); // unescape internal quotes
        return JSON.parse(cleaned);
    }
    catch (err) {
        console.warn(`⚠️ Failed to parse ${fieldName} array for project ${projectName}: ${input}`);
        return [];
    }
};
const csvFilePath = path_1.default.join(__dirname, 'wrappedData.csv');
const csvContent = fs_1.default.readFileSync(csvFilePath, 'utf-8');
const records = (0, sync_1.parse)(csvContent, {
    columns: true,
    skip_empty_lines: true
});
const projectConfigs = records.map((record) => {
    const projectId = safe(record['ProjectID']);
    const name = safe(record['Project name']);
    const totalRewards = parseFloat(record['OP Amount'] || 0).toLocaleString();
    const transactions = parseInt(record['Total downstream TXs'] || 0).toLocaleString();
    const logo = safe(record['Logo']);
    const featuredRaw = safeParseArray(record['Top Users'], name, 'Top Users');
    const extendedRaw = safeParseArray(record['All Users'], name, 'All Users');
    const featured = featuredRaw.map((projName) => ({
        name: projName.trim(),
        description: 'Optimism project',
        icon: '/optimism-logo.svg'
    }));
    const extended = extendedRaw.map((projName) => ({
        name: projName.trim(),
        description: 'DeFi'
    }));
    return {
        projectId,
        user: {
            name,
            project: 'Optimism Project',
            profileImage: logo || '/optimism-logo.svg',
            description: `Hey ${name}, let's look back at your Retro Funding journey over the past 6 months!`
        },
        metrics: {
            tokens: {
                value: totalRewards,
                description: '',
                subtitle: 'These rewards recognize your contribution to the Optimism ecosystem.'
            },
            transactions: {
                value: transactions,
                chartData: [
                    { month: 'Jan', value: parseInt(record['Txs Jan'] || 0) },
                    { month: 'Feb', value: parseInt(record['Txs Feb'] || 0) },
                    { month: 'Mar', value: parseInt(record['Txs March'] || 0) },
                    { month: 'Apr', value: parseInt(record['Txs April'] || 0) },
                    { month: 'May', value: parseInt(record['Txs Mai'] || 0) },
                    { month: 'Jun', value: parseInt(record['TXs June'] || 0) },
                    { month: 'Jul', value: 0 }
                ],
                description: `Your peak month was June with ${record['TXs June']} transactions!`
            }
        },
        projects: {
            featured,
            extended
        },
        branding: {
            title: `${name} Retro Funding Wrapped`,
            year: '2025',
            hashtags: ['#Optimism']
        }
    };
});
const outputPath = path_1.default.join(__dirname, 'projects.json');
fs_1.default.writeFileSync(outputPath, JSON.stringify(projectConfigs, null, 2));
console.log(`✅ Successfully generated ${projectConfigs.length} project configs to projects.json`);
