const {Pool, Client} = require('pg')

const config = {
    user: 'postgres',
    password: 'indrish',
    host: 'localhost',
    port: '5432',
    database: 'indrish',
};

const client = new Pool(config);

const createTable = `
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(50) NOT NULL
    );
`;

const insert_data = `
    INSERT INTO users (username, password)
    VALUES ($1, $2);
`

const select_data = `
    SELECT * FROM users WHERE username = $1;
`

async function createUsersTable(){
    await client.query(createTable);
    console.log('Table created');
}

async function insert(value){
    const res = await client.query(insert_data, value)
    console.log(`${value} data inserted into users table.`);
}

async function select(value){
    const res = await client.query(select_data, value)
    console.log(res.rows);
}

const value_1 = ['Indrish', 'test@132']
const value_2 = ['Jack', 'qwerty0@1']

const value = ['Indrish']

async function main(){
    await createUsersTable();
    await insert(value_1);
    await insert(value_2);
    await select(value);
}

main()
        