import { tw } from "@utils/tw";

const classes = {
  container: tw`flex h-full w-full justify-center py-6`,
  indicator: tw`h-10 w-10 fill-black/40 text-black/40`,
};

const LoadingMessage = () => {
  return (
    <div className={classes.container}>
      <svg viewBox="0 0 200 200" className={classes.indicator}>
        <circle cx="40" cy="65" r="15">
          <animate
            attributeName="cy"
            begin="-.4"
            calcMode="spline"
            dur="1.5"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            values="65;135;65;"
          />
        </circle>
        <circle cx="100" cy="65" r="15">
          <animate
            attributeName="cy"
            begin="-.2"
            calcMode="spline"
            dur="1.5"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            values="65;135;65;"
          />
        </circle>
        <circle cx="160" cy="65" r="15">
          <animate
            attributeName="cy"
            begin="0"
            calcMode="spline"
            dur="1.5"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            values="65;135;65;"
          />
        </circle>
      </svg>
    </div>
  );
};

export { LoadingMessage };
