import PageTitle from '../../Components/PageTitle/PageTitle';
import JWTAccessTokenImg from '../../assets/images/blog/jwt-structure.png';

const JWTAccessToken = () => {
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <PageTitle title='What is an access token and refresh token? How do they work and where should we store them on the client side?'></PageTitle>
            <img src={JWTAccessTokenImg} />
            <h2 className='text-3xl font-semibold my-5'>What is an access token and refresh token? How do they work and where should we store them on the client side?</h2>
            <p className='my-2 text-justify'>
                In the realm of modern web development and security, access tokens and refresh tokens play a pivotal role in ensuring secure communication between clients and servers. As fundamental components of OAuth 2.0 authentication protocol, understanding their mechanisms, functionalities, and proper handling is crucial for developers building secure applications. Let's delve into what access tokens and refresh tokens are, how they work, and best practices for storing them on the client side.
               <h2 className='text-2xl font-medium my-2'>Understanding Access Tokens and Refresh Tokens</h2>
                <b>Access Token</b> <br />
                An access token is a credential that represents the authorization granted to the client by the authorization server. It is typically short-lived and provides access to specific resources on behalf of the user. Once obtained, the client includes the access token in every request it sends to the server to access protected resources. Access tokens are designed to expire relatively quickly, typically within minutes or hours, to mitigate the risk of unauthorized access if they are compromised.<br />

                <b>Refresh Token</b> <br />
                A refresh token is a long-lived credential that is used to obtain a new access token once the current access token expires. Unlike access tokens, refresh tokens are not sent with every request to the server. Instead, they are securely stored on the client side and exchanged for a new access token when needed. Refresh tokens have a longer lifespan compared to access tokens and are used to obtain new access tokens without requiring the user to re-authenticate.

                <h2 className='text-2xl font-medium my-2' >How Access Tokens and Refresh Tokens Work</h2>

                <li>Authentication:</li>
                - Initially, the client authenticates with the authorization server and receives both an access token and a refresh token.
               <li>Accessing Resources:</li>
                - The client includes the access token in the authorization header of its requests to access protected resources on the server.

                <li>Token Expiration:</li>
                - Access tokens have a limited lifespan and expire after a set period.

                <li>Refreshing Access:</li>
                - When the access token expires, the client uses the refresh token to request a new access token from the authorization server without requiring the user to log in again.

                <li>Security Measures:</li>
                - Both access tokens and refresh tokens should be transmitted over HTTPS to ensure their confidentiality and integrity.
                - Access tokens should never be stored on the client side for security reasons.

                <h2 className='text-2xl font-medium my-2'>Secure Client-Side Storage</h2>
                While access tokens are short-lived and typically transmitted with each request, refresh tokens require secure storage on the client side. Best practices for storing refresh tokens include:

                <li>HTTP Only Cookies:</li>
                - Store refresh tokens in HTTP only cookies to prevent client-side JavaScript from accessing them, thereby reducing the risk of cross-site scripting (XSS) attacks.

                <li>Secure Cookies:</li>
                - Ensure that cookies containing refresh tokens are marked as secure to prevent them from being transmitted over unencrypted connections.

                <li>Same-Site Cookies:</li>
                - Set the SameSite attribute on cookies to prevent cross-site request forgery (CSRF) attacks by limiting cookie transmission to same-site requests.

                <li>Token Rotation:</li>
                - Implement token rotation mechanisms to periodically refresh refresh tokens and invalidate old ones, enhancing security.

                <li>Token Revocation:</li>
                - Provide mechanisms for users to revoke refresh tokens if they suspect unauthorized access to their accounts.

                <br /> <br />

                Access tokens and refresh tokens are indispensable tools for securing client-server communication in modern web applications. Understanding their roles, mechanisms, and best practices for secure storage on the client side is essential for developers to build robust and secure authentication systems. By adhering to established security protocols and implementing proper storage mechanisms, developers can mitigate risks and safeguard user data in their applications.
            </p>
        </div>
    );
};

export default JWTAccessToken;