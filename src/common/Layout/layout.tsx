import Footer from "../Footer";
import { LenisScroller } from "../LenisScroller/lenis-scroller";
import NavBar from "../NavBar";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export default function Layout({ children, empty }: any) {

    return (
        <>
            <main className={`${notoSans.className}`}>
                <LenisScroller />
                {!empty && <NavBar />}
                {children}
                {!empty && <Footer />}
            </main>
        </>
    )
}