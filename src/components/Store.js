import Items from '../data/mockData'
import Card from './Cards/StoreCard';
import '../style/store.css'

export default function Store({ cartConfig }) {
   let items = Items;

    return (
        <div>
            <h1>Store</h1>
            <div className='itemsGrid'>
            {items.map((item) => (
                <Card cartConfig={cartConfig} key={item.price}  item={item}/>
            ))}
            </div>
        </div>
    )
}
