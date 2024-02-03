import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Card = ({ name, job, image, text, backward, forward, random }) => {
  return (
    <div className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>

      <div className="btn-container">
        <button className="prev-btn" onClick={backward}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={forward}>
          <FaChevronRight />
        </button>
      </div>
      <button className="btn btn-hipster" onClick={random}>
        surprise me
      </button>
    </div>
  );
};
export default Card;
