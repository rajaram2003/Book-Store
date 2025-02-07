import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from "../../public/list.json"
import Cards from "./Cards";

const Freebooks = () => {
  const filterData = list.filter((Data) => Data.category === "Free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };

  console.log(filterData);
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
      <h1 className="font-semibold text-2xl pb-2">Free Offered Books</h1>
      <p>Explore a wide selection of free books across various genres, offering knowledge, entertainment, and inspiration without cost.</p>
      </div>

    <div>
    <Slider {...settings}>
    {filterData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
      </Slider>
    </div>
    </div>
    </>
  );
}

export default Freebooks
