import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img src={img + "?grayscale"} alt="random" />
      <img
        className="food-img"
        src="https://fusedbyfionauyema.com/wp-content/uploads/2021/02/Fused-by-Fiona-Uyema-Sushi-Q-A-how-to-make-sushi-at-home.jpg"
        alt="Sushi"
      />
      <img
        className="food-img"
        src="https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900"
        alt="pizza"
      />
      <img
        className="food-img"
        src="https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/05/homemade-birria-tacos-recipe-3273w-500x500.jpg"
        alt="Tacos de birria"
      />
    </div>
  </div>,
  document.getElementById("root")
);
