import { MovieController } from '../../controllers';
import express from 'express';

const router = express.Router();

router.get('/', MovieController.list);
router.get('/:id', MovieController.show);
router.post('/store', MovieController.store);
router.put('/:id/update', MovieController.update);
router.delete('/:id/destroy', MovieController.destroy);
router.get('/:id/restore', MovieController.restore);

export default router;
