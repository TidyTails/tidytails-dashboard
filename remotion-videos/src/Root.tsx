import { Composition } from 'remotion';
import { TidyTailsTransformation } from './compositions/TidyTailsTransformation';
import { TidyTailsBrand } from './compositions/TidyTailsBrand';
import { ShedMath } from './compositions/ShedMath';
import { ShedSpring } from './compositions/ShedSpring';
import { ConsultingProblem } from './compositions/ConsultingProblem';
import { ConsultingPackages } from './compositions/ConsultingPackages';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Dog Waste Videos */}
      <Composition
        id="TidyTailsTransformation"
        component={TidyTailsTransformation}
        durationInFrames={300}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="TidyTailsBrand"
        component={TidyTailsBrand}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
      />
      
      {/* Shed Videos */}
      <Composition
        id="ShedMath"
        component={ShedMath}
        durationInFrames={360}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="ShedSpring"
        component={ShedSpring}
        durationInFrames={300}
        fps={30}
        width={1080}
        height={1920}
      />
      
      {/* Consulting Videos */}
      <Composition
        id="ConsultingProblem"
        component={ConsultingProblem}
        durationInFrames={360}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="ConsultingPackages"
        component={ConsultingPackages}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
