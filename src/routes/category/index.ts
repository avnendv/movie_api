import express from 'express';
import { CategoryController } from '@/controllers';

const router = express.Router();

router.get('/', CategoryController.list);
router.get('/:id', CategoryController.show);
router.post('/store', CategoryController.store);
router.put('/:id/update', CategoryController.update);
router.delete('/:id/destroy', CategoryController.destroy);
router.get('/:id/restore', CategoryController.restore);

export default router;
