import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompts </span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem a aspernatur doloribus nesciunt aliquid eius doloremque. Consequuntur pariatur ea, autem quae adipisci cum porro obcaecati facilis ut, nulla nostrum!
      </p>

      <Feed />
    </section>
  );
};

export default Home;
