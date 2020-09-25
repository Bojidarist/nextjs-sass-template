import WorldTime from '../components/WorldTime';
import Layout from '../components/Layout';

function HomePage( { data } ) {
    return (
        <div>
            <style jsx>{`
                .backgroundImg {
                    position: absolute;
                    z-index: -2;
                    width: 100%;
                    height: 100%;
                }
            `}</style>

            {/* Image from 'public' folder */}
            <img className="backgroundImg" src="images/weather-background.jpg" />
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