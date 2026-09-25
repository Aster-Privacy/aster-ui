import * as react_jsx_runtime from 'react/jsx-runtime';

interface RoundedQrCodeProps {
    value: string;
    size?: number;
    logo_src?: string;
    aria_label?: string;
    quiet_zone?: number;
}
declare function RoundedQrCode({ value, size, logo_src, aria_label, quiet_zone, }: RoundedQrCodeProps): react_jsx_runtime.JSX.Element;

export { RoundedQrCode, type RoundedQrCodeProps };
