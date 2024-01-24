import { PageMain } from './components/PageMain'
import { Routes,Route } from 'react-router-dom'
import { Products } from './components/Products'
import { Account } from './components/Account'
import { Register} from './components/Register'
import { Favorite} from './components/Favorite'
import { UserProvider } from './helpers/userContext'
import { CartPage } from './components/Cart'
import { FavoriteProvider } from './helpers/favoriteContext'


function App() {

  return (
    <UserProvider>
      <FavoriteProvider>

    <Routes>
      <Route path='/' element={<PageMain/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/account' element={<Account/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/favorite' element={<Favorite/>} />
      <Route path='/cart' element={<CartPage/>} />
    </Routes>
      </FavoriteProvider>
    </UserProvider>
  )
}

export default App
