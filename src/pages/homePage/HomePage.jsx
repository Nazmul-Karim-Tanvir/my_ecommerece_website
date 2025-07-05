import Hero from '../../components/Hero';
import Today from '../../components/Today';
import BestSelling from '../../components/BestSelling';
import Categories from '../../components/Categories';
import ExclusiveOffer from '../../components/ExclusiveOffer';
import ExploreProducts from '../../components/ExploreProducts';
import NewArrival from '../../components/NewArrival';
import Services from '../../components/Services';

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
