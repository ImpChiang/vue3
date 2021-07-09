import { ApolloClient, createHttpLink, ApolloLink, InMemoryCache } from '@apollo/client';
// 与 API 的 HTTP 连接
const httpLink = createHttpLink({
    // 你需要在这里使用绝对路径 一定是以graphql结尾的路径
    uri: 'https://bff.clzg.cn/graphql'
});
// 中间件添加请求头
const middlewareLink = new ApolloLink((operation, forward) => {
    operation.setContext({
        headers: {
            'Authorization': 'xxxxx'
        }
    });
    return forward(operation);
});
// 缓存实现
const cache = new InMemoryCache();
const apolloClient = new ApolloClient({
    link: middlewareLink.concat(httpLink),
    cache
});
export default apolloClient;
//# sourceMappingURL=request.js.map