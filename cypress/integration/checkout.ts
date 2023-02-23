import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"
import {ChartPage} from "./pages/chart_pages"
import {CheckoutInfoPage} from "./pages/checkout_info_pages"
import {CheckoutOverviewPage} from "./pages/checkout_overview_pages"
import {CheckoutCompletePage} from "./pages/checkout_complete_pages"


let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let chartPage = new ChartPage()
let checkoutInfoPage = new CheckoutInfoPage()
let checkoutOverviewPage = new CheckoutOverviewPage()
let checkoutCompletePage = new CheckoutCompletePage()
const URL = 'https://www.saucedemo.com/'

it('As a user I can checkout items', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.addSauceLabsBackpack()
    dashboardPage.clickShoppingChart()
    chartPage.sauceLabsBackpack()
    chartPage.clickCheckoutbtn()
    checkoutInfoPage.personalInfo('Dadang','Konelo','11111')
    checkoutInfoPage.clickContinueBtn()
    checkoutOverviewPage.assertOverview()
    checkoutOverviewPage.clickFinishbtn()
    checkoutCompletePage.assertionComplete()
})
it('As a user I cannot checkout if I donnot completing to add my personal data', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.addSauceLabsBackpack()
    dashboardPage.clickShoppingChart()
    chartPage.sauceLabsBackpack()
    chartPage.clickCheckoutbtn()
    checkoutInfoPage.clickContinueBtn
    checkoutInfoPage.AssertionError

})