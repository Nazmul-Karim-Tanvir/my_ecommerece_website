import SectionHero from './SectionHero';
import SectionToday from './SectionToday';
import SectionCategories from './SectionCategories';
import SectionBestSelling from './SectionBestSelling';
import SectionExclusiveOffer from './SectionExclusiveOffer';
import SectionExploreProducts from './SectionExploreProducts';
import SectionNewArrival from './SectionNewArrival';
import Services from '../../components/Services';
import ProductDetails from '../productDetailspage/ProductDetails';

const HomePage = () => {
    return (
        <div className=''>
            {/* <SectionHero />
            <SectionToday />
            <SectionCategories />
            <SectionBestSelling />
            <SectionExclusiveOffer />
            <SectionExploreProducts />
            <SectionNewArrival />
            <Services /> */}
            <ProductDetails />
        </div>
    );
}

export default HomePage
