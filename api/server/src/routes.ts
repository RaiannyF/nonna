import express from 'express';
import knex from './database/connection';

const routes = express();

routes.post('/usuarios', async (request, response) => {
    const {
        nome,
        email,
        telefone,
        endereco,
        senha,
        categoria
    } = request.body;

    const usuario = {
        nome,
        email,
        telefone,
        endereco,
        senha,
        categoria
    }

    const insertedIds = await knex('usuario').insert(usuario);
    const usuario_id = insertedIds[0];

    return response.json({
        id: usuario_id,
        ...usuario
    });
});

routes.get('/usuarios', async (request, response) => {
    const usuarios = await knex('usuario')
        .select('usuario.codigo', 'usuario.nome');

    return response.json(usuarios);
});

export default routes;
 