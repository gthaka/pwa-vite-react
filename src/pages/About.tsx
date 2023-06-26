import { APP_NAME } from "../application";

function About() {
  return (
    <>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            About {APP_NAME}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            The PWA app is a responsive and offline-capable web application that
            provides a seamless user experience with features like push
            notifications, caching, and app-like functionality, enhancing
            engagement and accessibility.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
