import { BallTriangle } from "react-loader-spinner";

const LoadingState = () => {
  return (
    <div className="py-40 px-4 lg:px-8  dark:bg-neutral-100/40 bg-neutral-100/70  animate-pulse rounded-lg w-full relative mt-4">
      <div className="flex flex-col md:flex-row md:items-center justify-center gap-5 md:gap-10 divide-y divide-x-0 md:divide-x divide-neutral-100 md:divide-y-0 z-10">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#0342E8"
          ariaLabel="ball-triangle-loading"
          visible={true}
        />
      </div>
    </div>
  );
};

export default LoadingState;
