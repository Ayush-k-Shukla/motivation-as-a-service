import { Request, Response } from 'express';
import { quotes } from '../data/quotes';

export const getMotivation = (req: Request, res: Response): void => { // Explicitly set return type to void
    const { mode } = req.query;

    let filteredQuotes = quotes;

    if (mode && typeof mode === 'string') {
        const requestedMode = mode.toLowerCase();
        // Check if the requested mode is valid
        const isValidMode = quotes.some(q => q.category === requestedMode);

        if (isValidMode) {
            filteredQuotes = quotes.filter(q => q.category === requestedMode);
        }
    }

    if (filteredQuotes.length === 0) {
         res.status(404).json({ message: "No quotes found." }); // Should not happen with current data but good practice
         return;
    }

    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
    const randomQuote = filteredQuotes[randomIndex];

    res.json(randomQuote);
};
