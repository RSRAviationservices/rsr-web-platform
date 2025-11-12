import CartSheet from "../components/cart/CartSheet";
import SmoothScrolling from "../components/common/SmoothScrolling";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/nav/Navbar";
import ProfileModal from "../components/profile/ProfileModal";

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SmoothScrolling>
        <Navbar />
        <CartSheet />
        <ProfileModal />
        {children}
        <Footer />
      </SmoothScrolling>
    </>
  );
}
