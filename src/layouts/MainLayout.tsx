import Header from "@/components/common/Header.tsx";
import {Outlet} from "react-router-dom";
import Footer from "@/components/common/Footer.tsx";

export default function MainLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}