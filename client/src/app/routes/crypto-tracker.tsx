import CryptoSearch from '@/features/crypto-tracker/components/crypto-search';
export const CryptoTrackerRoute = () => {
  return (
    <>
      <div className="flex h-screen items-center bg-white">
        <CryptoSearch />
      </div>
    </>
  );
};