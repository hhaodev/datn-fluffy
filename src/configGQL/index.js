import { ApolloClient, createHttpLink, InMemoryCache, } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: 'https://fluffy-server-production.up.railway.app/client',
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token') || {};
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;