import WorldTime from '../components/WorldTime';
import Layout from '../components/Layout';

function HomePage( { data } ) {
    return (
        <div>
            <Layout>
                <WorldTime data={data} />
            </Layout>
        </div>
    );
}

export default HomePage;

export async function getStaticProps(){
    const res = await fetch('http://worldtimeapi.org/api/ip');
    const data = await res.json();

    return {
        props: {
            data
        }
    };
}