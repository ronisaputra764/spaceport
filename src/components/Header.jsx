import { useMediaQuery } from 'react-responsive';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

export default function Header() {
    const isDesktop = useMediaQuery({ minWidth: 1067 });

    return (
        <>
            {isDesktop ? <DesktopHeader /> : <MobileHeader />}
        </>
    );
}