const Router = require('express').Router
const router = new Router();

const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://projetosimples:senha123@localhost:5432/data');
const Itens = sequelize.define('itens', {
    codigo: { type: Sequelize.STRING },
    descricao: { type: Sequelize.STRING },
    ativo: { type: Sequelize.BOOLEAN },

    createdAt: {
        allowNull: false,
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATE,
        field: "created_at",
    },
    updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATE,
        field: "updated_at",
    },
    deletedAt: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.DATE,
        field: "deleted_at",
    }
});

router.get('/', async (req, res) => {
    return res.json(await Itens.findAll())
});

router.post('/', (req, res) => {
    const item = req.body;
    const resp = Itens.create(item);
    res.json(resp);
});

module.exports = router;