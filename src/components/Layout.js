import Navbar from './Navbar'
import Head from 'next/head'

function Layout(props) {
    return (
        <div>
            <Head>
                <title>World Time Data</title>
                <link rel="icon" type="image/ico" href="icons/wtc-icon.ico"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous" />
            </Head>

            <Navbar />
            {props.children}
        </div>
    );
}

export default Layout;