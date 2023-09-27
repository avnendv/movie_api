import express from 'express';
import { MovieEpisodeController } from '@/controllers';

const router = express.Router();

router.get('/', MovieEpisodeController.list);
router.get('/:id', MovieEpisodeController.show);
router.post('/store', MovieEpisodeController.store);
router.put('/:id/update', MovieEpisodeController.update);
router.delete('/:id/destroy', MovieEpisodeController.destroy);
router.get('/:id/restore', MovieEpisodeController.restore);

export default router;
