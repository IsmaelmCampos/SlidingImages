import logo from "./logo.svg";
import img from "./components/img.jpg";
import img1 from "./components/es6img1.jpg";
import img2 from "./components/reactimg1.jpg";
import img3 from "./components/jsimg3.jpg";
import img4 from "./components/jsimg2.jpg";

import "./App.css";

const bar = ["purple1", "purple2", "purple3", "purple4", "purple5"];

/**
 * We're mapping over the array of strings, and for each string, we're creating a nav element with the
 * className of the string
 * @returns An array of nav elements
 */
const NaviBar = () => {
  const route = bar.map((bar, i) => (
    <nav className={bar} key={i}>
      {" "}
      NAV {i}{" "}
    </nav>
  ));
  return route;
};

/* The above code is a debounce function. It is used to limit the rate at which a function can fire. */
function debounce(func, wait = 6, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const images = document.querySelectorAll(".slide-in");

/**
 * If the image is half shown, and not scrolled past, add the class "active" to the image
 */
const slide = () => {
  images.forEach((e) => {
    const slideInAt = window.scrollY + window.innerHeight - e.height / 2;
    const imageBot = e.offsetTop + e.height;
    const halfShown = slideInAt > e.offsetTop;
    const notScrolledPast = window.scrollY < imageBot;

    halfShown && notScrolledPast
      ? e.classList.add("active")
      : e.classList.remove("active");
  });
};

window.addEventListener("scroll", debounce(slide));

function App() {
  return (
    <div className="App">
      <div id="left">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
          dignissim nisl. In ac odio hendrerit, lacinia justo sit amet, vehicula
          augue. Proin orci nulla, ultricies ut laoreet non, sagittis a nibh.
          Aenean vehicula tempus purus non vulputate. Aenean non est tincidunt,
          iaculis neque et, condimentum mi. Sed laoreet nisi augue, vel molestie
          risus finibus eu. Fusce semper sem sit amet arcu sodales, vitae
          porttitor sapien luctus. Suspendisse hendrerit, eros id luctus
          pretium, felis eros fringilla velit, ut ultricies risus felis eget
          purus. Vestibulum neque purus, pretium at varius ac, ornare vitae est.
          Proin consequat massa tincidunt diam congue, sed volutpat dolor
          pellentesque. Nulla fringilla nisi est, nec rutrum nibh accumsan vel.
          Nulla elit arcu, convallis dapibus pharetra ut, bibendum ac orci. Cras
          turpis est, tincidunt sed facilisis non, ultrices sed arcu.{" "}
        </p>{" "}
        <img
          className="align-left slide-in"
          src={img}
          alt="img"
          width="200"
          height="200"
        ></img>{" "}
        <p>
          Nam laoreet, nulla et fringilla ultricies, lacus odio imperdiet urna,
          condimentum vulputate mi eros in mi. Donec aliquam ornare laoreet. In
          quam felis, mollis in erat a, bibendum facilisis lacus. In convallis
          auctor dui et maximus. Pellentesque quis urna sit amet tellus
          malesuada pellentesque vulputate id magna. Maecenas dapibus risus in
          turpis hendrerit porta. Vivamus lobortis nisl at mauris sollicitudin,
          at sodales est laoreet.
        </p>
        <p>
          Pellentesque dictum hendrerit ligula, eget consequat risus imperdiet
          eget. Integer sit amet purus nec elit tristique ornare. Etiam quis
          consequat justo, in laoreet lectus. Suspendisse lacinia libero non
          aliquam vehicula. Phasellus in nibh at odio auctor ultricies.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Aenean vitae
          massa non leo porttitor molestie quis eget felis. Nunc imperdiet est
          ut efficitur congue.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
          dignissim nisl. In ac odio hendrerit, lacinia justo sit amet, vehicula
          augue. Proin orci nulla, ultricies ut laoreet non, sagittis a nibh.
          Aenean vehicula tempus purus non vulputate. Aenean non est tincidunt,
          iaculis neque et, condimentum mi. Sed laoreet nisi augue, vel molestie
          risus finibus eu. Fusce semper sem sit amet arcu sodales, vitae
          porttitor sapien luctus. Suspendisse hendrerit, eros id luctus
          pretium, felis eros fringilla velit, ut ultricies risus felis eget
          purus. Vestibulum neque purus, pretium at varius ac, ornare vitae est.
          Proin consequat massa tincidunt diam congue, sed volutpat dolor
          pellentesque. Nulla fringilla nisi est, nec rutrum nibh accumsan vel.
          Nulla elit arcu, convallis dapibus pharetra ut, bibendum ac orci. Cras
          turpis est, tincidunt sed facilisis non, ultrices sed arcu.{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
          dignissim nisl. In ac odio hendrerit, lacinia justo sit amet, vehicula
          augue. Proin orci nulla, ultricies ut laoreet non, sagittis a nibh.
          Aenean vehicula tempus purus non vulputate. Aenean non est tincidunt,
          iaculis neque et, condimentum mi. Sed laoreet nisi augue, vel molestie
          risus finibus eu. Fusce semper sem sit amet arcu sodales, vitae
          porttitor sapien luctus. Suspendisse hendrerit, eros id luctus
          pretium, felis eros fringilla velit, ut ultricies risus felis eget
          purus. Vestibulum neque purus, pretium at varius ac, ornare vitae est.
          Proin consequat massa tincidunt diam congue, sed volutpat dolor
          pellentesque. Nulla fringilla nisi est, nec rutrum nibh accumsan vel.
          Nulla elit arcu, convallis dapibus pharetra ut, bibendum ac orci. Cras
          turpis est, tincidunt sed facilisis non, ultrices sed arcu.{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
          dignissim nisl. In ac odio hendrerit, lacinia justo sit amet, vehicula
          augue. Proin orci nulla, ultricies ut laoreet non, sagittis a nibh.
          Aenean vehicula tempus purus non vulputate. Aenean non est tincidunt,
          iaculis neque et, condimentum mi. Sed laoreet nisi augue, vel molestie
          risus finibus eu. Fusce semper sem sit amet arcu sodales, vitae
          porttitor sapien luctus. Suspendisse hendrerit, eros id luctus
          pretium, felis eros fringilla velit, ut ultricies risus felis eget
          purus. Vestibulum neque purus, pretium at varius ac, ornare vitae est.
          Proin consequat massa tincidunt diam congue, sed volutpat dolor
          pellentesque. Nulla fringilla nisi est, nec rutrum nibh accumsan vel.
          Nulla elit arcu, convallis dapibus pharetra ut, bibendum ac orci. Cras
          turpis est, tincidunt sed facilisis non, ultrices sed arcu.{" "}
        </p>{" "}
        <img
          className="align-left slide-in"
          src={img2}
          alt="img"
          width="400"
          height="200"
        ></img>{" "}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
          dignissim nisl. In ac odio hendrerit, lacinia justo sit amet, vehicula
          augue. Proin orci nulla, ultricies ut laoreet non, sagittis a nibh.
          Aenean vehicula tempus purus non vulputate. Aenean non est tincidunt,
          iaculis neque et, condimentum mi. Sed laoreet nisi augue, vel molestie
          risus finibus eu. Fusce semper sem sit amet arcu sodales, vitae
          porttitor sapien luctus. Suspendisse hendrerit, eros id luctus
          pretium, felis eros fringilla velit, ut ultricies risus felis eget
          purus. Vestibulum neque purus, pretium at varius ac, ornare vitae est.
          Proin consequat massa tincidunt diam congue, sed volutpat dolor
          pellentesque. Nulla fringilla nisi est, nec rutrum nibh accumsan vel.
          Nulla elit arcu, convallis dapibus pharetra ut, bibendum ac orci. Cras
          turpis est, tincidunt sed facilisis non, ultrices sed arcu.{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
          dignissim nisl. In ac odio hendrerit, lacinia justo sit amet, vehicula
          augue. Proin orci nulla, ultricies ut laoreet non, sagittis a nibh.
          Aenean vehicula tempus purus non vulputate. Aenean non est tincidunt,
          iaculis neque et, condimentum mi. Sed laoreet nisi augue, vel molestie
          risus finibus eu. Fusce semper sem sit amet arcu sodales, vitae
          porttitor sapien luctus. Suspendisse hendrerit, eros id luctus
          pretium, felis eros fringilla velit, ut ultricies risus felis eget
          purus. Vestibulum neque purus, pretium at varius ac, ornare vitae est.
          Proin consequat massa tincidunt diam congue, sed volutpat dolor
          pellentesque. Nulla fringilla nisi est, nec rutrum nibh accumsan vel.
          Nulla elit arcu, convallis dapibus pharetra ut, bibendum ac orci. Cras
          turpis est, tincidunt sed facilisis non, ultrices sed arcu.{" "}
        </p>
        <p>
          Sed venenatis posuere hendrerit. Quisque imperdiet mollis eleifend.
          Pellentesque convallis ultricies dignissim. Suspendisse mattis rutrum
          nisi, ac ornare nunc lacinia quis. Sed dictum velit ut leo tincidunt,
          et consectetur leo porta. Pellentesque purus tellus, consectetur ac
          sapien eu, porttitor semper purus. Vivamus rhoncus justo non dui
          faucibus, id mattis tellus ullamcorper. Aenean egestas massa eu
          vulputate sagittis. Duis ullamcorper, tellus id tincidunt pretium,
          libero mi lobortis ipsum, vel efficitur leo lectus id arcu. In eget
          eleifend lacus. Praesent id lectus est. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse
          sed justo sed ex sollicitudin porttitor varius non magna. Praesent
          tristique vehicula elit, nec porta tellus rutrum ut.
        </p>
        <p>
          Duis diam magna, sagittis vel imperdiet at, lacinia cursus libero.
          Integer ornare at lectus at lacinia. Donec eleifend nulla id quam
          sagittis convallis. Nulla et scelerisque nunc, ut ultrices justo.
          Donec dignissim scelerisque leo, vitae porttitor elit congue sit amet.
          Praesent at augue sit amet risus dictum tempor vel at nisi. Donec
          dapibus, arcu at aliquet volutpat, est risus fringilla massa, a
          sodales nulla erat et ex.
        </p>{" "}
        <img
          className="align-left slide-in"
          src={img3}
          alt="img"
          width="200"
          height="200"
        ></img>{" "}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
          dignissim nisl. In ac odio hendrerit, lacinia justo sit amet, vehicula
          augue. Proin orci nulla, ultricies ut laoreet non, sagittis a nibh.
          Aenean vehicula tempus purus non vulputate. Aenean non est tincidunt,
          iaculis neque et, condimentum mi. Sed laoreet nisi augue, vel molestie
          risus finibus eu. Fusce semper sem sit amet arcu sodales, vitae
          porttitor sapien luctus. Suspendisse hendrerit, eros id luctus
          pretium, felis eros fringilla velit, ut ultricies risus felis eget
          purus. Vestibulum neque purus, pretium at varius ac, ornare vitae est.
          Proin consequat massa tincidunt diam congue, sed volutpat dolor
          pellentesque. Nulla fringilla nisi est, nec rutrum nibh accumsan vel.
          Nulla elit arcu, convallis dapibus pharetra ut, bibendum ac orci. Cras
          turpis est, tincidunt sed facilisis non, ultrices sed arcu.{" "}
        </p>{" "}
        <img
          className="align-right slide-in"
          src={img}
          alt="img"
          width="200"
          height="200"
        ></img>{" "}
        <p>
          Nam laoreet, nulla et fringilla ultricies, lacus odio imperdiet urna,
          condimentum vulputate mi eros in mi. Donec aliquam ornare laoreet. In
          quam felis, mollis in erat a, bibendum facilisis lacus. In convallis
          auctor dui et maximus. Pellentesque quis urna sit amet tellus
          malesuada pellentesque vulputate id magna. Maecenas dapibus risus in
          turpis hendrerit porta. Vivamus lobortis nisl at mauris sollicitudin,
          at sodales est laoreet.
        </p>
        <p>
          Pellentesque dictum hendrerit ligula, eget consequat risus imperdiet
          eget. Integer sit amet purus nec elit tristique ornare. Etiam quis
          consequat justo, in laoreet lectus. Suspendisse lacinia libero non
          aliquam vehicula. Phasellus in nibh at odio auctor ultricies.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Aenean vitae
          massa non leo porttitor molestie quis eget felis. Nunc imperdiet est
          ut efficitur congue.
        </p>
        <p>
          Sed venenatis posuere hendrerit. Quisque imperdiet mollis eleifend.
          Pellentesque convallis ultricies dignissim. Suspendisse mattis rutrum
          nisi, ac ornare nunc lacinia quis. Sed dictum velit ut leo tincidunt,
          et consectetur leo porta. Pellentesque purus tellus, consectetur ac
          sapien eu, porttitor semper purus. Vivamus rhoncus justo non dui
          faucibus, id mattis tellus ullamcorper. Aenean egestas massa eu
          vulputate sagittis. Duis ullamcorper, tellus id tincidunt pretium,
          libero mi lobortis ipsum, vel efficitur leo lectus id arcu. In eget
          eleifend lacus. Praesent id lectus est. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse
          sed justo sed ex sollicitudin porttitor varius non magna. Praesent
          tristique vehicula elit, nec porta tellus rutrum ut.
        </p>
        <p>
          Sed venenatis posuere hendrerit. Quisque imperdiet mollis eleifend.
          Pellentesque convallis ultricies dignissim. Suspendisse mattis rutrum
          nisi, ac ornare nunc lacinia quis. Sed dictum velit ut leo tincidunt,
          et consectetur leo porta. Pellentesque purus tellus, consectetur ac
          sapien eu, porttitor semper purus. Vivamus rhoncus justo non dui
          faucibus, id mattis tellus ullamcorper. Aenean egestas massa eu
          vulputate sagittis. Duis ullamcorper, tellus id tincidunt pretium,
          libero mi lobortis ipsum, vel efficitur leo lectus id arcu. In eget
          eleifend lacus. Praesent id lectus est. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse
          sed justo sed ex sollicitudin porttitor varius non magna. Praesent
          tristique vehicula elit, nec porta tellus rutrum ut.
        </p>{" "}
        <img
          className="align-right slide-in"
          src={img4}
          alt="img"
          width="200"
          height="200"
        ></img>{" "}
        <p>
          Duis diam magna, sagittis vel imperdiet at, lacinia cursus libero.
          Integer ornare at lectus at lacinia. Donec eleifend nulla id quam
          sagittis convallis. Nulla et scelerisque nunc, ut ultrices justo.
          Donec dignissim scelerisque leo, vitae porttitor elit congue sit amet.
          Praesent at augue sit amet risus dictum tempor vel at nisi. Donec
          dapibus, arcu at aliquet volutpat, est risus fringilla massa, a
          sodales nulla erat et ex.
        </p>
        <p>
          Sed venenatis posuere hendrerit. Quisque imperdiet mollis eleifend.
          Pellentesque convallis ultricies dignissim. Suspendisse mattis rutrum
          nisi, ac ornare nunc lacinia quis. Sed dictum velit ut leo tincidunt,
          et consectetur leo porta. Pellentesque purus tellus, consectetur ac
          sapien eu, porttitor semper purus. Vivamus rhoncus justo non dui
          faucibus, id mattis tellus ullamcorper. Aenean egestas massa eu
          vulputate sagittis. Duis ullamcorper, tellus id tincidunt pretium,
          libero mi lobortis ipsum, vel efficitur leo lectus id arcu. In eget
          eleifend lacus. Praesent id lectus est. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse
          sed justo sed ex sollicitudin porttitor varius non magna. Praesent
          tristique vehicula elit, nec porta tellus rutrum ut.
        </p>{" "}
        <img
          className="align-left slide-in"
          src={img1}
          alt="img"
          width="200"
          height="200"
        ></img>{" "}
      </div>
      <div id="right">
        <NaviBar />
      </div>
    </div>
  );
}

export default App;
