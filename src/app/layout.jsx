import OCConnectWrapper from '../components/OCConnectWrapper';

export default function RootLayout({
                                       children,
                                   }) {
    const opts = {
        redirectUri: 'http://localhost:3000/redirect', // Adjust this URL
        referralCode: 'PARTNER6', // Assign partner code
    };

    return (
        <html lang="en">
        <body>
        <OCConnectWrapper opts={opts} sandboxMode={true}>
            {children}
        </OCConnectWrapper>
        </body>
        </html>
    );
}
