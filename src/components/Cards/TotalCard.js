import '../../style/store.css'

export default function TotalCard({total}) {

    return (
        <div className="totalCard">
            <div>
                <p><h4>Your total is: {total} Gold</h4></p>
            </div>
            <div>
                <button className='checkoutBtn'>Checkout</button>
            </div>
        </div>
    );
}
