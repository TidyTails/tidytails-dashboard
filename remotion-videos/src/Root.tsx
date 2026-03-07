import { Composition } from 'remotion';
import { TidyTailsTransformation } from './compositions/TidyTailsTransformation';
import { TidyTailsBrand } from './compositions/TidyTailsBrand';
import { ShedMath } from './compositions/ShedMath';
import { ShedSpring } from './compositions/ShedSpring';
import { ConsultingProblem } from './compositions/ConsultingProblem';
import { ConsultingPackages } from './compositions/ConsultingPackages';
import { PoopTimeline } from './compositions/PoopTimeline';
import { CSIShot } from './compositions/CSIShot';
import { SmellOVision } from './compositions/SmellOVision';
import { FakeTextThread } from './compositions/FakeTextThread';
import { GoogleMapZoom } from './compositions/GoogleMapZoom';
import { MathProblem } from './compositions/MathProblem';
import { DogReview } from './compositions/DogReview';
import { RealEstateAngle } from './compositions/RealEstateAngle';
import { SixtySplitRace } from './compositions/SixtySplitRace';
import { UnboxingParody } from './compositions/UnboxingParody';

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

      {/* Basquiat Scroll-Stopper Ads */}
      <Composition
        id="PoopTimeline"
        component={PoopTimeline}
        durationInFrames={300}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="CSIShot"
        component={CSIShot}
        durationInFrames={300}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="SmellOVision"
        component={SmellOVision}
        durationInFrames={240}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="FakeTextThread"
        component={FakeTextThread}
        durationInFrames={300}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="GoogleMapZoom"
        component={GoogleMapZoom}
        durationInFrames={300}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="MathProblem"
        component={MathProblem}
        durationInFrames={330}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="DogReview"
        component={DogReview}
        durationInFrames={300}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="RealEstateAngle"
        component={RealEstateAngle}
        durationInFrames={300}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="SixtySplitRace"
        component={SixtySplitRace}
        durationInFrames={300}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="UnboxingParody"
        component={UnboxingParody}
        durationInFrames={300}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
