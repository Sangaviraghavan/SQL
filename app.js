const express = require('express');
const app = express();
const PORT = 5000;

const userRoutes = require('./routes/userRoutes');

app.use(express.json());

app.use('/users', userRoutes);

app.get('/',(req, res)=>{
    res.send('kk')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});