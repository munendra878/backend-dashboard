const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Content = require('./Content.model');

router.get('/', auth, async (req, res) => res.json(await Lead.find()));
router.post('/', auth, async (req, res) => res.json(await new Lead(req.body).save()));
router.put('/:id', auth, async (req, res) => res.json(await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true })));
router.delete('/:id', auth, async (req, res) => { await Lead.findByIdAndDelete(req.params.id); res.json({ message: 'Deleted' }) });

module.exports = router;
