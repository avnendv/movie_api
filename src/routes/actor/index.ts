import { ActorController } from '@/controllers';
import express from 'express';

const router = express.Router();

router.get('/', ActorController.list);
router.get('/:id', ActorController.show);
router.post('/store', ActorController.store);
router.put('/:id/update', ActorController.update);
router.delete('/:id/destroy', ActorController.destroy);
router.get('/:id/restore', ActorController.restore);

export default router;
