import '../style/home.css'


export default function Home() {
  return (
    <div className='mainDiv'>
      <div className='cardDiv'>
        <div className='imageDiv'>
            <img className='mainImage' src="/images/secretShop.png" alt=""/>
        </div>
        <div>
            <p>Welcome to the secret shop! What are you buying today?</p>
        </div>
      </div>
    </div>
  );
}
