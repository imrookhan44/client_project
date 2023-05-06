import { combineReducers } from "redux";
import { selectedCategoryReducers } from "./selectedCategoryReducer";
import { buyOrSellReducers } from "./buyOrSellReducers";
import { vehiclePage1Reducers } from "./vehiclePage1Reducers"
import { vehiclePage2Reducers } from "./vehiclePage2Reducers"
import { vehiclePage3Reducers } from "./vehiclePage3Reducers"
import { vehiclePage4Reducers } from "./vehiclePage4Reducers"
import { vehiclePage5Reducers } from "./vehiclePage5Reducers"
import { choosePlanReducers } from "./choosePlanReducers";
import { realstatePage1Reducers } from "./realstatePage1Reducers";
import { realstatePage2Reducers } from "./realstatePage2Reducers";
import { realstatePage3Reducers } from "./realstatePage3Reducers";
import { realstatePage4Reducers } from "./realstatePage4Reducers";
import { realstatePage5Reducers } from "./realstatePage5Reducers";
import { realstatePage6Reducers } from "./realstatePage6Reducers";
import { businessPage1Reducers } from "./businessPage1Reducers";
import { businessPage2Reducers } from "./businessPage2Reducers";
import { fashionPage1Reducers } from "./fashionPage1Reducers";
import { fashionPage2Reducers } from "./fashionPage2Reducers";
import { fashionPage3Reducers } from "./fashionPage3Reducers";
import { secondHandPage1Reducers } from "./secondHandPage1Reducers";
import { secondHandPage2Reducers } from "./secondHandPage2Reducers";
import { secondHandPage3Reducers } from "./secondHandPage3Reducers";
import { petsPage1Reducers } from "./petsPage1Reducers";
import { petsPage2Reducers } from "./petsPage2Reducers";
import { petsPage3Reducers } from "./petsPage3Reducers";
import { viewItemReducers } from "./viewItemReducers";
import { shippingPage1Reducers } from "./shippingPage1Reducers";
import { shippingPage2Reducers } from "./shippingPage2Reducers";
import { searchReducers } from "./searchReducers";
export const reducers = combineReducers({
    selectedCategoryReducers: selectedCategoryReducers,
    buyOrSellReducers: buyOrSellReducers,
    vehiclePage1Reducers: vehiclePage1Reducers,
    vehiclePage2Reducers: vehiclePage2Reducers,
    vehiclePage3Reducers: vehiclePage3Reducers,
    vehiclePage4Reducers: vehiclePage4Reducers,
    vehiclePage5Reducers: vehiclePage5Reducers,
    choosePlanReducers: choosePlanReducers,
    realstatePage1Reducers: realstatePage1Reducers,
    realstatePage2Reducers: realstatePage2Reducers,
    realstatePage3Reducers: realstatePage3Reducers,
    realstatePage4Reducers: realstatePage4Reducers,
    realstatePage5Reducers: realstatePage5Reducers,
    realstatePage6Reducers: realstatePage6Reducers,
    businessPage1Reducers: businessPage1Reducers,
    businessPage2Reducers: businessPage2Reducers,
    fashionPage1Reducers: fashionPage1Reducers,
    fashionPage2Reducers: fashionPage2Reducers,
    fashionPage3Reducers: fashionPage3Reducers,
    secondHandPage1Reducers: secondHandPage1Reducers,
    secondHandPage2Reducers: secondHandPage2Reducers,
    secondHandPage3Reducers: secondHandPage3Reducers,
    petsPage1Reducers: petsPage1Reducers,
    petsPage2Reducers: petsPage2Reducers,
    petsPage3Reducers: petsPage3Reducers,
    viewItemReducers: viewItemReducers,
    shippingPage1Reducers: shippingPage1Reducers,
    shippingPage2Reducers: shippingPage2Reducers,
    searchReducers: searchReducers,
});
