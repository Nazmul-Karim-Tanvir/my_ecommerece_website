import Hero from '../../components/homepageComponnets/Hero';
import Today from '../../components/homepageComponnets/Today';
import BestSelling from '../../components/homepageComponnets/BestSelling';
import Categories from '../../components/homepageComponnets/Categories';
import ExclusiveOffer from '../../components/homepageComponnets/ExclusiveOffer';
import ExploreProducts from '../../components/homepageComponnets/ExploreProducts';
import NewArrival from '../../components/homepageComponnets/NewArrival';
import Services from '../../components/homepageComponnets/Services';

const HomePage = () => {
    return (
        <div className=''>
            <Hero />
            <Today />
            <Categories />
            <BestSelling />
            <ExclusiveOffer />
            <ExploreProducts />
            <NewArrival />
            <Services />
            {/* আর future এ অন্য section: Featured, Categories, etc */}
        </div>
    );
}

export default HomePage
