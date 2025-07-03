import Hero from '../../components/Hero';
import Today from '../../components/Today';
import BestSelling from '../../components/BestSelling';
import Categories from '../../components/Categories';
import ExclusiveOffer from '../../components/ExclusiveOffer';

const HomePage = () => {
    return (
        <div className='max-w-[1170px] mx-auto'>
            <Hero />
            <Today />
            <Categories />
            <BestSelling />
            <ExclusiveOffer />
            {/* আর future এ অন্য section: Featured, Categories, etc */}
        </div>
    );
}

export default HomePage
