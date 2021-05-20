create table itens{
    id serial primary key,

    created_at timestamp DEFAULT NOW(),
    updated_at timestamp DEFAULT NOW(),
    deleted_at timestamp DEFAULT null,

    codigo text not null,
    descricao text not null,
    ativo boolean not null
};