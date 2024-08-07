import Header from "./components/header";
import Banner from "./components/banner";
import Text from "./components/text";
import Card from "./components/card";
import Footer from "./components/footer";
import Carousel from "./components/carousel";

const imageUrls = [
  "https://img.freepik.com/free-photo/elephant-walking-road_181624-23124.jpg?t=st=1722866581~exp=1722870181~hmac=51d8113a87e95d30d815a14cb517f0a259b4b1d33ae83cca34a82ba2d8ac0b55&w=900",
  "https://img.freepik.com/free-photo/closeup-shot-elephants-standing-near-lake-sunset_181624-29375.jpg?t=st=1722866636~exp=1722870236~hmac=fab78616be537994db2c39dcd80e66853b6378531bcc1e4b96644d4eb6d3aaf4&w=900",
  "https://img.freepik.com/free-photo/group-giraffes-standing-grass-covered-hill-near-trees_181624-26603.jpg?t=st=1722866695~exp=1722870295~hmac=5e38539488234cad5395b937ef8df63925f7b9e828fe9ac6e0fb3552d0102198&w=900",
];

const slides = imageUrls.map((url, index) => (
  <img
    key={index}
    src={url}
    className="rounded-lg p-3 object-center"
  />
));

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 text-black md:text-purple-600">
      <div className="flex flex-col gap-0 md:gap-2 lg:gap-2 ">
        <Header />
        <Banner />
      </div>
      <Text text="Text 1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
        odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.
        Etiam ac turpis massa. Fusce eget odio varius, scelerisque lacus a,
        aliquam justo.
      </Text>{" "}
      <div className="hidden md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 w-[700px] h-[200px] items-center rounded-xl gap-2 bg-gray-800 p-3 ">
        {slides}
      </div>
      <Carousel slides={slides}></Carousel>
      <Text text="Text 2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
        odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.
        Etiam ac turpis massa. Fusce eget odio varius, scelerisque lacus a,
        aliquam justo.
      </Text>{" "}
      <div className="w-[400px] text-left m-2  md:hidden lg:hidden">
        <h3>
          <b>Note:</b>
        </h3>
        <p className="sm:text-xs text-left ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum in laborum optio reprehenderit tempore, enim minus aut
          incidunt expedita praesentium accusantium sunt neque exercitationem
          veniam illo doloremque laboriosam quos!
        </p>
      </div>
      <Footer />
    </div>
  );
}
