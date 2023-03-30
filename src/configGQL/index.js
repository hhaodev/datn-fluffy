import { ApolloClient, InMemoryCache, } from '@apollo/client';


const client = new ApolloClient({
    uri: 'https://fluffy-production.up.railway.app/client',
    cache: new InMemoryCache(),
});

export default client;