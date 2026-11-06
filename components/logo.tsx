import { ackPath } from '@/lib/paths';

/** ACK Techs logosu (işaret + yazı). Koyu zemin için beyaz sürüm. */
export function LogoLockup({ height = 28 }: { height?: number }) {
  return (
    <img
      src={ackPath('/brand/ack-techs-lockup.png')}
      alt="ACK Techs"
      height={height}
      width={Math.round(height * (801 / 210))}
      style={{ height, width: 'auto' }}
    />
  );
}
