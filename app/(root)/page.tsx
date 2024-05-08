import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  const loggedIn = { firstName: 'Efosa', lastName: 'Igbinehi', email: 'efosa@soyuzmail.jk'};

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

        RECENT TRANSACTIONS
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
      banks={[{ name: 'GTBank', accountNumber: '1234567890', currentBalance: '3300' }, { name: 'Zenith Bank', accountNumber: '0987654321', currentBalance: '4500'}]}
      />
    </section>
  )
}

export default Home;