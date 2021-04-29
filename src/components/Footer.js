const Index = (props) => {
  return (
    <div className="bg-black py-16 flex flex-col items-center justify-center f-f-l">
      <div className="w-44">
        <img loading="lazy" src="https://i.ibb.co/6sZ76Pj/foodies.png" />
      </div>

      <div className="pt-16 flex lg:items-start items-center">
        <img
          loading="lazy"
          src="https://cdn.tuk.dev/assets/templates/foodies/tm.png"
          className="pr-4"
        />
        <p className="lg:text-base text-xs text-white leading-5">
          2021 CollegeClick, All rights reserved
        </p>
      </div>
    </div>
  );
};
export default Index;
