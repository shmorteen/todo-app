const { request } = require('express');
const express = require('express');

const app = express();
const PORT = 3000;

let accounts = [
    {
        id:1,
        username: "Helem",
        role: "admin"
    },
    {
        id:2,
        username: "Call",
        role: "guest"
    },
    {
        id:3,
        username: "Bell",
        role: "guest"
    },
    {
        id:4,
        username: "Heer",
        role: "guest"
        },
]

app.use(express.json());

app.get('/',(request,response) => {
    response.send('Hello Class njk')
});

app.get('/accounts',(request,response) => {
    response.json(accounts)
});

app.get('/accounts/:id',(request,response) => {
    const accountId = Number(request.params.id);
    const getAccount = accounts.find((account) => account.id === accountId)
    getAccount ? res.send(account) : res.send({message: 'Helpppp'})
    response.json(getAccount);
});
app.get('/account/:id', (req, res) => {
    let accountId = req.params.id;
    console.log(accountId);
    let account = accounts.find(account => account.id == accountId);
    console.log(account);
    account ? res.send(account) : res.send({message: 'Helpppp'})
})

app.post('/add_account',(request,response)=>{
//     console.log(request.body);
//     const incomingAccount = request.body;
//     accounts.push(incomingAccount);

//     response.json({message:'Successfully Added', accounts});
let account = request.body
let accountId = accounts.length + 1;
account.id = accountId
accounts.push(account);

response.send({message: "Account added successfully", accounts});
});

// app.put('/update_account/:id',(request,response) =>{
//     const accountId = request.params.id;
//     const  data = request.body;
//     const account = accounts.find((account) => account.id == accountId)
//     const index = accounts.indexOf(account)
//     accounts[index] = data;
//     response.send(accounts)
// });
// app.delete('/delete_account/:id',(request,response) =>{
//     const accountId = request.params.id;
   
//     const newAccounts = accounts.filter(account => account.id != accountId)
//     accounts=newAccounts
//     response.send(accounts);
    
// });
app.listen(PORT, function(){
    console.log(`serve started runing pon port ${PORT}`);
});