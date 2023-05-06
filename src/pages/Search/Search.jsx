import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BuyOrSell from './components/BuyOrSell';
import ChoosePlan from './components/ChoosePlan';
import Final from './components/Final';
import RealstatePage2 from './components/RealstatePage2';
import RealstatePage1 from './components/RealstatePage1';
import SearchCategories from './components/SearchCategories';
import VehiclePage1 from './components/VehiclePage1';
import VehiclePage2 from './components/VehiclePage2';
import VehiclePage3 from './components/VehiclePage3';
import VehiclePage4 from './components/VehiclePage4';
import VehiclePage5 from './components/VehiclePage5';
import "./search.css";
import RealstatePage3 from './components/RealstatePage3';
import RealstatePage4 from './components/RealstatePage4';
import RealstatePage5 from './components/RealstatePage5';
import RealstatePage6 from './components/RealstatePage6';
import BusinessPage1 from './components/BusinessPage1';
import FashionPage1 from './components/FashionPage1';
import FashionPage2 from './components/FashionPage2';
import FashionPage3 from './components/FashionPage3';
import BusinessPage2 from './components/BusinessPage2';
import PetsPage1 from './components/PetsPage1';
import PetsPage2 from './components/PetsPage2';
import PetsPage3 from './components/PetsPage3';
import SearchBar from './components/SearchBar'
import { setBusinessPage1, setSearch, setBusinessPage2, setBuyOrSell, setChoosePlan, setFashionPage1, setFashionPage2, setFashionPage3, setPetsPage1, setPetsPage2, setPetsPage3, setRealstatePage1, setRealstatePage2, setRealstatePage3, setRealstatePage4, setRealstatePage5, setRealstatePage6, setSelectedCategory, setVehiclePage1, setVehiclePage2, setVehiclePage3, setVehiclePage4, setVehiclePage5, setSecondHandPage3, setSecondHandPage2, setSecondHandPage1 } from '../../redux/actions/searchCategory-actions';
import SecondHandPage1 from './components/SecondHandPage1';
import SecondHandPage2 from './components/SecondHandPage2';
import SecondHandPage3 from './components/SecondHandPage3';
const Search = () => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector((state) => state.selectedCategoryReducers.selectedCategory);
    const buyOrSell = useSelector((state) => state.buyOrSellReducers.buyOrSell);
    const search = useSelector((state) => state.searchReducers.search);
    const vehiclePage1 = useSelector((state) => state.vehiclePage1Reducers.vehiclePage1);
    const vehiclePage2 = useSelector((state) => state.vehiclePage2Reducers.vehiclePage2);
    const vehiclePage3 = useSelector((state) => state.vehiclePage3Reducers.vehiclePage3);
    const vehiclePage4 = useSelector((state) => state.vehiclePage4Reducers.vehiclePage4);
    const vehiclePage5 = useSelector((state) => state.vehiclePage5Reducers.vehiclePage5);
    const choosePlan = useSelector((state) => state.choosePlanReducers.choosePlan);
    const realstatePage1 = useSelector((state) => state.realstatePage1Reducers.realstatePage1);
    const realstatePage2 = useSelector((state) => state.realstatePage2Reducers.realstatePage2);
    const realstatePage3 = useSelector((state) => state.realstatePage3Reducers.realstatePage3);
    const realstatePage4 = useSelector((state) => state.realstatePage4Reducers.realstatePage4);
    const realstatePage5 = useSelector((state) => state.realstatePage5Reducers.realstatePage5);
    const realstatePage6 = useSelector((state) => state.realstatePage6Reducers.realstatePage6);
    const businessPage1 = useSelector((state) => state.businessPage1Reducers.businessPage1);
    const businessPage2 = useSelector((state) => state.businessPage2Reducers.businessPage2);
    const fashionPage1 = useSelector((state) => state.fashionPage1Reducers.fashionPage1);
    const fashionPage2 = useSelector((state) => state.fashionPage2Reducers.fashionPage2);
    const fashionPage3 = useSelector((state) => state.fashionPage3Reducers.fashionPage3);
    const secondHandPage1 = useSelector((state) => state.secondHandPage1Reducers.secondHandPage1);
    const secondHandPage2 = useSelector((state) => state.secondHandPage2Reducers.secondHandPage2);
    const secondHandPage3 = useSelector((state) => state.secondHandPage3Reducers.secondHandPage3);
    const petsPage1 = useSelector((state) => state.petsPage1Reducers.petsPage1);
    const petsPage2 = useSelector((state) => state.petsPage2Reducers.petsPage2);
    const petsPage3 = useSelector((state) => state.petsPage3Reducers.petsPage3);
    let show = undefined;
    useEffect(() => {
        return () => {
            dispatch(setSelectedCategory(undefined));
            dispatch(setBuyOrSell(undefined));
            dispatch(setVehiclePage1(undefined));
            dispatch(setVehiclePage2(undefined));
            dispatch(setVehiclePage3(undefined));
            dispatch(setVehiclePage4(undefined));
            dispatch(setVehiclePage5(undefined));
            dispatch(setChoosePlan(undefined));
            dispatch(setRealstatePage1(undefined));
            dispatch(setRealstatePage2(undefined));
            dispatch(setRealstatePage3(undefined));
            dispatch(setRealstatePage4(undefined));
            dispatch(setRealstatePage5(undefined));
            dispatch(setRealstatePage6(undefined));
            dispatch(setBusinessPage1(undefined));
            dispatch(setBusinessPage2(undefined));
            dispatch(setFashionPage1(undefined));
            dispatch(setFashionPage2(undefined));
            dispatch(setFashionPage3(undefined));
            dispatch(setSecondHandPage3(undefined));
            dispatch(setSecondHandPage2(undefined));
            dispatch(setSecondHandPage1(undefined));
            dispatch(setPetsPage1(undefined));
            dispatch(setPetsPage2(undefined));
            dispatch(setPetsPage3(undefined));
            dispatch(setSearch(undefined));
        }
    }, [])

    function showSearchCategories() {
        if (show == undefined) {
            show = selectedCategory
            return <SearchCategories />
        }
        return null
    }
    function showBuyOrSell() {
        if (show == "vehicles" || show == "realstate" || show == "business" || show == "fashion" || show == "secondhand" || show == "pets") {
            show = buyOrSell
            return <BuyOrSell />
        }
        return null
    }
    function showSearchBar() {
        if (show == "buy" || show == "sell") {
            show = search
            return <SearchBar />
        }
        return null
    }
    function showPage1() {
        if ((show == "search" && selectedCategory == "vehicles")) {
            show = vehiclePage1
            return <VehiclePage1 />
        }
        if ((show == "search" && selectedCategory == "realstate")) {
            show = realstatePage1
            return <RealstatePage1 />
        }
        if ((show == "search" && selectedCategory == "business")) {
            show = businessPage1
            return <BusinessPage1 />
        }
        if ((show == "search") && (selectedCategory == "fashion")) {
            show = fashionPage1
            return <FashionPage1 />
        }
        if ((show == "search") && (selectedCategory == "secondhand")) {
            show = secondHandPage1
            return <SecondHandPage1 />
        }
        if ((show == "search" && selectedCategory == "pets")) {
            show = petsPage1
            return <PetsPage1 />
        }
        return null
    }
    function showPage2() {
        if (show == "vehiclePage2") {
            show = vehiclePage2
            return <VehiclePage2 />
        }
        if (show == "mediator" || show == "private") {
            show = realstatePage2
            return <RealstatePage2 />
        }
        if (show == "businessPage2") {
            show = businessPage2
            return <BusinessPage2 />
        }
        if (show == "fashionPage2") {
            show = fashionPage2
            return <FashionPage2 />
        }
        if (show == "secondHandPage2") {
            show = secondHandPage2
            return <SecondHandPage2 />
        }
        if (show == "fish" || show == "cats" || show == "reptiles" || show == "dogs" || show == "farmAnimals" || show == "horses") {
            show = petsPage2
            return <PetsPage2 />
        }
        return null
    }
    function showPage3() {
        if (show == "vehiclePage3") {
            show = vehiclePage3
            return <VehiclePage3 />
        }
        if (show == "partners" || show == "commercial" || show == "renting" || show == "sale") {
            show = realstatePage3
            return <RealstatePage3 />
        }
        if (show == "fashionPage3") {
            show = fashionPage3
            return <FashionPage3 />
        }
        if (show == "secondHandPage3") {
            show = secondHandPage3
            return <SecondHandPage3 />
        }
        if (show == "petsPage3") {
            show = petsPage3
            return <PetsPage3 />
        }
        return null
    }
    function showPage4() {
        if (show == "vehiclePage4") {
            show = vehiclePage4
            return <VehiclePage4 />
        }
        if (show == "realstatePage4") {
            show = realstatePage4
            return <RealstatePage4 />
        }
        return null
    }
    function showPage5() {
        if (show == "vehiclePage5") {
            show = vehiclePage5
            return <VehiclePage5 />
        }
        if (show == "realstatePage5") {
            show = realstatePage5
            return <RealstatePage5 />
        }
        return null
    }
    function showPage6() {
        if (show == "realstatePage6") {
            show = realstatePage6
            return <RealstatePage6 />
        }
        return null
    }
    function showChoosePlan() {
        if (show == "choosePlan") {
            show = choosePlan
            return <ChoosePlan />
        }
        return null
    }
    function showFinal() {
        if (show == "final") {
            return <Final />
        }
        return null
    }
    return (
        <div className="search-cat">
            {
                showSearchCategories()
            }
            {
                showBuyOrSell()
            }
            {
                showSearchBar()
            }
            {
                showPage1()
            }
            {
                showPage2()
            }
            {
                showPage3()
            }
            {
                showPage4()
            }
            {
                showPage5()
            }
            {
                showPage6()
            }
            {
                showChoosePlan()
            }
            {
                showFinal()
            }
        </div>

    )
}

export default Search