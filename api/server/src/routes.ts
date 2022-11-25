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
        .select('usuario.*');

    return response.json(usuarios);
});

routes.delete('/usuarios/:codigo', async (request, response) => {
    const { codigo } = request.params;

    await knex('usuario')
        .delete()
        .where('usuario.codigo', codigo);

    return response.json({
        status: 'sucess'
    });
});

routes.put('/usuarios/:codigo', async (request, response)=> {
    const { codigo } = request.params;

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

    await knex('usuario')
        .update(usuario)
        .where ('codigo', codigo);

    return response.json({
        status: 'sucess',
        data: usuario
    });
});

//familiares
routes.post('/familiares', async (request, response) => {
    const {
        nome,
        endereco,
        telefone,
        foto
    } = request.body;

    const familiar = {
        nome,
        endereco,
        telefone,
        foto
    }

    const insertedIds = await knex('familiar').insert(familiar);
    const familiar_id = insertedIds[0];

    return response.json({
        id: familiar_id,
        ...familiar
    });
});

routes.get('/familiares', async (request, response) => {
    const familiares = await knex('familiar')
        .select('familiar.*');

    return response.json(familiares);
});

routes.get('/familiares/:codigo', async (request, response) => {
    const { codigo } = request.params;

    const familiar = await knex('familiar')
        .select('familiar.*')
        .where('familiar.codigo', codigo)

    return response.json(familiar);
})
export default routes;
