const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.json());

const PORT = process.env.PORT || 9876;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const windowSize = 10;
let numbers = [];
app.get('/numbers/:type', async (req, res) => {
    const type = req.params.type;
    try {
        const response = await fetchNumbersFromServer(type);
        const currentNumbers = response.data.numbers;
        updateNumbers(currentNumbers);
        const average = calculateAverage();
        res.json({ average });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching numbers' });
    }
});
async function fetchNumbersFromServer(type) {
    const urls = {
        p: 'http://20.244.56.144/test/primes',
        f: 'http://20.244.56.144/test/fibo',
        e: 'http://20.244.56.144/test/even',
        r: 'http://20.244.56.144/test/rand'
    };
    const url = urls[type];
    return axios.get(url);
}
function updateNumbers(newNumbers) {
    newNumbers.forEach(num => {
        if (!numbers.includes(num)) {
            if (numbers.length >= windowSize) {
                numbers.shift();  // Remove the oldest number
            }
            numbers.push(num);  // Add the new number
        }
    });
}
function calculateAverage() {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}
