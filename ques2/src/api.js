import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144/test/companies';
const CLIENT_ID = '7e45ebd1-c6c4-4e03-bf6d-cc942e9c6be2';
const CLIENT_SECRET = 'LsBTpgTzdklZejOm';

export const fetchProducts = async (companyName, categoryName, topN, minPrice, maxPrice) => {
    try {
        const response = await axios.get(
            `${API_BASE_URL}/${companyName}/categories/${categoryName}/products`, 
            {
                params: { top: topN, minPrice, maxPrice },
                headers: {
                    'Client-ID': CLIENT_ID,
                    'Client-Secret': CLIENT_SECRET
                }
            }
        );
        return response.data.map(product => ({
            ...product,
            id: `${product.productName}-${product.price}-${product.rating}`.replace(/\s/g, '-')
        }));
    } catch (error) {
        // Handle error
        console.error('Error fetching products:', error);
        throw error; // Optionally rethrow the error for the caller to handle
    }
};

