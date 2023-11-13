import Title from "../components/Title";
import MidPage from "../components/MidPage";
import SignUpLink from "../components/SignUpLink";
import blackBoard from '../assets/blackboard.mp4';

const Landing = () => {
  return (
    <section>
      <div className="hero relative min-h-screen">
        <div className="hero-overlay bg-opacity-60 absolute first-line:inset-0">
          <video
            className="object-cover w-full h-full"
            autoPlay
            loop
            muted
            onLoadedData={(e) => (e.target as HTMLVideoElement).play()}
          >
            <source src={blackBoard} type="video/mp4" />
          </video>
        </div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-full">
            <Title title="Welcome to the Stats App">We are determined to get you the right answer!</Title>
            <div className="flex flex-col">
              <MidPage />
              <SignUpLink />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
