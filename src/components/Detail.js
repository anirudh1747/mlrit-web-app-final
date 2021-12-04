import React from "react";
  
function Detail({ selected, closeDetail }) {
  return (
    <section className="detail">
      <div className="content">
        <h2>{selected.Title}</h2>
        <p className="rating">Rating: {selected.imdbRating}</p>
        <span classname="year">Year of release: {selected.Year}</span>
        <div className="about">
          <img src={selected.Poster} alt="" />
            
<p>{selected.Plot}</p>
        <div class="review">
          <textarea class="textarea" id="review" name="review" rows="15" cols="80"></textarea> 
          <input class="submit" type="submit" value="Submit Review"></input>
        </div>
        </div>
        <button className="close" onClick={closeDetail}>
          Close
        </button>
      </div>
    </section>
  );
}
  
export default Detail;