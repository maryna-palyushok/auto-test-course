import { ProductDetails } from './productDetails';
import { Checkout } from './checkout';
import { Header} from './header'


class Application {
    product = ProductDetails
    checkout = Checkout
    header = Header
}

export const App: Application = new Application()