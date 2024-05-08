import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  const loggedIn = { firstName: 'Efosa' };

  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type='greeting'
            title='Welcome'
            subtext='Access and manage your account and transactions efficiently.'
            user={loggedIn?.firstName || 'Guest'}
          />

          <TotalBalanceBox
            accounts={[]}
            totalCurrentBalance={1250.35}
            totalBanks={2}
          />
          
        </header>
      </div>
    </section>
  )
}

export default Home;