import Collection from './components/collection/collection'
import HomeComponent from './components/home/home'
import Suits from './components/suit/Suits'

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HomeComponent />
      <Collection />
      <Suits />
    </div>
  )
}
