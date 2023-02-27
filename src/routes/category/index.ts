import { CategoryController } from '../../controllers';
import express from 'express';

const router = express.Router();

router.get('/', CategoryController.list);
router.get('/:id', CategoryController.show);

export default router;
