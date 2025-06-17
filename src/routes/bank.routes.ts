import { Router, Request, Response } from 'express';
import { BankUpdateRequest, BankUpdateResponse } from '../types/bank.types';

const router = Router();

router.get('/bank-update', async (req: Request<{}, {}, BankUpdateRequest>, res: Response<BankUpdateResponse>) => {
  try {
    const data = req.query

    // Here you would typically validate the data and update it in your database
    // For now, we'll just return the received data
    console.log(data);
    
    const response: BankUpdateResponse = {  
      success: true,
      message: 'Bank information updated successfully',
    
    };

    return res.status(200).json(response);
  } catch (error) {
    const errorResponse: BankUpdateResponse = {
      success: false,
      message: error instanceof Error ? error.message : 'An error occurred while updating bank information'
    };
    
    return res.status(500).json(errorResponse);
  }
});

export default router; 