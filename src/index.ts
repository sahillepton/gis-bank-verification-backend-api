import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// Routes
//app.use('/api', bankRoutes);

// Serve the HTML page for bank updates
app.get('/api/bank-update', (req, res) => {
    // Get query parameters
    const { bankId, bankName, branchName, ifscCode, ufi, address } = req.query;
    
    // Validate required parameters
    if (!bankId || !bankName || !branchName || !ifscCode || !ufi || !address) {
        return res.status(400).send('Missing required bank information parameters');
    }

    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
   
}); 