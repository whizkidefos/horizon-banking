import Link from 'next/link';
import Image from 'next/image';
import { formatAmount } from '@/lib/utils'

const BankCard = ({ account, userName, showBalance }: CreditCardProps) => {
  return (
    <article className='flex flex-col'>
        <Link href='/' className='bank-card'>
            <div className="bank-card_content">
                <div className="">
                    <h1 className="text-16 font-semibold text-white">
                        {account.name || userName}
                    </h1>
                    <p className="font-ibm-plex-serif font-black text-white">
                        {formatAmount(account.currentBalance)}
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <h2 className="text-12 font-semibold text-white">{userName}</h2>
                        <h3 className="text-12 font-semibold text-white"> ●● / ●●</h3>
                    </div>
                    <p className="text-14 font-semibold tracking-[1.1px] text-white">
                        ●●●● ●●●● ●●●● 
                        <span className="text-16"> 1234</span>
                    </p>
                </div>
            </div>

            <div className="bank-card_icon">
                <Image
                    src='/icons/Paypass.svg'
                    alt='Paypass Icon'
                    width={20}
                    height={24}
                />
                <Image
                    src='/icons/mastercard.svg'
                    alt='MasterCard Icon'
                    width={36}
                    height={24}
                    className='ml-5'
                />
                <Image
                    src='/icons/lines.svg'
                    alt='lines'
                    width={316}
                    height={190}
                    className='absolute top-0 left-0'
                />
            </div>
        </Link>
    </article>
  )
}

export default BankCard;