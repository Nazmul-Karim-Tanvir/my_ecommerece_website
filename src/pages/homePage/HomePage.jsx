import SectionHero from './SectionHero';
import SectionToday from './SectionToday';
import SectionCategories from './SectionCategories';
import SectionBestSelling from './SectionBestSelling';
import SectionExclusiveOffer from './SectionExclusiveOffer';
import SectionExploreProducts from './SectionExploreProducts';
import SectionNewArrival from './SectionNewArrival';
import Services from '../../components/Services';

const HomePage = () => {
    return (
        <div className=''>
            <SectionHero />
            <SectionToday />
            <SectionCategories />
            <SectionBestSelling />
            <SectionExclusiveOffer />
            <SectionExploreProducts />
            <SectionNewArrival />
            <Services />
        </div>
    );
}

export default HomePage
